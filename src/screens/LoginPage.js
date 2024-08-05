import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Loading, CustomTextInput, CustomButton } from "../components/Index";

export default function LoginPage({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Image
        source={require("../../assets/images/loginIcon.png")}
        style={styles.image}
      />
      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceholder="Enter Your Password"
      />
      <CustomButton
        buttonText="Save"
        setWidth="80%"
        handleOnPress={() => setIsLoading(true)}
        buttonColor="#6864f7"
        pressedButtonColor="lightgray"
      />
      <CustomButton
        buttonText="Sign Up"
        setWidth="30%"
        handleOnPress={() => navigation.navigate("SignUp")}
        buttonColor="gray"
        pressedButtonColor="lightgray"
      />
      {isLoading ? (
        <Loading changeIsLoading={() => setIsLoading(false)} />
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf1fe",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
    color: "#404aa8",
  },
});
