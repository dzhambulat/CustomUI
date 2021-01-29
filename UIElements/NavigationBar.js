import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../scenes/Home';
import SettingsScreen from '../scenes/Settings';

const Tab = createBottomTabNavigator();
const NavBar = () =>{
    return (
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel:"",
                    tabBarButton: ({ focused }) => {
                        return (
                          <View
        style={{
        
          bottom: 0,
          height: 58,
          marginLeft:50,
          width: 58,
          borderRadius: 3,
          backgroundColor: '#5a95ff',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,

        }}>
      </View>
                        )
                    }
                }} />
                   <Tab.Screen name="Settings" component={SettingsScreen} options={{
            tabBarLabel:"",
                    tabBarButton: ({ focused }) => {
                        return (
                          <View
        style={{
          marginLeft:50,
          bottom: 0,
          height: 58,
          width: 58,
          borderRadius: 3,
          backgroundColor: '#5a95ff',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,

        }}>
      </View>
                        )
                    }
                }} />
        </Tab.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:"center",
    backgroundColor: '#ccc',
    alignItems: 'center',   
    justifyContent: 'center'
  },
  button: {
    borderColor: "#000000",
    borderWidth: 2
  }
});

export default NavBar;