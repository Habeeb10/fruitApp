import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Search } from "../../assets/svg";
import * as colors from "../common/color";

export const Searchinput = ({ placeholder, icon, onChange, value }) => {
  return (
    <View style={styles.container}>
      <View>{(icon = <Search />)}</View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.deepgrey}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey,
    paddingHorizontal: 20,
    width: "85%",
    marginTop: 20,
    height: 56,
    borderRadius: 15,
  },
  textInput: {
    marginLeft: 10,
    fontSize: 18,
    color: colors.deepgrey,
  },
});
