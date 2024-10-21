import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign'; // Already imported
import Home from "../screens/home/Home";
import Customize from "../screens/customize/Customize";
import Profile from "../screens/profile/Profile";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Customize") {
            iconName = focused ? "settings" : "settings-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user"; // Same icon, regardless of focus
            return <AntDesign name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          ...styles.tabBarStyle,
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
      />
      {/* <Tab.Screen name="Customize" component={Customize} 
      options={{ headerShown: false }} /> */}
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#EF2A39", // Red background for the tab bar
    height: 80, // Height of the tab bar
    paddingTop: 10,
  },
});

export default BottomTabNavigator;
