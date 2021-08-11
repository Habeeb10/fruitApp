import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Homestyles as styles } from "../home/utils/styles";
import { Add, Basket, Cart, Heart, Sort } from "../../../assets/svg";
import { Searchinput } from "../../shared/searchinput";
import * as Images from "../../../assets/images";
import { TitleCard } from "./utils/titlecomponent/titlecard";
import { SelectCard } from "./utils/selectcomponent/selectcard";
import { FoodList } from "./utils/foodcomponent/foodcomponent";
import { Container } from "../../common/Container";
import { FoodCard } from "./utils/foodcomponent/foodcard";

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
    icons: <Heart />,
    amount: "10,000",
    icon3: <Add />,
  },

  {
    icon: Images.tropical,
    title: "Tropical fruit salad",
    icons: <Heart />,
    amount: "10,000",
    icon3: <Add />,
  },

  {
    icon: Images.berry,
    title: "melon fruit salad",
    icons: <Heart />,
    amount: "10,000",
    icon3: <Add />,
  },
];

export default function Home({ navigation }) {
  const [active, setActive] = useState("Hottest");
  // set all the items in the array to state
  const [allFoodComp, setFoodComp] = useState([...FoodList]);

  // create filter function to be passed into thr onchangetext
  const filterSearch = (value) => {
    // assign item to be filtered to all the available item
    const ListtoFilter = allFoodComp;
    // return the overall items if value is not input yet
    if (!value) {
      return setFoodComp([...FoodList]);
    }
    // filter the item here and check for all cases of input(its included in the data to filter, and not case sensitive )
    const filterItem = ListtoFilter.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    // display filtered data
    setFoodComp([...filterItem]);
  };

  const dataLength = allFoodComp.length;
  return (
    <>
      <Container barColor="#F3F4F9">
        <View style={styles.iconbox}>
          <TouchableOpacity
            onPress={() => navigation.navigate("authentication")}
          >
            <Cart />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.basketbox}
            onPress={() => navigation.navigate("order")}
          >
            <Basket />
            <Text style={styles.basket}>my basket</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.fruit}>
          Hello Tony, What fruit salad combo do you want today?
        </Text>
        <View style={styles.sortbox}>
          <Searchinput
            placeholder="Search for fruit salad combos"
            onChange={(text) => filterSearch(text)}
          />
          <TouchableOpacity>
            <Sort style={{ marginTop: 15, marginRight: 10 }} />
          </TouchableOpacity>
        </View>
        <Text style={styles.combo}>Recommended Combo</Text>

        <View style={styles.foodbox}>
          {dataLength < 1
            ? null
            : allFoodComp.map((item, index) => {
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
                icons={item.icon2}
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
      </Container>
    </>
  );
}
