import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Colors from '../assets/Colors';

const CartScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header
        // Righticon={'search'}
        // ScreenName={'Nextscr'}
        navigation={navigation}
        Tittle="WISHLIST"
      />
      <View
        style={{flex: 0.9, backgroundColor: '#fff', justifyContent: 'center'}}>
        <Text
          style={{
            color: '#000',
            fontWeight: '300',
            textAlign: 'center',
            fontSize: 22,
          }}>
          NO COURSE FOUND !{' '}
        </Text>
      </View>
    </View>
  );
};

export default CartScreen;

const Styles = StyleSheet.create({
  Header: {
    flex: 0.1,
    backgroundColor: Colors.baseColor,
    justifyContent: 'center',
  },
  Headertext: {
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 22,
  },
});
