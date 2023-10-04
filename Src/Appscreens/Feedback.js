import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  StatusBar,
  Image,
  ActivityIndicator,
  Alert,
  RefreshControl,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../Components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import fonts from '../Components/fonts';
import Colors from '../assets/Colors';

const Feedback = ({navigation}) => {
  const [loder, setloder] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [apiFeedback, setapiFeedback] = useState('');
  const [userPhone, setuserPhone] = useState('');
  const [loading, setloading] = useState(false);

  const allVals = [];

  Object.keys(apiFeedback).forEach(key => {
    allVals.push(apiFeedback[key].val);
  });

  for (let i = allVals.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allVals[i], allVals[j]] = [allVals[j], allVals[i]];
  }
  var showtimesAsString = allVals.join(' | ');
  // console.log('All Feedbacks ===================>', showtimesAsString);

  useEffect(() => {
    getDatabase();
    AsyncStorage.getItem('users').then(val => setuserPhone(val));
    // console.log(allVals);
  }, []);

  const Review = [
    {
      Reviews: 'This is very helpfull App thanks team',
    },
    {
      Reviews: 'This is very helpfull App thanks team',
    },
    {
      Reviews: 'This is very helpfull App thanks team',
    },
    {
      Reviews: 'This is very helpfull App thanks team',
    },
    {
      Reviews: 'This is very helpfull App thanks team',
    },
    {
      Reviews: 'This is very helpfull App thanks team',
    },
  ];

  const Save = async () => {
    const Makeid = () => {
      return `${Math.floor(Math.random() * 10000)}${Math.floor(
        Math.random() * 10000,
      )}`;
    };
    const MYID = Makeid();
    console.log(`USER FEEDBACK ID IS ======> ${MYID}`);

    if (userPhone == null) {
      Alert.alert('Please Complete Your Profile', '', [
        {
          text: 'Go to profile',
          onPress: () => navigation.navigate('Profile'),
        },
        {
          text: 'Cancel',
        },
      ]);
    } else {
      database()
        .ref('/feedbacks/' + MYID)
        .set(feedback)
        .then(
          resp => alert('Thank You For Your Valuable Feedback'),
          setFeedback(''),
        );
    }
  };

  const getDatabase = async () => {
    AsyncStorage.getItem('users').then(val => setuserPhone(val));
    setloading(true);
    const data = await AsyncStorage.getItem('users').then(val => val);
    try {
      database()
        .ref('/feedbacks')
        .once('value')
        .then(snapshot => {
          setloading(false);
          setloder(false);
          setapiFeedback(snapshot.val());
        });
    } catch (error) {
      console.log('feedback get err :', error);
    }
  };

  const isFocused = useIsFocused();

  if (loder) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={Colors.baseColor} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      onPress={() => Keyboard.dismiss()}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: Colors.bodyColor}}>
      <StatusBar backgroundColor={Colors.baseColor} />
      <Header
        // Righticon={'heart'}
        // ScreenName={'Nextscr'}
        navigation={navigation}
        Tittle="FEEDBACK"
      />
      <RefreshControl onRefresh={() => getDatabase()} refreshing={loading}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView>
            <View style={{flex: 0.9, borderStartColor: '#fff'}}>
              <TextInput
                multiline={true}
                style={{
                  height: 200,
                  textAlignVertical: 'top',
                  borderWidth: 1,
                  borderColor: Colors.baseColor,
                  margin: 10,
                  borderRadius: 10,
                }}
                onChangeText={val => setFeedback({...feedback, val})}
                value={feedback}
              />

              <TouchableOpacity
                onPress={() => Save()}
                style={Styles.Buttonview}>
                <Text style={Styles.Text1}>SUBMIT</Text>
              </TouchableOpacity>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={allVals}
                style={{margin: 10}}
                spacing={10}
                renderItem={({item}) => (
                  <View style={Styles.Reviewview}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={require('../assets/Images/user.png')}
                        style={{height: 20, width: 20, borderRadius: 100}}
                      />
                      <Text
                        style={{
                          fontWeight: '800',
                          color: '#000',
                          fontSize: 13,
                          marginLeft: 10,
                          flexShrink: 1,
                        }}>
                        USER
                      </Text>
                    </View>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 16,
                          fontWeight: '300',
                          margin: 1,
                          marginTop: 10,
                          fontFamily: fonts.lato_light,
                        }}>
                        {item}
                      </Text>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </RefreshControl>
    </KeyboardAvoidingView>
  );
};

export default Feedback;

const Styles = StyleSheet.create({
  View2: {
    flex: 0.1,
    backgroundColor: Colors.baseColor,
    justifyContent: 'center',
  },
  Feedback: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 22,
    textAlign: 'center',
  },
  Buttonview: {
    borderWidth: 1,
    borderColor: Colors.baseColor,
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.baseColor,
    marginHorizontal: 60,
    alignItems: 'center',
  },
  Text1: {
    color: '#fff',
    fontSize: 14,
    fontFamily: fonts.lato_regular,
    textAlign: 'center',
  },
  Reviewview: {
    borderWidth: 0.5,
    padding: 10,
    margin: 10,
    width: 300,
    height: 170,
    borderRadius: 10,
    elevation: 4,
    borderBottomWidth: 2,
    borderBottomColor: Colors.baseColor,
    backgroundColor: '#fff',
    marginTop: '70%',
    borderColor: Colors.baseColor,
  },
});
