import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as colors from "../../../../common/color";
import { hp } from "../../../../common/utils";

export const TitleCard = ({ title, onPress, isActive }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={[styles.title, isActive && styles.textcolor]}>
          {title}
        </Text>
        {isActive ? (
          <View
            style={{
              width: 22,
              height: 2,
              marginTop: 2,
              backgroundColor: colors.orange,
            }}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textcolor: {
    color: colors.deepblue,
    fontSize: hp(20),
  },

  title: {
    color: colors.purple,
    fontSize: hp(20),
  },
});
