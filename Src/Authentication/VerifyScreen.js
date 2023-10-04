import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../assets/Colors';

function Splash({navigation}) {
  const [phone, setPhone] = useState('9787878677');
  const [error, seterror] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [textentry, setTextentry] = useState(0);
  const [message, setMessage] = useState('');

  function changenumber(val) {
    if (val.length < 11) {
      setPhone(val);
      seterror(false);
    }
    if (val.length == 10) {
      setTextentry(1);
    }
    if (val.length < 10) {
      setTextentry(0);
    }
  }

  const handlesubmit = async () => {
    const reg = /^[0]?[6789]\d{9}$/;
    if (reg.test(phone) === true) {
      if (phone.length > 9) {
        setLoading(true);
        navigation.navigate('SignupScreen');
        setLoading(false);
      } else {
        seterror(true);
        setMessage('Enter valid mobile number!!');
      }
    } else {
      seterror(true);
      setMessage('Enter valid mobile number!!');
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.bodyColor} />
      <View
        style={{
          flex: 0.5,
          // backgroundColor:Colors.baseColor,
          justifyContent: 'center',
          alignItems: 'center',
          // borderBottomLeftRadius:50,
          // borderBottomRightRadius:50,
          // borderTopRightRadius:50,
          // borderTopLeftRadius:50,
          // margin:20
        }}>
        <Image
          source={require('../assets/Images/Applogo1.png')}
          style={{height: '80%', width: '80%', borderRadius:30}}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Welcome to oLkaro</Text>
        <View style={styles.action}>
          <FontAwesome name="phone" color="#5DA7DB" size={20} />
          <TextInput
            keyboardType={'numeric'}
            autoComplete="off"
            selectionColor="#5DA7DB"
            placeholder="Enter your Phone Number"
            style={styles.textInput}
            value={phone}
            onChangeText={val => changenumber(val)}
            placeholderTextColor="#5DA7DB"
          />
          {textentry != 0 ? (
            <Animatable.View animation="bounceIn" duraton="1500">
              <Feather name="check-circle" size={20} color="green" />
            </Animatable.View>
          ) : null}
        </View>
        {error == true ? (
          <Animatable.View animation="fadeInLeft" style={styles.actionError}>
            <Text style={styles.errorMsg}>{message}</Text>
          </Animatable.View>
        ) : null}
        <View style={styles.button}>
          {isLoading == false ? (
            <TouchableOpacity onPress={() => handlesubmit()}>
              <View style={styles.signIn}>
                <Text style={styles.textSign}>Get Start</Text>
                <MaterialIcons
                  name="navigate-next"
                  color="#fff"
                  size={32}></MaterialIcons>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={{alignSelf: 'center'}}>
              <Animatable.View
                animation="rotate"
                iterationCount="infinite"
                style={{flexDirection: 'row'}}>
                <Feather name="loader" size={35} color="green" />
              </Animatable.View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const {height, width} = Dimensions.get('screen');
const height_logo = height * 0.2;
const width_logo = width - (width * 40) / 100;

const styles = StyleSheet.create({
  logo: {
    width: width_logo,
    height: height_logo,
    borderRadius: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  action: {
    flexDirection: 'row',
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#5DA7DB',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#5DA7DB',
  },
  errorMsg: {
    color: 'red',
    fontSize: 14,
  },
  footer: {
    flex: 0.5,
    // borderColor:"#5DA7DB",
    // borderWidth:1,
    // backgroundColor: '#fff',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    borderBottomColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    color: '#5DA7DB',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    marginTop: 30,
  },
  signIn: {
    height: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#5DA7DB',
    borderRadius: 10,
    paddingHorizontal:30
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Splash;
