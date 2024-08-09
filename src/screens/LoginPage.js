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
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "../redux/UserSlice";
import { login } from "../redux/UserSlice";

export default function LoginPage({ navigation }) {
  //UserSlice içerisindeki verilerin okunması

  const { isLoading } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //UserSlic içerisindeki reducer yapılarını kullanma veya veri gönderme
  const dispatch = useDispatch();

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
        handleOnChangeText={(text) => setEmail(text)}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={(password) => setPassword(password)}
        handleValue={password}
        handlePlaceholder="Enter Your Password"
      />
      <CustomButton
        buttonText="Login"
        setWidth="80%"
        handleOnPress={() => dispatch(login({ email, password }))}
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
        <Loading changeIsLoading={() => dispatch(setIsLoading(false))} />
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
