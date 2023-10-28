import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import Login from "./login";
import Onboarding1 from "./onb1";
import Home from "./(tabs)/home";
import TabsLayout from "./(tabs)/_layout";
import LoadingScreen from "./LoadingScreen";

const LoginPage = () => {
  const [userExists, setUserExists] = useState(true);
  // test all these:
  // userExists TRUE userIsNew TRUE
  // userExists FALSE userIsNew FALSE
  // userExists TRUE userIsNew FALSE
  const [userIsNew, setUserIsNew] = useState(false);
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      {userExists ? (
        userIsNew ? (
          <Onboarding1 setUserIsNew={setUserIsNew} />
        ) : (
          <LoadingScreen />
        )
      ) : (
        <Login setUserExists={setUserExists} />
      )}
    </View>
  );
};

export default LoginPage;
