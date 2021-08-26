import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import * as colors from "../common/color";

export const Labelinput = ({
  placeHolder,
  style,
  label,
  inputStyle,
  keyboardType,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.container, style]}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeHolder}
          placeholderTextColor={colors.deepgrey}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    alignSelf: "center",
    paddingHorizontal: 20,
    width: "90%",
    borderRadius: 10,
    height: 55,
    marginTop: 15,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  input: {
    fontSize: 17,
    color: colors.black,
  },
  label: {
    fontWeight: "500",
    fontSize: 16,
    color: colors.deepblue,
    marginLeft: 20,
    marginTop: 25,
  },
});
