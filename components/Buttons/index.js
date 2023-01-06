import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import {
  colors,
  textSizes,
  fontWeights,
  borderRadius,
  padding,
} from "../../theme/config";

const width = Dimensions.get("window").width;

const Button = ({
  text,
  onPress,
  type = "filled",
  bordered = false,
  size = "large",
}) => {
  const large = width / 1.1;
  const small = width / 2;
  const btnSize = size === "large" ? large : small;
  const btnBgColor = type === "filled" ? colors["brand-red"] : "transparent";
  const btnTextColor = type === "filled" ? "#ffffff" : colors["brand-red"];
  const btnBorderRadius = bordered ? borderRadius["xl"] : 5;

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: padding[5],
    width: btnSize,
    borderRadius: btnBorderRadius,
  };

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: textSizes["base"],
    textAlign: "center",
    fontWeight: fontWeights.bold,
    fontFamily: "Quicksand-Medium",
  };

  const border = type === "outlined" && {
    borderColor: "#F3F3F3",
    borderWidth: 2,
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
