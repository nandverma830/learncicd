import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../Components/fonts';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const deviceRatio = (deviceWidth + deviceHeight) / 2;

let gridWidth = (deviceRatio * 14) / 100;

export default StyleSheet.create({
  Buttonview: {
    flex: 0.2,
    borderBottomWidth: 0.3,
    borderColor: '#000',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 33,
    borderColor: '#ccc',
  },
  ButtonText: {
    color: 'gray',
    marginRight: '20%',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: fonts.lato_regular,
  },
  Btnview: {
    backgroundColor: '#fff',
    margin: 30,
    borderRadius: 15,
    elevation: 6,
    flex:1,
    marginTop: '10%',
  },
  Iconback: {
    backgroundColor: '#FEFBF6',
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Share: {
    marginTop: '10%',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    padding: 7,
    flexDirection: 'row',
    width: '30%',
    borderWidth: 0.6,
    borderColor: 'gray',
  },
  Sharetext: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: fonts.lato_regular,
  },
  Version: {
    textAlign: 'center',
    fontWeight: '200',
    color: 'gray',
    fontFamily: fonts.lato_regular,
  },
});
