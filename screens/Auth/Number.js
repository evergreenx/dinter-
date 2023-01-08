import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  colors,
  borderRadius,
  textSizes,
  fontWeights,
  margin,
  textCustomHeading,
  padding,
} from "../../theme/config";
import Button from "../../components/Buttons";
import React from "react";
import NumeberInput from "../../components/NumberInput";
import StatusHeader from "../../components/StatusHeader";
import { AuthLayout } from "../../Layout/AuthLayout";
import BackArrow from "../../assets/back.svg";
import { style } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";

export default function Number({ navigation }) {
  return (
    // <SafeAreaView style={styles.container}>
    <>
      <SafeAreaView style={styles.container}>
        <StatusHeader />

        <AuthLayout>
          <View style={styles.numbercontainer}>
            <Text style={styles.textCustomHeading}>My mobile</Text>

            <Text style={styles.text}>
              Please enter your valid phone number. We will send you a 4-digit
              code to verify your account.
            </Text>

            <NumeberInput />

            <View style={styles.buttonContainer}>
              <Button
                text="Continue"
                onPress={() => navigation.navigate("otp")}
                bordered // this is a prop
              />
            </View>
          </View>
        </AuthLayout>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors["white"],


    width: "100%",
    padding: 20,
  },
  numbercontainer: {
    flex: 1,
    padding: 20,
    marginTop: 60,
  },
  textCustomHeading: {
    fontSize: textSizes["3.5xl"],
    fontWeight: fontWeights["bold"],
    color: colors["text-black"],
    textAlign: "left",
    marginBottom: 10,
  },
  text: {
    fontSize: textSizes["sm"],
    fontWeight: fontWeights["normal"],
    color: colors["brand-text-light"],
    marginBottom: 20,
    textAlign: "left",
  },
  buttonContainer :{
    marginTop: 50,
  }
});
