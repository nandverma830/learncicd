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
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Stack, Avatar} from '@react-native-material/core';
import Header from '../Components/Header';
import Colors from '../assets/Colors';

export default function Tools({navigation, route}) {
  const {TOOLS} = route.params;
  console.log(TOOLS);
  const [tools, settools] = useState(TOOLS);

  return (
    <View style={{backgroundColor: Colors.bodyColor, flex: 1}}>
      <Header navigation={navigation} Tittle="TOOLS" />

      {TOOLS == undefined || null ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{color: Colors.baseColor, fontSize: 18, fontWeight: '800'}}>
            NO TOOLS FOUND{' '}
          </Text>
        </View>
      ) : (
        tools.map(item => {
          return (
            <TouchableOpacity
              onPress={() => Linking.openURL(item)}
              style={{
                borderWidth: 0.6,
                margin: 8,
                padding: 10,
                borderColor: '#ccc',
                borderRadius: 7,
                marginHorizontal: 20,
                marginTop: 30,
                backgroundColor: '#fff',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'gray',
                  fontSize: 15,
                  fontWeight: '800',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })
      )}
    </View>
  );
}
