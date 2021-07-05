import React from "react";
import { View } from "react-native";
import { Add, Heart } from "../../../../../assets/svg";
import * as Images from "../../../../../assets/images";
import { FoodCard } from "../foodcomponent/foodcard";
import { Homestyles as styles } from "../styles";

const FoodList = [
  {
    icon: Images.peach,
    title: "Honey lime combo",
    icon2: <Heart />,
    amount: "2,000",
    icon3: <Add />,
  },

  {
    icon: Images.glowing,
    title: "Berry mango combo",
    icon2: <Heart />,
    amount: "8,000",
    icon3: <Add />,
  },
];

export const Foodcomp = () => {
  return (
    <View style={styles.foodbox}>
      {FoodList.map((item, index) => {
        return (
          <FoodCard
            key={index}
            icon={item.icon}
            title={item.title}
            icon2={item.icon2}
            icon3={item.icon3}
            amount={item.amount}
          />
        );
      })}
    </View>
  );
};
