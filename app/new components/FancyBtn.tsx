import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const FancyBtn = () => {
  return (
    <Pressable style={styles.btn}>
      <Text style={styles.btnText}>FancyBtn</Text>
    </Pressable>
  );
};

export default FancyBtn;

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "purple",
  },
  btnText: {
    fontSize: 16,
    color: "white",
  },
});
