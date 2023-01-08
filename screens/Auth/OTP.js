import React, { useState, useEffect } from "react";
import OTP from "../../components/OTP";
import { View, TextInput, Button, Text } from "react-native";
import { AuthLayout } from "../../Layout/AuthLayout";
import { colors, fontWeights, margin, textSizes } from "../../theme/config";

const OtpInput = () => {
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(59);

  const handleChange = (text) => {
    setOtp(text);
  };

  const handleSubmit = () => {
    // submit the OTP to your server or verify it locally
    if (otp === "1234") {
      // navigate to the next screen
      // alert('go to next page ')
    }
  };

  const handleResend = () => {
    // request a new OTP from your server
    setCountdown(30);
  };

  const handleKeyPress = (key) => {
    setOtp(otp + key);
  };

  // render custom numeric keyboard
  const renderKeyboard = () => {
    const keyboard = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    return (
      <View style={styles.keyboardContainer}>
        {keyboard.map((key) => (
          <Button title={key} onPress={() => handleKeyPress(key)} />
        ))}
      </View>
    );
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown]);
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <AuthLayout>
      <View style={styles.OTPContainer}>
        <View>
          {countdown > 0 && (
            <Text style={styles.countDown}>
              {minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}
            </Text>
          )}

          <Text style={styles.otpinstructions}>
            Type the verification code we’ve sent you
          </Text>

          <OTP setOtp={setOtp} otp={otp} />
        </View>

        {/* {renderKeyboard()} */}


{/* send OTP after countDown */}
        {countdown === 0 && (
          <Text style={styles.resendOTP} onPress={handleResend}>
            Send again
          </Text>
        )}
      </View>
    </AuthLayout>
  );
};

const styles = {
  keyboardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  countDown: {
    fontSize: textSizes["3.5xl"],
    textAlign: "center",
    fontWeight: fontWeights["bold"],
    color: colors["text-black"],
  },
  otpinstructions: {
    fontSize: textSizes["lg"],
    textAlign: "center",
    width: "60%",
    marginHorizontal: 22,
    justifyContent: "center",
    alignSelf: "center",
    color: colors["brand-text-light"],
    fontWeight: fontWeights["normal"],
    marginTop: margin["6"],
  },
  resendOTP: {
    fontSize: textSizes["base"],
    textAlign: "center",
    color: colors["brand-red"],
    fontWeights: fontWeights["bold"],
    alignSelf: "center",
  },

  OTPContainer: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    backgroundColor: colors["white"],
    justifyContent: "space-between",
    padding: 10,
  },
};

export default OtpInput;
