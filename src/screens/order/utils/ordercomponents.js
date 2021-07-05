import React from "react";
import { View } from "react-native";
import * as Images from "../../../../assets/images";
import { Orderstyles as styles } from "./styles";
import { OrderCard } from "./ordercard";

const Orderlist = [
  {
    icon: Images.breakfast,
    title: "Quinoa fruit salad",
    packs: "2packs",
    amount: "20,000",
  },

  {
    icon: Images.tropical,
    title: "Tropical fruit salad",
    packs: "2packs",
    amount: "20,000",
  },

  {
    icon: Images.berry,
    title: "Melon fruit salad",
    packs: "2packs",
    amount: "20,000",
  },
];

export const Ordercomp = () => {
  return (
    <View style={styles.orderbox}>
      {Orderlist.map((item, index) => {
        return (
          <OrderCard
            key={index}
            icon={item.icon}
            title={item.title}
            packs={item.packs}
            amount={item.amount}
          />
        );
      })}
    </View>
  );
};
