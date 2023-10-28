import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  // the only thing that this does is ensure that all components on this level are rendered as stack
  //   if you put info into this layout, it will only render that info not the other components.
  return (
    <Stack
      screenOptions={{ headerShown: false, headerStyle: { backgroundColor: "pink" } }}
    >
      <Stack.Screen
        name="modal"
        options={{ presentation: "containedModal", headerShown: true }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
    </Stack>
  );
};

export default StackLayout;
