import React from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Data from "./data";
import { Typography, Layouts, Cards, Colors } from "../../stylesUtils";
import data from "./data";

const Design2 = (props) => {
  return (
    <View>
      <View style={{ marginTop: 50, ...Layouts.root, color: "#fff" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ paddingVertical: 4, marginVertical: 10 }}>
            <AntDesign name="menu-fold" size={24} color="#444444" />
          </View>
          <View style={{ paddingVertical: 4, marginVertical: 10 }}>
            <MaterialCommunityIcons
              name="face-profile"
              size={32}
              color="#444444"
            />
          </View>
        </View>
        <Text
          style={{ ...Typography.h4, fontWeight: "bold", color: "#444444" }}
        >
          <Text>Explore {"\n"}</Text>
          <Text>
            the World <Text style={{ ...Typography.h6 }}>🌎</Text>
          </Text>
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 20,
          marginLeft: 20,
          paddingRight: 40,
        }}
      >
        {Data.categories.map((item) => (
          <View
            key={item.topic}
            style={{
              ...Colors.secondaryLayoutBg,
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 10,
              marginRight: 10,

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                ...Typography.subtitleSecondary,
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              <Text>{item.emoji + "  "}</Text>
              <Text>{item.topic}</Text>
            </Text>
          </View>
        ))}
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20, marginTop: 20 }}
      >
        {data.suggestion.map((item) => (
          <View
            key={item.name}
            style={{
              marginRight: 30,
            }}
          >
            <Text
              style={{
                ...Typography.bodyPrimary,
                fontSize: 16,
                fontWeight: "bold",
                letterSpacing: -0.5,
                color: item.active ? "#444444" : "#a9a9a9",
              }}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 10,
          marginTop: 20,
          paddingEnd: 20,
        }}
      >
        {data.popular.map((item) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("TourDetails", { details: item })
            }
          >
            <ImageBackground
              style={{
                width: 190,
                height: 330,
                marginLeft: 10,
                position: "relative",
              }}
              imageStyle={{ borderRadius: 30 }}
              resizeMode="stretch"
              source={item.image}
            >
              <View
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  padding: 5,
                  borderRadius: 5,
                  backgroundColor: "rgba(196, 193, 192, 0.5)",
                }}
              >
                <AntDesign
                  name="heart"
                  size={16}
                  color="rgba(222, 222, 222, 0.7)"
                />
              </View>
              <View style={{ position: "absolute", top: "50%", left: 5 }}>
                <Text
                  style={{
                    ...Typography.h6,
                    color: "#FFF",
                    fontWeight: "bold",
                    paddingBottom: 5,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    ...Typography.bodyPrimary,
                    color: "#fff",
                    width: 180,
                  }}
                >
                  {item.subtitle}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
          paddingHorizontal: 40,
        }}
      >
        <View>
          <Feather name="compass" size={24} color="black" />
        </View>
        <View>
          <FontAwesome name="search" size={24} color="#4444" />
        </View>
        <View>
          <Feather name="map" size={24} color="#4444" />
        </View>
      </View>
    </View>
  );
};

export default Design2;
