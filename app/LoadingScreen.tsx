import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Home from "./(tabs)/home";

const LoadingScreen = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to SnoozeSense</Text>
      <Button title="continue" onPress={() => router.replace("/(tabs)/home")} />
    </View>
  );
};

export default LoadingScreen;
