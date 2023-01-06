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

const CustomHeader = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      style={styles.backArrowContainer}
      onPress={() => handleGoBack()}
    >
      <BackArrow style={styles.backArrowContainer} />
    </TouchableOpacity>
  );
};

export default function Number({ navigation }) {
  return (
    // <SafeAreaView style={styles.container}>
    <>
      <SafeAreaView style={styles.container}>
        <StatusHeader />

        <CustomHeader navigation={navigation} />

        <AuthLayout>
          <View style={styles.numbercontainer}>
            <Text style={styles.textCustomHeading}>My mobile</Text>

            <Text style={styles.text}>
              Please enter your valid phone number. We will send you a 4-digit
              code to verify your account.
            </Text>

            <NumeberInput />

            <View>
              <Button
                text="Continue"
                onPress={() => navigation.navigate("signup")}
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
    // height: "100%",
    // justifyContent: "flex-start",

    // marginTop: 30,

    width: "100%",
    padding: 20,
    // marginTop: 30,
  },
  numbercontainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
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

  backArrowContainer: {
    // width: 100,
    // height: 10,
    padding: 10,
    // borderColor: colors["brand-primary"],
    // borderWidth: 1,
    // borderRadius: borderRadius["lg"],
  },
});
