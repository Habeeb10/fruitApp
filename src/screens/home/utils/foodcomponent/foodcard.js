import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import * as colors from "../../../../common/color";
import { hp, wp } from "../../../../common/utils";

export const FoodCard = ({ title, icon3, icon, icon2, amount, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.click}>
        <View style={{ marginLeft: 100 }}>{icon2}</View>
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
    marginLeft: 5,
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
    paddingHorizontal: 15,
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
    width: wp(80),
    height: hp(80),
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
