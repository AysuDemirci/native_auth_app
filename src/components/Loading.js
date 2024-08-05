import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React from "react";

export default function Loading(props) {
    const {changeIsLoading}=props
  return (
    <View style={styles.container}>
      <Pressable style={[{}, styles.closeButtonContainer]} onPress={()=>changeIsLoading()}>
        <Text style={styles.closeButton}>X</Text>
      </Pressable>

      <ActivityIndicator size={"large"} color={"#404aa8"} />
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#edf1fe",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#404aa8",
    marginTop: 20,
  },
  closeButtonContainer: {
    backgroundColor: "#404aa8",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 50,
    right: 10,
  },
  closeButton: {
    color: "#edf1fe",
    fontWeight: "bold",
    fontSize: 16,
  },
});
