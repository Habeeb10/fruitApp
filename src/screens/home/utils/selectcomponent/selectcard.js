import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import * as colors from "../../../../common/color";
import { hp, wp } from "../../../../common/utils";

export const SelectCard = ({ title, icon3, icon, icons, amount, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.click}>
        <View style={{ marginLeft: 100 }}>{icons}</View>
        <Image resizeMode="contain" style={styles.image} source={icon} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.amountbox}>
          <Text style={styles.amount}>{`# ${amount}`}</Text>
          <TouchableOpacity style={styles.addbox}>{icon3}</TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  amount: {
    color: colors.orange,
  },
  title: {
    fontSize: hp(13),
    color: colors.deepblue,
  },
  amountbox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(10),
    justifyContent: "space-around",
    paddingHorizontal: 25,
  },
  addbox: {
    width: wp(15),
    height: hp(15),
    borderRadius: 12,
    backgroundColor: colors.lightorange,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
  },
  image: {
    width: wp(96),
    height: hp(58),
    marginBottom: hp(10),
  },
  click: {
    height: hp(183),
    width: wp(152),
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(24),
  },
});
