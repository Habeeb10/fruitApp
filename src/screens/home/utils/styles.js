import { StyleSheet } from "react-native";
import * as colors from "../../../common/color";
import { hp, wp } from "../../../common/utils";

export const Homestyles = StyleSheet.create({
  selectbox: {
    flexDirection: "row",

    paddingHorizontal: 20,
  },
  titlebox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 50,
  },
  foodbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  combo: {
    color: colors.deepblue,
    fontSize: 24,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: hp(40),
  },
  sortbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: hp(24),
  },
  basketbox: {
    alignItems: "center",
  },
  basket: {
    fontSize: 10,
    marginTop: 5,
  },
  fruit: {
    fontWeight: "500",
    fontSize: 20,
    width: wp(257),
    marginTop: hp(24),
    marginLeft: 20,
    color: colors.deepblue,
    lineHeight: 28,
  },
  iconbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: hp(26),
  },
  container: {
    flex: 1,
  },
});
