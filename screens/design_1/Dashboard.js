import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import {
  LineChart,
  BarChart,
  // PieChart,
  // ProgressChart,
  // ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#f07807",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#a36327",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["Day1", "Day 2", "Day 3", "Day 4"],
  legend: ["E1", "E2", "E3"],
  data: [
    [60, 60, 60],
    [30, 30, 60],
    [30, 34, 45],
    [30, 67, 160],
  ],
  barColors: ["#f07807", "#ced6e0", "#a36327"],
};

function Dashboard(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
            style={styles.profileImage}
            resizeMethod="auto"
            resizeMode="cover"
            source={{ uri: "https://placeimg.com/100/100/person" }}
          />
          <Text style={styles.profileName}>Mark Mason</Text>
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
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="#000"
          placeholder="Search anything"
        />
      </View>
      <View
        horizontal
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <StackedBarChart
          style={styles.graphStyle}
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </View>
      <Text style={{ ...styles.bigHeading, fontSize: 16, padding: 10 }}>
        Todays Update
      </Text>
      <ScrollView horizontal contentContainerStyle={{ marginLeft: 10 }}>
        {[1, 2, 3, 4, 5].map((item) => (
          <View
            style={{
              width: 160,
              height: 250,
              marginRight: 10,
            }}
          >
            <View
              style={{
                width: 150,
                height: 200,
                borderRadius: 10,
              }}
            >
              <Image
                source={{ uri: "https://placeimg.com/200/100/animals" }}
                resizeMethod="auto"
                resizeMode="cover"
                style={{
                  width: 150,
                  height: 80,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <View
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  width: 150,
                  padding: 10,
                  paddingLeft: 5,
                  borderBottomLeftRadius: 10,
                  borderBottomEndRadius: 10,
                }}
              >
                <Text style={{ fontSize: 14, paddingBottom: 2 }}>
                  Deep Sleep
                </Text>
                <Text style={{ fontSize: 10, color: "rgba(42, 42, 42, 0.5)" }}>
                  Excepteur dolore deserunt sunt consectetur velit ut ullamco
                  do.
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000", //"rgba(42, 42, 42, 0.9) ",
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
    color: "rgba(230, 224, 224, 1)",
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
    color: "rgba(230, 224, 224, 1)",
  },
  normalText: {
    color: "rgba(230, 224, 224, 1)",
    fontSize: 16,
  },
  searchContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    backgroundColor: "#cecece", //"rgba(41, 36, 35, 0.4)",
    borderRadius: 10,
    color: "#000",
    height: 50,
    paddingLeft: 20,
  },
  graphStyle: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default Dashboard;
