import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const modal = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>modal!!!!</Text>
      <Link href="/">Go Back to Login</Link>
    </View>
  );
};

export default modal;
