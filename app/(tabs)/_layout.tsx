import Icon from "../../components/Icon";

import { Link, Tabs } from "expo-router";
import { Platform, SafeAreaView } from "react-native";

import { StyleSheet } from "react-native";
import { useTheme } from "../../utils/context/ThemeContext";
import { IconProps } from "../../types/components/Icon";
import { TouchableRipple } from "react-native-paper";
import * as Haptics from "expo-haptics";
import { TouchableOpacity } from "react-native-gesture-handler";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string;
          let iconLibrary: IconProps["library"];
          let tooltipTitle: string;

          if (route.name === "index") {
            iconName = "home";
            iconLibrary = "FontAwesome";
            tooltipTitle = "Home";
          } else if (route.name === "workout/index") {
            iconName = "dumbbell";
            iconLibrary = "MaterialCommunityIcons";
            tooltipTitle = "Workout";
          } else if (route.name === "activity") {
            iconName = "stats-chart";
            iconLibrary = "Ionicons";
            tooltipTitle = "Activity";
          } else if (route.name === "profile/index") {
            iconName = "user";
            iconLibrary = "FontAwesome";
            tooltipTitle = "Profile";
          } else {
            iconName = "question";
            iconLibrary = "AntDesign";
            tooltipTitle = "Unknown";
          }

          return <Icon library={iconLibrary} name={iconName} color={color} size={30}/>
        },
        tabBarButton: (props) => {
          return (
              <TouchableRipple
              background={{ radius: 60, borderless: true, color: "gray" }}
              onLongPress={() =>
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
              }
              centered={true}
              rippleColor={"gray"}
              {...props}
              />
          );
        },
        // header: () => {
        //   return (
        //   <Appbar.Header>
        //     <Appbar.BackAction />
        //     <Appbar.Content title="Workout" onPress={() => console.log("Test")}/>
        //     <Appbar.Action icon="magnify" onPress={() => console.log("Test")}/>
        //     <Appbar.Action icon="dots-vertical" onPress={() => console.log("Test")}/>
        //   </Appbar.Header>
        //   );
        // },
        headerStyle: {
          ...styles.header,
          backgroundColor: theme.colors.background,
        },
        headerTitleStyle: { color: theme.colors.tint },
        headerShadowVisible: false,
        tabBarStyle: {
          ...styles.tabBar,
          backgroundColor: theme.colors.primary,
        },
        tabBarItemStyle: styles.tabItem,
        tabBarInactiveTintColor: theme.colors.tint,
        tabBarActiveTintColor: theme.colors.activeTint,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="workout/index"
        options={{
          title: "Workout",
          headerRight: () => (
            <Link style={{padding: 10}} href="/modal" asChild>
               <TouchableOpacity>
               <Icon
                    library="FontAwesome"
                    name="edit"
                    size={25}
                    color={theme.colors.tint}
                  />
              </TouchableOpacity>
            </Link>
          )
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          headerRight: () => (
            <Link style={{paddingRight: 20}} href="/modal" asChild>
               <TouchableOpacity>
               <Icon
                    library="FontAwesome"
                    name="cog"
                    size={25}
                    color={theme.colors.tint}
                  />
              </TouchableOpacity>
            </Link>
          )
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: Platform.OS === "ios" ? 50 : 60,
    borderTopWidth: 0,
    shadowColor: "black",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  tabItem: {
    borderColor: "red"
  },
  tabLabel: {
    marginBottom: 5,
  },
  header: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  }
});
