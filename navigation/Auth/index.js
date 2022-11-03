import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signup from "../../screens/Auth/Signup";
import Signin from "../../screens/Auth/Signin";
import Onboarding from "../../screens/Onboarding/index";

const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="signup" component={Signup} 
              options={{ headerShown: false }}
      
      />
      <Stack.Screen name="signin" component={Signin} 
        options={{ headerShown: false }}

      
      />

    </Stack.Navigator>
  );
};

export default Index;
