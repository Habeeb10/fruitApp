import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import * as colors from "../../../common/color";

const getBackgroundcolor = (title) => {
  switch (title) {
    case "Order Taken":
      return { bg: colors.milk };
    case "Order Is Being Prepared":
      return { bg: colors.wheat };
    case "Order Is Being Delivered":
      return { bg: colors.vanilla };
  }
};

// const getBackgroundcolor = (title) => {
//   switch (title) {
//     case "Order Taken":
//       return [colors.milk];
//     case "Order Is Being Prepared":
//       return [colors.wheat];
//     case "Order Is Being Delivered":
//       return [colors.vanilla];
//   }
// };

export const Deliverycard = ({ title, agent, icon, icon2 }) => {
  return (
    <View style={styles.overall}>
      <View style={styles.orderbox}>
        <TouchableOpacity
          style={[
            styles.notebox,
            { backgroundColor: getBackgroundcolor(title) },
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
          //   { backgroundColor: getBackgroundcolor(title)[1] },
        ]}
      >
        {icon2}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ordercont: {
    width: 75,
    height: 74,
    backgroundColor: colors.wheat,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  agent: {
    fontSize: 13,
    fontWeight: "400",
    color: colors.black,
    marginLeft: 24,
    marginTop: 6,
  },
  agentbox: {
    width: 75,
    height: 74,
    backgroundColor: colors.vanilla,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  phonebox: {
    width: 40,
    height: 40,
    backgroundColor: colors.orange,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  orderbox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  token: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.black,
    marginLeft: 24,
  },
  check: {
    width: 24,
    height: 24,
    backgroundColor: colors.green,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  overall: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 40,
  },

  notebox: {
    width: 75,
    height: 74,
    backgroundColor: colors.milk,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  icon: {
    width: 100,
    height: 60,
    resizeMode: "contain",
  },
});
