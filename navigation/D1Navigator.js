import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/design_1/login";
import Dashboard from "../screens/design_1/Dashboard";

const Stack = createStackNavigator();

export function Design1Stack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
