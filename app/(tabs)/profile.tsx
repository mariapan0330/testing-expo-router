import { View, Text, Button } from "react-native";
import React from "react";

type ProfileProps = {
  setUserExists: any;
};

const Profile: React.FC<ProfileProps> = ({ setUserExists }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfilePage</Text>
      <Button title="Log Out" onPress={() => setUserExists(false)} />
    </View>
  );
};

export default Profile;
