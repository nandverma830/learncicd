// import {Box, Center, HStack} from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  TextInput,
    View
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Colors from '../assets/Colors';

export default Header = props => {
  const navigation = useNavigation();

  return (
    <View alignItems="center" style={Styles.Header}>
        <View style={Styles.View1}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="chevron-left" size={22} color={'#fff'} />
          </TouchableOpacity>
          </View>

        <View style={Styles.View2}>
          {/* {} */}
          {props.Textinput != undefined ? (
            <TextInput
              placeholderTextColor={Colors.grayColor}
              style={Styles.Input}
              placeholder={props.Textinput}
            />
          ) : (
            props.Tittle != undefined && (
              <Text style={Styles.Title}>{props.Tittle}</Text>
            )
          )}
        </View>

        <View style={Styles.View3}>
          {props.Righticon != undefined && (
            <TouchableOpacity
              onPress={() => navigation.navigate(props.ScreenName)}>
              <FontAwesome5 name={props.Righticon}  size={22} color={'#fff'} />
            </TouchableOpacity>
          )}
        </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  Header: {flexDirection: 'row', backgroundColor: Colors.baseColor, height: 70},
  View1: {flex: 0.2, justifyContent: 'center', alignItems: 'center'},
  View2: {flex: 0.6, justifyContent: 'center', alignItems: 'center'},
  View3: {flex: 0.2, justifyContent: 'center', alignItems: 'center'},
  Title: {color: '#fff', fontSize: 22, fontWeight: '900', textAlign: 'center'},
  Input: {
    backgroundColor: '#fff',
    color: Colors.baseColor,
    width: '100%',
    borderRadius: 5,
    padding: 10,
    height: 36,
  },
});
