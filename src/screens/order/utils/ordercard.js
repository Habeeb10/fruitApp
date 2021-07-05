import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import * as colors from "../../../common/color";

export const OrderCard = ({ title, packs, icon, amount }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View style={styles.click}>
          <Image resizeMode="contain" style={styles.image} source={icon} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.packs}>{packs}</Text>
        </View>
        <Text style={styles.amount}>{`# ${amount}`}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    width: "100%",
    height: 1,
    backgroundColor: colors.grey,
    marginTop: 20,
  },

  packs: {
    fontSize: 14,
    color: colors.black,
    marginLeft: 20,
  },
  amount: {
    color: colors.black,
    fontSize: 16,
    marginLeft: 60,
    marginTop: 7,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5,
  },

  image: {
    width: 40,
    height: 24,
  },
  click: {
    height: 65,
    width: 65,
    backgroundColor: colors.wheat,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
