import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomTextInput = (props) => {
  const {
    title,
    isSecureText,
    handleOnChangeText,
    handleValue,
    handlePlaceholder,
  } = props;
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>
      <TextInput
        secureTextEntry={isSecureText}
        style={styles.textInputStyle}
        placeholder={handlePlaceholder}
        onChangeText={handleOnChangeText}
        value={handleValue}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  inputBoxText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "#404aa8",
  },
  textInputStyle: {
    borderBottomWidth: 0.5,
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
    borderColor: "#494fc3",
    color: "#494fc3",
  },
});
