import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, ImageBackground, Text, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

import data from "./data";
import { Typography } from "../../stylesUtils";
import { TouchableOpacity } from "react-native-gesture-handler";

function TourDetails(props) {
  const { details } = props.route.params;
  return (
    <ImageBackground
      style={{
        flex: 1,
        width: screenWidth,
        height: screenHeight + 50,
        position: "relative",
      }}
      resizeMode="stretch"
      source={details.image}
    >
      <View
        style={{
          position: "absolute",
          top: 40,
          left: 20,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "rgba(196, 193, 192, 0.5)",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="rgba(222, 222, 222, 0.7)"
            style={{ paddingRight: 30 }}
          />
        </TouchableOpacity>
        <AntDesign name="heart" size={24} color="rgba(222, 222, 222, 0.7)" />
      </View>
      <View style={{ position: "absolute", top: "70%", left: 20 }}>
        <Text
          style={{
            ...Typography.h4,
            color: "#FFF",
            fontWeight: "bold",
            paddingBottom: 5,
          }}
        >
          {details.title}
        </Text>
        <Text
          style={{
            ...Typography.bodySecondary,
            color: "#fff",
            width: 300,
            letterSpacing: 1.15,
          }}
        >
          {details.subtitle}
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 40,
          left: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              $20/person
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 12,
              borderRadius: 10,
              marginLeft: "30%",
            }}
          >
            <Text style={{ ...Typography.h6, color: "#444444" }}>Book Now</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default TourDetails;
