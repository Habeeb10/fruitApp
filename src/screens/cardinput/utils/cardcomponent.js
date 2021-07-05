import React from "react";
import { View } from "react-native";
import * as Images from "../../../../assets/images";
import { Cardstyles as styles } from "./styles";
import { Card } from "./inputcard";

const CardList = [
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
    title: "melon fruit salad",
    packs: "2packs",
    amount: "20,000",
  },
];

export const Cardcomp = () => {
  return (
    <View
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
      style={styles.orderbox}
    >
      {CardList.map((item, index) => {
        return (
          <Card
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
