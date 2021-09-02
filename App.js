import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {Assets}  from './components/assets'
import { Portfolio } from './components/portfolio';
import { Market } from './components/market';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Portfolio"
      activeColor="#02B9C0"
      // inactiveColor="#fff"
      barStyle={{ backgroundColor: '#000F16', paddingTop:3, paddingBottom:5 }}
      labelStyle={{ fontSize: 10 }}
    >
      
      <Tab.Screen
        name="Assets"
        component={Assets}
        options={{
          tabBarLabel: 'Assets',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="coins" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarLabel: 'Market',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="finance" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>    
  );
}
