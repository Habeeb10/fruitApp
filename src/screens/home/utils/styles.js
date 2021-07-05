import { StyleSheet } from "react-native";
import * as colors from "../../../common/color";

export const Homestyles = StyleSheet.create({
  selectbox: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
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
    paddingHorizontal: 20,
  },
  combo: {
    color: colors.deepblue,
    fontSize: 24,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 30,
  },
  sortbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 20,
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
    width: 257,
    marginTop: 15,
    marginLeft: 20,
    color: colors.deepblue,
  },
  iconbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  container: {
    flex: 1,
  },
});
