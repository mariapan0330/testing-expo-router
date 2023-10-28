import { View, Text, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

type LoginProps = {
  setUserExists: any;
};

const Login: React.FC<LoginProps> = ({ setUserExists }) => {
  const router = useRouter();
  const handleLogin = () => {
    setUserExists(true);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Page</Text>
      <Button title="Log In" onPress={handleLogin} />
      <Link href="/signup" asChild>
        <Button title="Go to Sign Up" />
      </Link>
      <Button title="Press for Modal" onPress={() => router.push("/modal")} />
    </View>
  );
};

export default Login;
