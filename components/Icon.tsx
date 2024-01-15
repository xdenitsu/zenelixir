import React from "react";

import { IconProps } from "../types/components/Icon";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

function Icon({ name, color, size = 28, library }: IconProps) {
  const IconComponent = {
    FontAwesome,
    FontAwesome5,
    AntDesign,
    MaterialCommunityIcons,
    Ionicons,
    Feather,
  }[library];

  return <IconComponent size={size} name={name} color={color} />;
}

export default Icon;
