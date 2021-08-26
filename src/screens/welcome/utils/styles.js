import { StyleSheet } from "react-native";
import * as colors from "../../../common/color";
import { hp, wp } from "../../../common/utils";

export const Welcomestyles = StyleSheet.create({
  today: {
    color: colors.lightgray,
    fontSize: hp(16),
    fontWeight: "400",
    marginLeft: wp(25),
    width: wp(340),
  },
  cont: {
    backgroundColor: "white",
  },
  combo: {
    marginTop: hp(60),
    color: colors.deepblue,
    fontSize: hp(20),
    fontWeight: "500",
    marginBottom: hp(8),
    marginLeft: wp(25),
    marginTop: hp(56),
  },

  ellipse: {
    alignSelf: "center",
  },
  basket: {
    height: hp(200),
    width: wp(260),
    marginTop: hp(90),
    marginBottom: hp(20),
    alignSelf: "center",
  },
});
