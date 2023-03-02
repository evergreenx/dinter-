import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signup from "../../screens/Auth/Signup";
import Signin from "../../screens/Auth/Signin";
import Number from "../../screens/Auth/Number";
import Onboarding from "../../screens/Onboarding/index";
import OtpInput from "../../screens/Auth/OTP";
import LogoSvg from "../../assets/logo.svg";
import ProfileUpdate from "../../screens/Auth/ProfileUpdate";

// import { MyHeader } from "../../components/Header.js/index";

const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <Stack.Navigator
 
    >
      {/* <Stack.Screen
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
      /> */}
      {/* <Stack.Screen
        name="number"
        component={Number}
        options={{
          headerShown: true,
          headerTitle: "",
          headerShadowVisible: false,
          animation : 'slide_from_bottom',
          headerBackTitleVisible: false,

          headerTintColor: '#E94057',



        }}
      /> */}

{/* <Stack.Screen
        name="otp"
        component={OtpInput}
        options={{
          headerShown: true,
          headerTitle: "",
          headerShadowVisible: false,
          animation : 'fade',
          headerBackTitleVisible: false,

          headerTintColor: '#E94057',



        }}
      /> */}

<Stack.Screen
        name="profileupdate"
        component={ProfileUpdate}
        options={{
          headerShown: true,
          headerTitle: "",
          headerShadowVisible: false,
          animation : 'fade',
          headerBackTitleVisible: false,

          headerTintColor: '#E94057',



        }}
      />
    </Stack.Navigator>
  );
};

export default Index;
