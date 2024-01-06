import TabBarIcon from "../../components/TabBarIcon";

import { Link, Tabs } from "expo-router";
import { useState } from "react";
import { Platform, Pressable, useColorScheme } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { View } from "../../components/Themed";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const [circleRadius] = useState(0);
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#A367B1",
        tabBarStyle: styles.tabs,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Health",
          tabBarIcon: ({ color }) => (
            <TabBarIcon library="FontAwesome5" name="heartbeat" color={color} />
          ),
          tabBarLabelStyle: styles.tab,
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              library="MaterialCommunityIcons"
              name="dumbbell"
              color={color}
            />
          ),
          tabBarLabelStyle: styles.tab,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: () => (
            <View style={styles.button}>
              <TabBarIcon
                size={36}
                library="AntDesign"
                name="plus"
                color="white"
              />
            </View>
          ),
          tabBarLabelStyle: styles.tab,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ color }) => (
            <TabBarIcon library="Feather" name="activity" color={color} />
          ),
          tabBarLabelStyle: styles.tab,
        }}
      />
      <Tabs.Screen
        name="profile/[slug]"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon library="FontAwesome" name="user" color={color} />
          ),
          tabBarLabelStyle: styles.tab,
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <TabBarIcon
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabs: {
    height: Platform.OS === "ios" ? 50 : 60,
  },
  tab: {
    marginBottom: 5,
  },
  button: {
    top: Platform.OS === "ios" ? -10 : -20,
    height: Platform.OS === "ios" ? 50 : 60,
    width: Platform.OS === "ios" ? 50 : 60,
    borderRadius: Platform.OS === "ios" ? 25 : 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A367B1",
  },
});
