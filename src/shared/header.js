import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as colors from "../common/color";

export const Header = ({ title, icon, style, onPress, back }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
        {icon}
        <Text style={styles.back}>{back}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "400",
    marginTop: 20,
    marginLeft: 20,
  },
  container: {
    marginTop: 25,
    width: 80,
    height: 32,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 30,
  },
  back: {
    color: colors.deepblue,
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 3,
  },
});
