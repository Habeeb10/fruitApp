import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import * as colors from "../../../common/color";

// const getBackgroundcolor = (title) => {
//   switch (title) {
//     case "Order Taken":
//       return { bg: colors.milk };
//     case "Order Is Being Prepared":
//       return { bg: colors.wheat };
//     case "Order Is Being Delivered":
//       return { bg: colors.vanilla };
//   }
// };

const getBackgroundcolor = (title) => {
  switch (title) {
    case "Order Taken":
      return [colors.milk];
    case "Order Is Being Prepared":
      return [colors.wheat];
    case "Order Is Being Delivered":
      return [colors.vanilla];
  }
};

export const Deliverycard = ({ title, agent, icon, icon2 }) => {
  return (
    <View style={styles.overall}>
      <View style={styles.orderbox}>
        <TouchableOpacity
          style={[
            styles.notebox,
            { backgroundColor: getBackgroundcolor(title)[0] },
          ]}
        >
          <Image source={icon} style={styles.icon} />
        </TouchableOpacity>
        <View>
          <Text style={styles.token}>{title}</Text>
          <Text style={styles.agent}>{agent}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.check,
          // { backgroundColor: getBackgroundcolor(title)[1] },
        ]}
      >
        {icon2}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  agent: {
    fontSize: 13,
    fontWeight: "400",
    color: colors.black,
    marginTop: 6,
    marginLeft: 20,
  },

  orderbox: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  token: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.black,
    marginLeft: 25,
    marginTop: 30,
  },
  check: {
    width: 24,
    height: 24,
    backgroundColor: colors.green,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 35,
    marginTop: 8,
  },
  overall: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },

  notebox: {
    width: 75,
    height: 74,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    width: 70,
    height: 60,
    resizeMode: "contain",
  },
});
