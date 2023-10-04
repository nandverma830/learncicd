import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Linking,
} from 'react-native';
import Popup from '../Components/Popup';

export default function LoginScreen1({navigation}) {
  const [Username, setUsername] = useState('')
  const _Action = () => {
    if(Username.length < 3 ){
        <Popup/>
    }else{
    navigation.navigate('OtpScreen');
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#5DA7DB'} />
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Image
                source={require('../assets/Images/AppLogo.jpg')}
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 700,
                  borderWidth: 0.6,
                  borderColor: 'white',
                }}
              />
            </View>
            <Text style={styles.loginTitleText}>Register</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                keyboardType="default"
                textContentType="emailAddress"
                placeholder="Enter Your Name"
                maxLength={18}
                onChangeText={(val)=>setUsername(val)}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Gmail</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                // secureTextEntry={true}
                // textContentType='password'
                keyboardType="email-address"
                placeholder="Enter Your Gmail"
              />
            </View>
            <TouchableOpacity
              onPress={() => _Action()}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Get OTP</Text>
            </TouchableOpacity>
            <Text style={styles.registerText}>
              Read All terms &{' '}
              <Text
                style={{textDecorationLine: 'underline', color: '#5DA7DB'}}
                onPress={() =>
                  Linking.openURL(
                    'https://ik.imagekit.io/jyrudmw6ws/Free_Courses/ac2fd657-f639-4e78-a354-00c7b86cdce6_en_rG8_2e1l6.txt?updatedAt=1679680205221',
                  )
                }>
                Conditions
              </Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.forgotPasswordText}>Change Number?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#5DA7DB',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#5DA7DB',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '15%',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#5DA7DB',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    textDecorationLine: 'underline',
    // color:'#5DA7DB'
  },
});
