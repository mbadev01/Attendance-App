import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import AttendanceScreen from "./Screens/AttendanceScreen";
import LeaveScreen from "./Screens/LeaveScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#3A0CA3",
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#4361EE" },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "user";
          } else if (route.name === "Attendance") {
            iconName = "calendar";
          } else if (route.name === "Leave") {
            iconName = "suitcase";
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Leave" component={LeaveScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
