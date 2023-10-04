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
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Stack, Avatar} from '@react-native-material/core';
import Header from '../Components/Header'
import Colors from '../assets/Colors';
export default function Course({navigation}) {

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header
        Righticon={'search'}
        // ScreenName={'Nextscr'}
        navigation={navigation}
        Tittle="MY COURSE"
      />
      <View style={{flex:1,justifyContent:'center'}}>
      <Text style={{fontSize:22,color:"#000",fontWeight:'300',textAlign:'center'}}>NO COURSE FOUND</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 210,
    margin: 4,
    borderRadius: 20,
  },
  fl3: {
    borderWidth: 0.6,
    borderColor:Colors.baseColor,
    marginHorizontal: 20,
    borderRadius: 10,
    margin: 8,
    flexDirection: 'row',
  },
  img2: {height: 90, width: 90, margin: 10, borderRadius: 9},
  t1: {fontSize: 18, color: 'black', margin: 3},
  t2: {color: 'gray', fontSize: 13, margin: '1%', marginLeft: '3%'},
  opencourse: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '200',
  },
});
