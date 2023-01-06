import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import {
  colors,
  borderRadius,
  textSizes,
  fontWeights,
  margin,
} from "../../theme/config";
import LogoSvg from "../../assets/logo.svg";
import Button from "../../components/Buttons";

const Signup = ({ navigation }) => {
  const goForward = () => {
  navigation.navigate("number");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <LogoSvg style={styles.logoContainer} />

        <Text style={styles.text}>Sign Up to continue </Text>
        <Text></Text>
      </View>

      <View style={styles.signinButtons}>
        <Button
          text="Continue with email"
          onPress={() => navigation.navigate("signup")}
          bordered // this is a prop
        />
      </View>

      <View style={styles.signinButtons}>
        <Button
          text="Use phone number"
          onPress={() => goForward()}
          bordered // this is a prop
          type={"outlined"} // this is a prop
        />
      </View>

      <View style={styles.termsOfUse}>
        <Text style={styles.termsText}>Terms of use</Text>

        <Text style={styles.termsText}>Privacy Policy</Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: colors["white"],
    height: "100%",
    margin: "auto",
    width: "100%",
    padding: 22,
  },
  item: {
    width: "100%",
    height: "80%",
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },

  title: {
    fontSize: textSizes["2xl"],
    fontWeight: fontWeights.bold,
    color: colors["brand-red"],
    textAlign: "center",
    marginTop: margin[10],
  },

  subtitle: {
    fontSize: textSizes["base"],
    fontWeight: fontWeights.normal,
    textAlign: "center",
    margin: margin["5"],
    color: colors["brand-text"],
  },
  signintext: {
    marginTop: margin["5"],
    textAlign: "center",
    color: colors["black"],
    fontSize: textSizes.sm,
    fontWeights: fontWeights.normal,
  },

  signinlink: {
    color: colors["brand-red"],
  },

  text: {
    color: colors["text-black"],
    fontSize: textSizes["2xl"],
    fontWeight: fontWeights.bold,
  },

  logoContainer: {
    width: 100,
    height: 100,
    margin: 90,
  },
  signinButtons: {
    marginTop: 20,
    marginBottom: 20,
  },

  termsOfUse: {
    marginTop: 20,
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 20,
  },

  termsText: {
    color: colors["brand-red"],
    fontSize: textSizes["sm"],
    fontWeight: fontWeights.normal,
    marginRight: 20,
  },
});
