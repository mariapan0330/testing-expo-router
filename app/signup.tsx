import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SignUp</Text>
      <Link href="/">Go to Login</Link>
    </View>
  );
};

export default SignUp;
