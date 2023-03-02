// import './patches/ignoreWarnings';

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { apply } from "./theme/styles";
import Onboarding from "./screens/Onboarding/index";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from 'react-native-paper';
import Auth from "./navigation/Auth/index";
export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
    </PaperProvider>
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
