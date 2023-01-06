import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { colors, padding } from "../theme/config";

export function AuthLayout({ children, ...restProps }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors["white"],
    // height: "100%",
    justifyContent: "center",


    // marginTop: 30,

    width: "100%",


    paddingTop: 30,
    paddingLeft:20,
    paddingRight:20
  },
});
