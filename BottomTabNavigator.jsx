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

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#d5bdaf", // Color of the active tab label and icon
        inactiveTintColor: "gray", // Color of the inactive tab label and icon
        showLabel: true, // Show/hide labels
        labelStyle: {
          fontSize: 12, // Font size of the tab label
        },
        style: {
          backgroundColor: "black", // Background color of the bottom bar
          borderTopWidth: 1, // Add a border at the top of the bottom bar
          borderColor: "black", // Border color
        },
        tabStyle: {
          paddingTop: 8, // Extra padding on the top of each tab
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Leave" component={LeaveScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
