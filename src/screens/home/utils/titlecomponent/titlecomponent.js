import React from "react";
import { View } from "react-native";
import { TitleCard } from "../titlecomponent/titlecard";
import { Homestyles as styles } from "../styles";

const TitleList = [
  {
    title: "Hottest",
  },
  {
    title: "Popular",
  },

  {
    title: "New combo",
  },
  {
    title: "Top",
  },
];
export const Titlecomp = () => {
  return (
    <View style={styles.titlebox}>
      {TitleList.map((item, index) => {
        return (
          <TitleCard
            key={index}
            title={item.title}
            onPress={() => setActive(item.title)}
            isActive={item.title === active}
          />
        );
      })}
    </View>
  );
};
