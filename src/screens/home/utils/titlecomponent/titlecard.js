import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as colors from "../../../../common/color";

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
    fontSize: 20,
  },

  title: {
    color: colors.purple,
    fontSize: 16,
  },
});
