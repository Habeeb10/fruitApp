import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import * as colors from "../common/color";

export const Fillinput = ({ placeholder, style, onchange, value }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.deepgray}
        onChangeText={onchange}
        value={value}
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
    fontSize: 17,
    color: colors.black,
    marginTop: 20,
  },
});
