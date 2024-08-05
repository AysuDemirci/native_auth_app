import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginPage, SignupPage } from "../screens/Index";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignupPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
