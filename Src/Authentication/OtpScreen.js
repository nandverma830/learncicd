import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Ripple from 'react-native-material-ripple';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CountDown from 'react-native-countdown-component';
import Colors from '../assets/Colors';

const Otpscreen = ({navigation}) => {
  const [resend, setresend] = useState(false);
  const [random, setrandom] = useState(Math.random());
  const [time, settime] = useState(59);
  const [otp, setotp] = useState('');
  const [otperr, setotperr] = useState('');

  const Resendotp = () => {
    setotperr(false);
    if (otp == 1234) {
      navigation.navigate('Homepage');
    } else {
      setotperr(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex: 1, backgroundColor: Colors.bodyColor}}>
        <StatusBar backgroundColor={Colors.bodyColor} />

        <View style={{flex: 0.4}}>
          <Image
            source={require('../assets/Images/Applogo1.png')}
            style={{
              height: '110%',
              width: '80%',
              margin: 40,
              resizeMode: 'contain',
              // borderRadius:100
            }}
          />
        </View>
        <Text
          style={{
            color: Colors.baseColor,
            fontSize: 23,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: '15%',
          }}>
          Verification 
        </Text>
        <Text
          style={{
            color:Colors.baseColor,
            fontSize: 15,
            textAlign: 'center',
            fontWeight: '300',
            marginTop: '6%',
          }}>
          We have sent the code {'\n'}verification to your mobile number..{'\n'}{'\n'}
          <Text style={{color:Colors.baseColor, fontWeight: '400'}}>992929292</Text>
        </Text>
        <View style={{flex: 0.6}}>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <OTPInputView
                style={{width: '70%', height: 150}}
                pinCount={4}
                autoFocusOnLoad={false}
                keyboardAppearance="dark"
                codeInputFieldStyle={{
                  borderWidth: 1,
                  borderColor: Colors.baseColor,
                  color:Colors.baseColor,
                }}
                codeInputHighlightStyle={{
                  borderWidth: 2,
                  borderColor:Colors.baseColor,
                  backgroundColor: '#FAF7F0',
                }}
                onCodeChanged={code => {
                  setotp(code);
                }}
                onCodeFilled={code => {
                  // console.log(`Code is ${code}, you are good to go!`);
                  // setotp(code);
                  // handlesubmit();
                }}
              />
              {otperr == true ? (
                <Text style={{color: 'red'}}>Wrong Otp !</Text>
              ) : null}
            </View>
            <Ripple
              rippleColor="#fff"
              rippleOpacity={1}
              style={{
                backgroundColor:Colors.baseColor,
                padding: 10,
                margin: 20,
                marginHorizontal: 45,
                borderRadius: 10,
              }}
              rippleDuration={300}
              rippleSize={400}
              onPress={() => Resendotp()}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 22,
                  textAlign: 'center',
                }}>
                CONTINUE
              </Text>
            </Ripple>

            {resend === true ? (
              <TouchableOpacity
                onPress={() => {
                  setresend(false), settime(59);
                  // Snackbar.show({
                  //   text: 'Otp resend successfully',
                  //   duration: Snackbar.LENGTH_INDEFINITE,
                  //   action: {
                  //     text: 'Ok',
                  //     textColor: 'green',
                  //     backgroundColor: 'green',
                  //     onPress: () => {
                  //       /* Do something. */
                  //     },
                  //   },
                  // });
                }}>
                <Text
                  style={{
                    color: Colors.baseColor,
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: '300',
                  }}>
                  RESEND OTP
                </Text>
              </TouchableOpacity>
            ) : null}

            {resend === false ? (
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: Colors.baseColor,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  Resend otp after
                </Text>
                <CountDown
                  key={random}
                  until={time}
                  style={{margin: 1}}
                  size={15}
                  onFinish={() => alert('lll')}
                  separatorStyle={{color: '#fff'}}
                  digitStyle={{backgroundColor: '#FFF'}}
                  digitTxtStyle={{color: '#000', fontSize: 14}}
                  timeToShow={['S']}
                  showSeparator
                  timeLabels={{m: '', s: ''}}
                />
                <Text
                  style={{color:Colors.baseColor, fontWeight: 'bold', marginTop: 10}}>
                  Second !!
                </Text>
              </View>
            ) : null}
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Otpscreen;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: 'red',
  },
});
