import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../Components/Header';
import Colors from '../../assets/Colors';
import database from '@react-native-firebase/database';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';
import Ripple from 'react-native-material-ripple';
import homeStyles from '../../assets/styles/homeStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

export default function Paidcourse({navigation}) {
  useEffect(() => {
    _GetpaidCourse();
  }, []);
  const [Paidcourse, setPaidCourse] = useState();
  const [loder, setloder] = useState(true);
  const _GetpaidCourse = () => {
    database()
      .ref('/paidcourses')
      .once('value')
      .then(snapshot => {
        const courseArray = [];
        setloder(false);
        for (const key in snapshot.val()) {
          const course = snapshot.val()[key];
          courseArray.push(course);
        }
        setPaidCourse(courseArray);
        for (let i = courseArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [courseArray[i], courseArray[j]] = [courseArray[j], courseArray[i]];
        }
      });
  };

  const _paidNavigateAction = item => {
    navigation.navigate('Coursedeatils', {
      PAID: 'Padcourse',
      PAIDITEM: item,
    });
  };

  if (loder) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Bars size={12} color={Colors.baseColor} />
      </View>
    );
  }
  return (
    <View style={{backgroundColor: Colors.bodyColor, flex: 1}}>
      <Header navigation={navigation} Textinput="Search Paid Course" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Paidcourse}
        spacing={10}
        renderItem={({item, index}) => (
          <TouchableOpacity
            // animation={'fadeInUp'}
            // duration={1000}
            // delay={index * 300}
            onPress={() => _paidNavigateAction(item)}
            style={[homeStyles.paidcourseFlatlist, {margin: 5}]}>
            <Image
              style={homeStyles.paidcourseImage}
              source={{uri: item.homethumbnail}}
              resizeMode={'contain'}
            />
            <View style={{margin: '3%', marginTop: 10, flexShrink: 1}}>
              <Text style={homeStyles.coursetitle} numberOfLines={1}>
                {item.coursetitle}
              </Text>
              <View style={homeStyles.paiddetails}>
                {/* <View style={{flexDirection: 'row', width: '55%'}}>
                  <Image
                    source={require('../../assets/Images/man.png')}
                    style={{height: 23, width: 23}}
                  />
                  <Text style={homeStyles.teacherName} numberOfLines={1}>
                    <Text>Teacher : </Text>
                    {item.teacher}
                  </Text>
                </View> */}
                {item.price == 0 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '45%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[
                        homeStyles.Free,
                        {fontSize: 17, marginRight: 10},
                      ]}>
                      Free
                    </Text>
                    <AntDesign
                      name={'right'}
                      size={18}
                      style={{marginTop: 3}}
                      color="green"
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '45%',
                      marginLeft:'6%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={homeStyles.highprice}>₹{item.fakeprice}</Text>

                    <Text style={homeStyles.coursePrice}>₹{item.price}</Text>
                    <AntDesign
                      name={'right'}
                      size={18}
                      style={{marginTop: 3}}
                      color="#000"
                    />
                  </View>
                )}
              </View>
              <View style={homeStyles.totalvideoview}>
                <Text style={homeStyles.totalvideos}>
                  {/* {item.videolength} */}
                   Full Content / All Tools{' '}
                </Text>
                {/* <Text style={homeStyles.languagePaid}>
                  <Text style={{fontWeight: '600'}}>Language : </Text>
                  {item.language}
                </Text> */}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
