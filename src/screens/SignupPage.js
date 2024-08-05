import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

export default function SignupPage({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Image
          style={styles.image}
          source={require("../../assets/images/signUp.png")}
        />
        <Text style={styles.signUp}>Sign Up</Text>
      </View>

      <View style={styles.textInputContainer}>
        <CustomTextInput
          title="Name"
          isSecureText={false}
          handleOnChangeText={setName}
          handleValue={name}
          handlePlaceholder="Enter Your Name"
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
          handlePlaceholder="Create Your Password"
        />
      </View>
      <View style={styles.signUpOptions}>
        <CustomButton
          buttonText="Sign Up"
          setWidth="80%"
          handleOnPress={() => console.log(name, " ", email, " ", password)}
          buttonColor="#6864f7"
          pressedButtonColor="lightgray"
        />

        <Pressable onPress={()=>navigation.navigate("Login")}>
          <Text style={{fontWeight:"bold"}}>Already have an account? Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edf1fe",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  signUp: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
    color: "#404aa8",
  },
  title: {
    flex: 2,
    paddingTop:30,
    width:"100%",
    alignItems:"center",
  },
  textInputContainer: {
    flex: 2,
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },

  signUpOptions: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent:"space-between"

  },
  image: {
    width: 110,
    height: 110,
    marginBottom: 30,
  },
});
