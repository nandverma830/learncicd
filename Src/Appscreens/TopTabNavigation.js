import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '../assets/Colors';
import Paidcourse from './CourseType/Paidcourse';
import Freecourse from './CourseType/Freecourse';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Paidcourse"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ccc',
        // tabBarGap:20,
        tabBarLabelStyle: {fontSize: 17},
        tabBarStyle: {backgroundColor: Colors.baseColor},
        tabBarIndicatorStyle: {backgroundColor: '#fff'},
      }}>
      <Tab.Screen
        name="Paidcourse"
        component={Paidcourse}
        options={{tabBarLabel: 'ALL - PAIDCOURSE'}}
      />
      <Tab.Screen
        name="Freecourse"
        component={Freecourse}
        options={{tabBarLabel: 'ALL - FREECOURSE'}}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
