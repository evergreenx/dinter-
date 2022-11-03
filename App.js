// import './patches/ignoreWarnings';

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { apply } from "./theme/styles";
import Onboarding from "./screens/Onboarding/index";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./navigation/Auth/index";
export default function App() {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
});
