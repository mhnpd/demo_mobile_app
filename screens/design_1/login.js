import React from "react";
import { View, StyleSheet, Image, Text, Platform } from "react-native";
import { D1Colors } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const Login = props => {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer,styles.elevationLow ]}>
        <Animatable.Image
          animation="bounceIn"
          duration={1000}
          iterationCount={1}
          resizeMode="center"
          resizeMethod="auto"
          style={[styles.image]}
          source={require("../../assets/d1/undraw_Eiffel_tower_3gw8.png")}
        />
      </View>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <View style={{ paddingHorizontal: 16, justifyContent: "center" }}>
          <Text style={styles.generalText}>
            <Text>A mind that is stretched by a new experience</Text>
            <Text> can never go back to its old dimensions.</Text>
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
          <Animatable.Text
            animation="fadeOutRight"
            duration={3000}
            iterationCount={"infinite"}
            style={styles.loginArrow}
          >
            <FontAwesome name="angle-double-right" size={20} />
          </Animatable.Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", paddingTop: 0 }}>
          <Text>
            Don't have accounts?
            <Text style={{ fontWeight: "bold" }}> Signup</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: "15%",
    backgroundColor: D1Colors.primary,
    flex: 1,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  imageContainer: {
    marginTop: 60
  },
  image: {
    width: 300,
    height: 300
  },
  welcomeTextContainer: {
    paddingBottom: 10
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center",
    color: D1Colors.secondary,
    padding: 5
  },
  loginButton: {
    height: 40,
    width: 200,
    flexDirection: "row",
    paddingLeft:10,
    backgroundColor: D1Colors.secondary,
    borderRadius: 5,
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    paddingLeft: 15
  },
  loginArrow: {
    paddingRight: 30,
    color: "#fff"
  },
  generalText: {
    color: D1Colors.secondary,
    textAlign: "center",
    padding: 4,
    fontSize: 16
  }
});
