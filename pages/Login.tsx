import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/types";
import { login } from "../store/actions";
import { AuthActionTypes } from "../store/types";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: ThunkDispatch<RootState, null, AuthActionTypes> = useDispatch();

  const handleLogin = () => {
   
    dispatch(login(username, password));
  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Eurofirm</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setUsername(text)}
          value={username}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 25,
    paddingLeft: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#1e90ff",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default LoginScreen;
