import React from "react";
import { View } from "react-native";
import { Add, Heart } from "../../../../../assets/svg";
import * as Images from "../../../../../assets/images";
import { FoodCard } from "../foodcomponent/foodcard";
import { Homestyles as styles } from "../styles";

export const FoodList = [
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
