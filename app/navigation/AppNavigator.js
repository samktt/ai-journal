import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import AddScreen from "../screens/AddScreen";
import CalendarScreen from "../screens/CalendarScreen";
import HomeScreen from "../screens/HomeScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <Tab.Navigator screenOptions={{ tabBarStyle: { paddingBottom: 5 } }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" color={color} size={size} />
            ),
            tabBarLabel: "",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              toggleModal();
            },
          }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="plus-circle" color={color} size={size} />
            ),
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="calendar" color={color} size={size} />
            ),
            tabBarLabel: "",
          }}
        />
      </Tab.Navigator>
      <Modal
        backdropOpacity={1}
        isVisible={isModalVisible}
        backdropColor={colors.white}
      >
        <AddScreen closeModal={toggleModal} />
      </Modal>
    </>
  );
};

export default AppNavigator;
