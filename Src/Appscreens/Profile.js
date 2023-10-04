import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Keyboard,
  ActivityIndicator,
  Share,
} from 'react-native';
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
} from '@react-native-material/core';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Shareicon from 'react-native-vector-icons/Entypo';
// import OTPInputView from '@twotalltotems/react-native-otp-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import fonts from '../Components/fonts';
import Colors from '../assets/Colors';

const App = ({navigation}) => {
  useEffect(() => {
    getDatabase();
  }, []);

  useEffect(() => {
    database()
      .ref('/AppLink')
      .once('value')
      .then(snapshot => {
        console.log('AppLink  is =====================> ' + snapshot.val());
        SetAppLink(snapshot.val());
      });
  }, []);
  const [AppLink, SetAppLink] = useState('');
  const [loder, setloder] = useState(true);
  const [apiData, setapiData] = useState('');
  const [Otp, setOtp] = useState('');
  const [Loading, setLoading] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [Error, setError] = useState('');
  const [Error1, setError1] = useState(false);
  const [Error2, setError2] = useState(false);
  const [views, setviews] = useState(false);
  const [Edit, setEdit] = useState(true);

  const [Data, setData] = useState({
    Phone: '',
    Name: '',
    Email: '',
  });

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Install this app Olkaro --->  ${AppLink}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  
  const getDatabase = async () => {
    const data = await AsyncStorage.getItem('users').then(val => val);
    try {
      await database()
        .ref('/users/' + data)
        .once('value')
        .then(snapshot => {
          setloder(false);
          setapiData(snapshot);
          setData({
            ...Data,
            Name: snapshot.val().name,
            Phone: snapshot.val().phone,
            Email: snapshot.val().gmail,
          });

          if (snapshot.val().phone.length > 6) {
            setEdit(false);
          } else {
            setEdit(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  if (loder) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={Colors.baseColor} />
      </View>
    );
  }

  const Varification = () => {
    setError1(false);
    const Gmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const Phone =/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;

    if (Data.Phone != '' && Data.Name != '' && Data.Email != '') {
      if (Data.Phone.length < 10) {
        setError('Enter Valid phone no !');
        setError1(true);
      } else {
        if (Phone.test(Data.Phone) == true) {
          if (Gmail.test(Data.Email) == true) {
            console.log(Data);
            Action();
          } else {
            setError('Enter Valid Email !');
            console.log(Data);
            setError1(true);
          }
        } else {
          setError('Enter Valid phone no !');
          setError1(true);
        }
      }
    } else {
      setError('All Field required !');
      setError1(true);
    }
  };

  // const Otpvarification = async () => {
  //   setLoading(true);
  //   console.log(value);
  //   // setviews(false)
  //   setEdit(false);
  //   setError2(true);
  // };

  const Action = async value => {
    await AsyncStorage.setItem('users', Data.Phone);
    database()
      .ref('/users/' + Data.Phone)
      .set({
        name: Data.Name,
        phone: Data.Phone,
        gmail: Data.Email,
      })
      .then(() => {
        alert('Your Data is Successfully Saved.');
        navigation.navigate('Homepage');
        Keyboard.dismiss();
        // navigation.goBack()
        setEdit(false);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Backdrop
        revealed={revealed}
        style={{backgroundColor: Colors.baseColor}}
        header={
          <AppBar
            title="Profile"
            style={{backgroundColor: Colors.baseColor}}
            transparent
            leading={props => (
              <IconButton
                icon={props => (
                  <FontAwesome name={revealed ? 'close' : 'user'} {...props} />
                )}
                onPress={() => setRevealed(prevState => !prevState)}
                {...props}
              />
            )}
          />
        }
        backLayer={
          <View
            style={{
              height: 300,
              backgroundColor: Colors.baseColor,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                margin: 20,
                fontWeight: '300',
                fontFamily: fonts.pop_Regular,
              }}>
              Thanks for visit This app .. Share This app{' '}
            </Text>
            <TouchableOpacity onPress={() => onShare()}>
              <Shareicon
                name={'share'}
                color={'#fff'}
                size={25}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
          </View>
        }>
        <View>
          {Error1 === true && (
            <View style={styles.Errorview}>
              <Text style={styles.Errortext}>Error : {Error}</Text>
            </View>
          )}
          <TextInput
            placeholderTextColor={'#ccc'}
            onChangeText={val => setData({...Data, Phone: val})}
            placeholder="Enter Your Phone No.."
            maxLength={10}
            value={Data.Phone}
            autoComplete="off"
            style={[styles.input, {marginTop: '10%'}]}
            editable={Edit == true ? true : false}
            keyboardType="number-pad"
          />
          <TextInput
            placeholderTextColor={'#ccc'}
            placeholder="Enter Your Name.."
            value={Data.Name}
            maxLength={20}
            onChangeText={val => setData({...Data, Name: val})}
            editable={Edit == true ? true : false}
            style={styles.input}
          />
          <TextInput
            placeholderTextColor={'#ccc'}
            value={Data.Email}
            placeholder="Enter Your Email.."
            onChangeText={val => setData({...Data, Email: val})}
            style={styles.input}
            autoComplete="off"
            editable={Edit == true ? true : false}
            keyboardType="email-address"
          />
          {Edit == true ? (
            <TouchableOpacity
              onPress={() => Varification()}
              style={styles.Btnview}>
              <Text style={styles.btntext}>SAVE</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        {/* ) : ( */}
        {/* <View
            style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                textAlign: 'center',
                fontWeight: '200',
                marginTop: '6%',
              }}>
              We have sent the code {'\n'}verification to your mobile number..
              {'\n'}
              <Text style={{color: 'black', fontWeight: '500'}}>
                {Data.Phone}
              </Text>
            </Text>
            <OTPInputView
              style={{width: '70%', height: 150}}
              pinCount={4}
              autoFocusOnLoad={false}
              keyboardAppearance="dark"
              codeInputFieldStyle={{
                borderWidth: 1,
                borderColor: '#00B1D2FF',
                color: '#00B1D2FF',
              }}
              codeInputHighlightStyle={{
                borderWidth: 2,
                borderColor: '#fff',
                backgroundColor: '#FAF7F0',
              }}
              onCodeChanged={code => {
                setOtp(code);
              }}
              onCodeFilled={code => {
                // console.log(`Code is ${code}, you are good to go!`);
                // setotp(code);
                // hanlesubmit();
              }}
            />
            <Button
              style={{width: '50%'}}
              isLoading={Loading}
              onPress={() => Otpvarification()}
              spinnerPlacement="end"
              isLoadingText="WAIT">
              <Text style={{color: '#fff', fontWeight: '900', fontSize: 16}}>
                SUBMIT
              </Text>
            </Button>
          </View> */}
        {/* )} */}
      </Backdrop>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 0.7,
    borderColor: '#ccc',
    marginHorizontal: 30,
    margin: 20,
    // borderWidth:0.6,
    padding: 10,
    borderRadius: 9,
    color: '#000',
  },
  Btnview: {
    borderWidth: 0.4,
    borderColor: '#fff',
    backgroundColor: Colors.baseColor,
    justifyContent: 'center',
    borderRadius: 40,
    marginHorizontal: 30,
    marginTop: '15%',
    padding: 6,
  },
  btntext: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
  },
  Errorview: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 2,
    marginTop: 15,
    marginHorizontal: 40,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'red',
  },
  // Errorview1: {
  //   backgroundColor: '#fff',
  //   justifyContent: 'center',
  //   padding: 2,
  //   marginTop: 15,
  //   marginHorizontal: 40,
  //   borderRadius: 5,
  //   borderWidth: 0.5,
  //   borderColor: 'green',
  // },
  // Errortext1: {color: 'green', textAlign: 'center', fontWeight: '300'},
  Errortext: {color: 'red', textAlign: 'center', fontWeight: '300'},
});
