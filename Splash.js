// screens/SplashScreen.js
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay, e.g., 2000ms (2 seconds)
    setTimeout(() => {
      navigation.replace("Login"); // Replace with your navigator's name
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("./assets/splash.png")} />
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
