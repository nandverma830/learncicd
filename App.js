import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Appstacknavigation from './Src/Navigations/Appstacknavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LogBox} from 'react-native';
import Network from './Src/Components/Network';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';
import Colors from './Src/assets/Colors';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    setTimeout(() => {
      setisloading(false);
    }, 2000);
  }, []);

  const [isloading, setisloading] = useState(true);

  if (isloading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.baseColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar backgroundColor={Colors.baseColor} />
        <Image
          source={require('./Src/assets/Images/AppLogo.jpg')}
          style={{height: '30%', width: '50%', alignSelf: 'center'}}
        />
        <Bubbles size={10} color="#fff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Appstacknavigation />
      <StatusBar backgroundColor={Colors.baseColor} />
      <Network />
    </NavigationContainer>
  );
};

export default App;

