import React, { useEffect } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  subbutton1: {
    borderRadius: "50%",
    height: "15px",
    width: "15px",
    backgroundColor: 'green',
    top: 75,
    left: 13
  },
  subbutton2: {
    borderRadius: "50%",
    height: "15px",
    width: "15px",
    backgroundColor: 'green',
    top: 75,
    left: 28
  },
  subbutton3: {
    borderRadius: "50%",
    height: "15px",
    width: "15px",
    backgroundColor: 'green',
    top: 70,
    left: 41
  },
  container: {
    height: "70px",
    width: "70px",
    borderRadius: '50%',
    backgroundColor: '#ebe5ea',
    top: -10
  },
  topShadow: {
    borderRadius: '50%',
    top: -10,
    shadowColor: "#c8c3c7",
    shadowOffset: {
      width: "5px",
      height: "5px"
    },
    shadowRadius: "20px"
  },
  bottomShadow: {
    borderRadius: '50%',
    top: -10,
    shadowColor: "#ffffff",
    shadowOffset: {
      width: "-5px",
      height: "-5px"
    },
    shadowRadius: "20px"
  },
  circleButton: {
    borderRadius: '50%',
    borderColor: "#c8c3c7",
    borderWidth: "2px",
    height: "70px",
    width: "70px",
    backgroundColor: "#e8e3e7",
    top: -25
  }
});

const AnimButton = () => {
  const animation = React.useRef(new Animated.Value(0)).current;
  return (
    <TouchableOpacity style={styles.circleButton} onPress={() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }}>

      <Animated.View style={[styles.subbutton1, {
        transform: [
          { translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [0, -35] }) }, { translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [0, -100] }) }
        ]
      }]}>
        fff
      </Animated.View>
      <Animated.View style={[styles.subbutton2, {
        transform: [
          { translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [0, 0] }) }, { translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [0, -120] }) }
        ]
      }]}>
        fff
      </Animated.View>
      <Animated.View style={[styles.subbutton3, {
        transform: [
          { translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [0, 35] }) }, { translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [0, -100] }) }
        ]
      }]}>
        fff
      </Animated.View>
    </TouchableOpacity >
  )
}

const Tab = createBottomTabNavigator();
const NavBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#cacaca',
        activeBackgroundColor: '#ebe5ea',
        inactiveBackgroundColor: '#e8e3e7'
      }} >
        <Tab.Screen name="Profile" component={Home} options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="game-controller-outline"
                size={24}
                color={tabInfo.focused ? "#000000" : "#cacaca"}
              />
            );
          },
        }} />
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: "",
          tabBarButton: ({ focused }) => {
            return (
              <View style={{
                backgroundColor: "#ebe5ea"
              }}>
                <AnimButton />
              </View>

            )
          }
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="settings-outline"
                size={24}
                color={tabInfo.focused ? "#000000" : "#cacaca"}
              />
            );
          },
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default NavBar;