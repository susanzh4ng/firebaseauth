import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native-web";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const user = getAuth().currentUser;
  const navigation = useNavigation()

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
    .then(() => {
      navigation.replace('Login')
    }).catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage)
    });    
  }

  return (
    <View style={styles.container}>
      <Text>Email: {user?.email}</Text>
      <Pressable style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#0782f9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
