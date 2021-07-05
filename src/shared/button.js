import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as colors from "../common/color";

export const Button = ({ title, onPress, style, titleStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.container, style]}
    >
      <Text style={[styles.button, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 56,
    backgroundColor: colors.orange,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
});
