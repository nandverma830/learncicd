import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Course from '../Appscreens/Course';
import Home from '../Appscreens/Home';
import Feedback from '../Appscreens/Feedback';
import More from '../Appscreens/More';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import fonts from '../Components/fonts';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../assets/Colors';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor:Colors.baseColor,
        labelStyle: {
          fontSize: 13,
          fontFamily: fonts.lato_bold,
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 54,
        },
        tabBarItemStyle: {
          backgroundColor: '#fff',
          margin: 5,
          borderRadius: 65,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return <AntDesign color={color} name="home" size={20} />;
          },
        }}
      />

      <Tab.Screen
        name="Mycourse"
        component={Course}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return <AntDesign color={color} name="filetext1" size={18} />;
          },
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={Feedback}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return <Entypo color={color} name="new-message" size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return <Feather color={color} name="more-vertical" size={20} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
