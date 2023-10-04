
import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

export default Header = () => {
  return (
      <View style={Styles.Popup}>
        <Text style={Styles.Txt}>Enter valid Name</Text>
      </View>
  );
};

const Styles = StyleSheet.create({
  Popup: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'red',
    borderRadius: 7,
    position: 'absolute',
    bottom: '50%',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 7,
  },
  Txt: {textAlign: 'center', fontWeight: '400', fontSize: 14, color: 'red'},
});
