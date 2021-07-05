import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import * as colors from "../common/color";

export const Fillinput = ({ placeholder, style }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.deepgray}
      />
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
    height: 56,
  },
  textInput: {
    fontSize: 20,
    color: colors.deepgray,
    marginTop: 10,
  },
});
