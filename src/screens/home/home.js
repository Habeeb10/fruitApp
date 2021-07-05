import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Homestyles as styles } from "../home/utils/styles";
import { Add, Basket, Cart, Heart, Sort } from "../../../assets/svg";
import { Searchinput } from "../../shared/searchinput";
import * as Images from "../../../assets/images";
import { TitleCard } from "./utils/titlecomponent/titlecard";
import { SelectCard } from "./utils/selectcomponent/selectcard";
import { Foodcomp } from "./utils/foodcomponent/foodcomponent";

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

export default function Home({ navigation }) {
  const [active, setActive] = useState("Hottest");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.iconbox}>
        <TouchableOpacity>
          <Cart />
        </TouchableOpacity>
        <TouchableOpacity style={styles.basketbox}>
          <Basket />
          <Text style={styles.basket}>my basket</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.fruit}>
        Hello Tony, What fruit salad combo do you want today?
      </Text>
      <View style={styles.sortbox}>
        <Searchinput placeholder="Search for fruit salad combos" />
        <Sort style={{ marginTop: 15, marginRight: 10 }} />
      </View>
      <Text style={styles.combo}>Recommended Combo</Text>
      <Foodcomp />
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
      <View style={styles.selectbox}>
        {SelectList.map((item, index) => {
          return (
            <SelectCard
              key={index}
              icon={item.icon}
              title={item.title}
              icon2={item.icon2}
              icon3={item.icon3}
              amount={item.amount}
              onPress={() =>
                navigation.navigate("basket", {
                  details: item,
                })
              }
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}
