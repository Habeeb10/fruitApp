import { StyleSheet } from "react-native";
import * as colors from "../../../common/color";

export const Authenticationstyles = StyleSheet.create({
  today: {
    color: colors.lightgray,
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 25,
  },
  cont: {
    backgroundColor: "white",
    marginTop: 30,
  },
  combo: {
    marginTop: 40,
    color: colors.deepblue,
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
    marginLeft: 25,
  },
  drops: {
    height: 37.52,
    width: 50,
    marginLeft: 282,
    marginTop: 131,
  },
  ellipse: {
    alignSelf: "center",
    marginTop: 15,
  },
  basket: {
    height: 260,
    width: 301,
    resizeMode: "contain",
    alignSelf: "center",
  },
  container: {
    flex: 1,
  },
});
