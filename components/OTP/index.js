import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { colors, fontWeights, padding, textSizes , margin, borderRadius } from "../../theme/config";

const OtpInput = ({ setOtp, otp }) => {
  const [focusedInput, setFocusedInput] = useState(0);
  const inputs = useRef([]);

  const handleChange = (event, index) => {
    const { text } = event.nativeEvent;
    const updatedOtp = otp.split("");
    updatedOtp[index] = text;
    setOtp(updatedOtp.join(""));
    if (text) {
        const nextInput = index + 1;
        if (nextInput < 4) {
          inputs.current[nextInput].focus();
        } else if (otp === '1234') {
          navigation.navigate('Profile');
        }
      }
  };

  const handleFocus = (index) => {
    setFocusedInput(index);
  };

  return (
    <View style={styles.container}>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <TextInput
            key={index}
            style={[
              styles.input,
              otp[index] ? styles.filledInput : styles.emptyInput,
            ]}
            keyboardType="number-pad"
            maxLength={1}
            value={otp[index] || ""}
            onChange={(event) => handleChange(event, index)}
            onFocus={() => handleFocus(index)}
            ref={(input) => {
              inputs.current[index] = input;
            }}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: margin["10"],
  },
  input: {
    width: 67,
    height: 67,
    borderWidth: 1,
    borderColor: colors["brand-red"],
    textAlign: "center",
    fontSize: textSizes["3.5xl"],
    borderWidth: 1,
    margin: margin["1"],
    borderRadius: borderRadius["xl"],
    


  },
  filledInput: {
    backgroundColor: colors["brand-red"],
    color:colors['white'],
    fontWeight: fontWeights.bold,


  },
  emptyInput: {
    backgroundColor: "white",
  },
});

export default OtpInput;
