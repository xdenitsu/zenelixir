import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign"; 
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
 

export interface TabBarIconProps {
  name: string;
  color: string;
  size?: number;
  library: "FontAwesome" | "FontAwesome5" | "AntDesign" | "MaterialCommunityIcons" | "Ionicons" | "Feather";
}

function TabBarIcon({ name, color, size = 28, library }: TabBarIconProps) {
    const IconComponent = {
        FontAwesome: FontAwesome,
        FontAwesome5: FontAwesome5,
        AntDesign: AntDesign,
        MaterialCommunityIcons: MaterialCommunityIcons,
        Ionicons: Ionicons,
        Feather: Feather
    }[library];

  return <IconComponent size={size} name={name} color={color} />;
}

export default TabBarIcon;
