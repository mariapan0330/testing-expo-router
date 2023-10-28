import { View, Text, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

type OBProps = {
  setUserIsNew: any;
};
const Onboarding1: React.FC<OBProps> = ({ setUserIsNew }) => {
  const router = useRouter();
  const handleGoHome = () => {
    router.replace("/(tabs)/home");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Onboarding1</Text>
      <Button title="Finish & go Home" onPress={() => handleGoHome()} />
    </View>
  );
};

export default Onboarding1;
