import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import { useSelector } from "react-redux";
import app from "../../FirebaseConfig";

export default function RootNavigation() {
  const { isAuth } = useSelector((state) => state.user);

  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
}
