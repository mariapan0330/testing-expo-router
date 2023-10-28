import { View, Text } from "react-native";
import React from "react";
import FancyBtn from "../new components/FancyBtn";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomePage</Text>
      <FancyBtn />
    </View>
  );
};

export default Home;
