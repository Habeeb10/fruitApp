import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import * as colors from "../../../../common/color";

export const SelectCard = ({ title, icon3, icon, icon2, amount, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.click}>
        <View style={{ marginLeft: 60, marginTop: 10 }}>{icon2}</View>
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
    fontSize: 12,
  },
  title: {
    marginTop: 10,
    fontSize: 8,
    color: colors.deepblue,
  },
  amountbox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  addbox: {
    width: 15,
    height: 15,
    borderRadius: 12,
    backgroundColor: colors.lightorange,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 25,
  },
  image: {
    width: 100,
    height: 50,
  },
  click: {
    height: 140,
    width: 110,
    backgroundColor: colors.wheat,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
