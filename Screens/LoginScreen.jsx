import { Entypo, MaterialIcons } from "@expo/vector-icons";

import React, { useState } from "react";
import {
  View,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = () => {
  isPass = true;
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  return (
    <ImageBackground
      source={require("../assets/bgg.jpg")}
      style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            marginTop: -100,
            fontSize: 28,
            fontWeight: "900",
            color: "#fff",
            marginBottom: 20,
            textAlign: "left",
          }}
        >
          Hi!
        </Text>
        <View
          style={{
            padding: 20,
            margin: 10,

            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: 10,
            elevation: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              marginTop: 20,
              borderRadius: 50,
              borderWidth: 2,
              margin: 5,
              padding: 8,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "#fff",
            }}
          >
            <MaterialIcons name="email" color={"#fff"} size={24} />
            <TextInput
              isPass={false}
              placeholder="EMAIL"
              placeholderTextColor={"#fff"}
              style={{
                flex: 1,
                marginTop: 1,
                fontWeight: "500",
                color: "#fff",
              }}
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
          </View>
          <View
            style={{
              marginTop: 20,
              borderRadius: 50,
              borderWidth: 2,
              margin: 5,
              padding: 8,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "#fff",
            }}
          >
            <MaterialIcons name="lock" color={"#fff"} size={24} />
            <TextInput
              isPass={true}
              secureTextEntry={isPass && showPass}
              placeholder="Password..."
              placeholderTextColor="#fff"
              style={{
                flex: 1,
                marginTop: 1,
                fontWeight: "500",
                color: "#fff",
              }}
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize="none"
            />
            {isPass && (
              <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                <Entypo
                  name={`${showPass ? "eye-with-line" : "eye"}`}
                  size={24}
                  color={"#fff"}
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#f5cb5c",
              paddingVertical: 15,
              borderRadius: 25,
              marginTop: 20,
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800" }}>
            or
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",

                borderRadius: 25,
                marginTop: 20,
                width: "100%",
              }}
            >
              <Entypo name="facebook" size={20} color="blue" />
              <Text
                style={{
                  color: "#000",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Continue with FaceBook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
