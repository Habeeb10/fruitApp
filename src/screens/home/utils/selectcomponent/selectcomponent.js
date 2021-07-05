import React from "react";
import { ScrollView, View } from "react-native";
import { Add, Heart } from "../../../../../assets/svg";
import * as Images from "../../../../../assets/images";
import { SelectCard } from "../selectcomponent/selectcard";
import { Homestyles as styles } from "../styles";

const SelectList = [
  {
    icon: Images.breakfast,
    title: "Quinoa fruit salad",
    icon2: <Heart />,
    amount: "10,000",
    icon3: <Add />,
  },

  {
    icon: Images.tropical,
    title: "Tropical fruit salad",
    icon2: <Heart />,
    amount: "10,000",
    icon3: <Add />,
  },

  {
    icon: Images.berry,
    title: "melon fruit salad",
    icon2: <Heart />,
    amount: "10,000",
    icon3: <Add />,
  },
];

export const Selectcomp = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
      style={styles.selectbox}
    >
      {SelectList.map((item, index) => {
        return (
          <SelectCard
            key={index}
            icon={item.icon}
            title={item.title}
            icon2={item.icon2}
            icon3={item.icon3}
            amount={item.amount}
          />
        );
      })}
    </ScrollView>
  );
};
