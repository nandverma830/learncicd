import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
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

export default function Freecourse({navigation}) {
  useEffect(() => {
    _GetfreeCourse();
  }, []);
  const [freeCourse, setfreeCourse] = useState();
  const [loder, setloder] = useState(true);

  const _GetfreeCourse = () => {
    database()
      .ref('/freecourses')
      .once('value')
      .then(snapshot => {
        const courseArray = [];
        setloder(false);
        for (const key in snapshot.val()) {
          const course = snapshot.val()[key];
          courseArray.push(course);
        }
        setfreeCourse(courseArray);
        for (let i = courseArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [courseArray[i], courseArray[j]] = [courseArray[j], courseArray[i]];
        }
      });
  };

  const _freeNavigateAction = item => {
    navigation.navigate('Coursedeatils', {FREE: 'Free', FREEITEM: item});
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
      <Header navigation={navigation} Textinput="Search Free Course" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={freeCourse}
        style={{margin: 11}}
        spacing={10}
        renderItem={({item,index}) => (
          <View style={{marginTop: 15}}>
            <Ripple
              rippleColor="#ccc"
              rippleOpacity={1}
              rippleCentered={true}
              rippleDuration={200}
              rippleSize={300}
              onPress={() => _freeNavigateAction(item)}>
              <Animatable.View
                animation={'fadeInUp'}
                duration={1000}
                delay={index * 300}
                style={[homeStyles.Freecourselist, {width: '100%',height:280}]}>
                <Image
                  style={[homeStyles.freecourseimage,{height:'55%'}]}
                  // onLoadEnd={() => setImageLoder(false)}
                  source={{uri: item.homethumbnail}}
                  resizeMode={'contain'}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 5,
                  }}>
                  <Text style={homeStyles.freecourseTitle} numberOfLines={1}>
                    {item.coursetitle}
                  </Text>
                  <Text style={homeStyles.Free}>Free</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  {/* <EvilIcons name={'user'} size={33} color="#000" /> */}
                  <Image
                    source={require('../../assets/Images/man.png')}
                    style={{height: 23, width: 23}}
                  />
                  <Text style={homeStyles.freeTeacher} numberOfLines={1}>
                    Teacher : {item.teacher}
                  </Text>
                </View>
                <View
                  style={{
                    borderTopWidth: 0.5,
                    marginTop: 6,
                    borderColor: 'gray',
                  }}>
                  <Text style={homeStyles.videoLength}>
                    {item.videolength} video / With Tools
                  </Text>
                  <Text style={homeStyles.language}>
                    Language : {item.language}
                  </Text>
                </View>
              </Animatable.View>
            </Ripple>
          </View>
        )}
      />
    </View>
  );
}
