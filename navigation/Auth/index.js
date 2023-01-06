import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signup from "../../screens/Auth/Signup";
import Signin from "../../screens/Auth/Signin";
import Number from "../../screens/Auth/Number";
import Onboarding from "../../screens/Onboarding/index";
import LogoSvg from "../../assets/logo.svg";

// import { MyHeader } from "../../components/Header.js/index";

const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="number"
        component={Number}
        options={{
          headerShown: false,
          headerTitle: "",
          headerShadowVisible: false,
          animation : 'slide_from_bottom',
          headerBackTitleVisible: false,

        }}
      />
    </Stack.Navigator>
  );
};

export default Index;
