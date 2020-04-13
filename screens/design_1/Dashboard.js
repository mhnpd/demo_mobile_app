import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { D1Colors } from "./styles";

function Dashboard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flex: 9,
            flexDirection: "row",
            alignItems: "center",
            elevation: 2,
          }}
        >
          <Image
            resizeMode="center"
            resizeMode="cover"
            source={{ uri: "https://placeimg.com/100/100/animals" }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Mohan Upadhyay</Text>
        </View>
        <View style={styles.notificationContainer}>
          <Ionicons name="ios-notifications" size={32} color={"white"} />
        </View>
      </View>
      <View style={styles.greetingContainer}>
        <Text style={styles.bigHeading}>Good Morning</Text>
        <Text style={styles.normalText}>We wish you have a good day.</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search anything" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(154, 54, 84, 0.4) ",
    paddingTop: "14%",
    paddingHorizontal: 16,
    color: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  profileName: {
    paddingLeft: 5,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  notificationContainer: {
    flex: 1,
    backgroundColor: "rgba(41, 36, 35, 0.4)",
    alignItems: "center",
    borderRadius: 20,
  },
  greetingContainer: {
    paddingTop: 20,
  },
  bigHeading: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
  normalText: {
    color: "white",
    fontSize: 16,
  },
  searchContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    backgroundColor: "rgba(41, 36, 35, 0.4)",
    borderRadius: 10,
    height: 50,
    paddingLeft: 20,
  },
});

export default Dashboard;
