import React from "react";
import { View, StyleSheet, Image, Text, Platform } from "react-native";
import { Typography, Colors } from "../../stylesUtils";

const Design2 = (props) => {
  return (
    <View style={{ marginTop: 50,...Colors.bgLayout }}>
      <View>
        <Text style={{...Typography.h1, ...Colors.primary, ...Colors.secondary}}>hi</Text>
        <Text style={Typography.h2}>h2</Text>
        <Text style={Typography.h3}>hi</Text>
        <Text style={Typography.h4}>hi</Text>
        <Text style={Typography.h5}>hi</Text>
        <Text style={Typography.h6}>h6</Text>
        <Text style={Typography.subtitlePrimary}>hi</Text>
        <Text style={Typography.subtitleSecondary}>hi</Text>
        <Text style={Typography.bodyPrimary}>Body Primary</Text>
        <Text style={Typography.bodySecondary}>Body Secondary</Text>
        <Text style={Typography.caption}>Captions</Text>
      </View>
    </View>
  );
};

export default Design2;
