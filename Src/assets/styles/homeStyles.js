import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../Components/fonts';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const deviceRatio = (deviceWidth + deviceHeight) / 2;
import Colors from '../Colors';
let gridWidth = (deviceRatio * 14) / 100;

export default StyleSheet.create({
  Freecourselist: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 240,
    width: 220,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: 'gray',
    shadowOffset: {
      height: 4,
    },
    elevation: 6,
  },
  freecourseimage: {
    height: '50%',
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  paidcourseFlatlist: {
    borderWidth: 0.6,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 4,
    flexDirection: 'row',
    elevation: 1,
  },
  paidcourseImage: {height: 90, width: 90, margin: 10, borderRadius: 9},
  fontFamily: fonts.pop_medium,
  coursetitle: {
    fontSize: 15,
    color: 'black',
    flexShrink: 1,
    fontFamily: fonts.pop_medium,
  },
  teacherName: {
    color: '#000',
    fontSize: 11,
    margin: 4,
    fontFamily: fonts.pop_Regular,
    flex: 1,
    flexWrap: 'wrap',
  },
  Free: {
    color: 'green',
    fontSize: 17,
    fontWeight: '900',
    fontFamily: fonts.lato_regular,
  },
  Header: {
    flex: 0.1,
    backgroundColor: Colors.baseColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  appName1: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 19,
    // marginLeft: '3%',
    fontFamily: fonts.lato_regular,
  },
  appName: {fontWeight: '900', color: '#fff', fontSize: 26},
  sliderimages: {
    flex: 1,
    borderRadius: 15,
  },
  freecourseTitle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
    flexShrink: 1,
    fontFamily: fonts.pop_medium,
  },
  freeTeacher: {
    margin: 2,
    fontSize: 14,
    color: '#000',
    fontFamily: fonts.pop_Regular,
  },
  videoLength: {
    fontSize: 13,
    color: '#000000',
    margin: 2,
    marginLeft: 10,
    fontFamily: fonts.pop_light,
  },
  language: {
    fontSize: 13,
    color: '#000000',
    marginLeft: 10,
    fontFamily: fonts.pop_light,
  },
  popularCourseView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginTop: '6%',
    marginBottom: '5%',
  },
  popularText: {
    color: Colors.baseColor,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: fonts.pop_medium,
  },
  seeAllText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: fonts.pop_medium,
    textDecorationLine: 'underline',
  },
  paiddetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    // alignItems:'center'
    flexShrink: 1,
  },
  coursePrice: {
    fontWeight: '800',
    color: '#000',
    margin: 1,
    fontFamily: fonts.pop_Regular,
    fontSize: 15,
    marginLeft: 9,
  },
  totalvideoview: {
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  totalvideos: {
    fontSize: 12,
    color: '#000',
    fontFamily: fonts.pop_light,
  },
  languagePaid: {
    fontSize: 12,
    color: '#000',
    fontFamily: fonts.lato_regular,
    flexShrink: 1,
  },
  highprice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'gray',
    fontSize: 13,
    textAlign: 'center',
  },

  itemContainer: {
    height: (deviceRatio * 28) / 100,
    borderRadius: 20,
    elevation: 1,
    marginBottom: 5,
    marginTop: '3%',
    borderWidth: 5,
    borderColor: Colors.baseColor,
  },
  UpdateView: {
    backgroundColor: Colors.baseColor,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'space-around',
    margin: 5,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 8,
    padding: 6,
  },
  UpdateText: {
    color: '#fff',
    fontSize: 15,
    marginLeft: '3%',
    fontFamily: fonts.lato_regular,
  },
  UpdateTxt: {margin: 3, color: Colors.baseColor, fontWeight: '700'},
  YoutubStyle: {
    backgroundColor: '#fff',
    borderTopWidth: 0.6,
    borderTopColor: 'red',
    borderBottomWidth: 0.6,
    borderBottomColor: 'red',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },
  Notice: {
    backgroundColor: '#fff',
    height: 100,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: 'red',
  },
  NoticeText: {
    color: '#000',
    fontFamily: fonts.lato_regular,
    fontSize: 16,
    margin: 5,
    color: 'red',
  },
});