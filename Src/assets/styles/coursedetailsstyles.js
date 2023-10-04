import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../Components/fonts';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const deviceRatio = (deviceWidth + deviceHeight) / 2;
import Colors from '../Colors';

let gridWidth = (deviceRatio * 14) / 100;

export default StyleSheet.create({
  welcometext: {
    color: 'gray',
    fontSize: 12,
    marginLeft: '9%',
    marginTop: '3%',
  },
  myname: {color: 'black', fontSize: 18, fontWeight: 'bold'},
  icon1: {
    marginLeft: '35%',
    borderWidth: 0.7,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  icon2: {
    marginLeft: '5%',
    borderWidth: 0.7,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  fl1: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    borderRadius: 95,
    margin: 1,
  },
  image: {
    height: 150,
    width: 250,
  },
  offerText: {
    fontSize: 12,
    color: 'green',
    fontFamily: fonts.pop_light,
    // margin: 10,
    flexShrink:1
  },
  course: {color: 'black', margin: 15, fontSize: 16},
  s: {margin: 20, fontSize: 11},
  CourseListView: {
    padding: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    margin:5,
    marginHorizontal:10
  },
  img2: {height: 31, width: 31, borderRadius: 9, margin: 1},
  t1: {fontSize: 12, color: 'black', margin: 3},
  t2: {color: 'gray', fontSize: 11, margin: 4},
  t3: {fontSize: 10, color: 'gray', margin: 7},
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: Colors.baseColor,
    padding: '3%',
    borderRadius: 50,
    marginHorizontal: '5%',
    margin: 7,
  },
  courseImageTitles: {
    margin: 8,
    color: Colors.baseColor,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '70%',
    textAlign: 'center',
    fontSize: 14,
    padding: 5,
    fontFamily: fonts.pop_Regular,
    position: 'absolute',
    bottom: 9,
  },
  Titleview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  courseTitle: {fontSize: 19, color: 'black', fontFamily: fonts.pop_medium,marginTop:'2%'},
  Description: {
    margin: '4%',
    fontSize: 16,
    color: 'gray',
    fontFamily: fonts.pop_SemiBold,
  },
  videoDecscription: {
    color: 'gray',
    fontSize: 15,
    marginHorizontal: '6%',
    fontFamily: fonts.pop_light,
  },
  fontFamily: fonts.pop_Regular,
  reviewText: {
    fontSize: 16,
    color: '#187498',
    fontWeight: '400',
    fontFamily: fonts.pop_SemiBold,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  ToolText: {
    fontSize: 16,
    color: 'green',
    fontWeight: '600',
    margin: '1%',
    fontFamily: fonts.pop_SemiBold,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  buyNowText: {textAlign: 'center', color: '#fff', fontSize: 18},
  teacher: {
    fontSize: 15,
    color: 'gray',
    fontFamily: fonts.pop_Regular,
    marginLeft: 6,
    margin: 3,
  },
  time: {
    color: Colors.grayColor,
    fontSize: 15,
    fontWeight: '800',
    fontFamily: fonts.lato_regular,
  },
  courseText: {
    fontSize: 16,
    color: Colors.grayColor,
    fontFamily: fonts.lato_regular,
    flexShrink: 1,
    marginHorizontal: 10,
  },
  FullCourseText: {
    fontSize: 18,
    color: '#000',
    fontFamily: fonts.pop_SemiBold,
  },
});
