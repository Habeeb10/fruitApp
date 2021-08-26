import { StyleSheet } from "react-native";
import * as colors from "../../../common/color";
import { hp, wp } from "../../../common/utils";

export const Authenticationstyles = StyleSheet.create({
  today: {
    color: colors.lightgray,
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 25,
  },
  cont: {
    backgroundColor: "white",
  },
  combo: {
    marginTop: hp(40),
    color: colors.deepblue,
    fontSize: hp(20),
    fontWeight: "500",
    marginBottom: hp(16),
    marginLeft: wp(25),
  },

  ellipse: {
    alignSelf: "center",
  },
  basket: {
    height: hp(301),
    width: wp(301),
    marginTop: hp(90),
    alignSelf: "center",
  },
});
