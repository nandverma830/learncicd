import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon} from 'native-base';
import React, {useEffect} from 'react';
import {ActivityIndicator, Dimensions, Text, View} from 'react-native';
import Toast from 'react-native-simple-toast';


const deviceRatio = (deviceWidth + deviceHeight) / 2;
const buttonHeight = (deviceRatio * 7.7) / 100;
const buttonHeight1 = (deviceRatio * 2.4) / 100;
let gridHeight = (deviceRatio * 18) / 100;
let gridWidth = (deviceRatio * 14) / 100;
let gridHeight2 = (deviceWidth * 20) / 100;
let profileImage = (deviceRatio * 8) / 100;
let profilePic = (deviceRatio * 15) / 100;
let classItemWidth = (deviceWidth * 50) / 100;
let challengeHeight = (deviceRatio * 20) / 100;
let challengeImgHeight = (challengeHeight * 35) / 100;
// const imageRatio = (((Fonts.deviceWidth * 30) / 100) * 30) / 100;
export const deviceHeight = Dimensions.get('screen').height;
export const deviceWidth = Dimensions.get('screen').width;
export const resHeight = h => {
  return (deviceHeight * h) / 100;
};
export const resWidth = w => {
  return (deviceWidth * w) / 100;
};

export const typeBold = 'Poppins-Bold';
export const typeExtraBold = 'Poppins-ExtraBold';
export const typeLight = 'Poppins-Light';
export const typeMedium = 'Poppins-Medium';
export const typeRegular = 'Poppins-Regular ';
export const typeSemiBold = 'Poppins-SemiBold';
export const latoBold = 'Lato-Bold';
export const latoLight = 'Lato-Light';
export const latoRegular = 'Lato-Regular';

// utils
export const buttonRadius = resWidth(8);
export const borderRadius1 = resWidth(2);
export const borderRadius2 = resWidth(3);
export const borderRadius3 = resWidth(4);
export const borderRadius4 = resWidth(5);
export const borderRadius5 = resWidth(7);
export const sheetRadius = resWidth(10);
export const footerSpace = resWidth(2);
export const horizontalSpace = resWidth(6);

// statusbar
export const barColor = '#000';
export const barStyle = 'light-content';

export const showAlert = (message, text, snackAction, showTime) => {
  // Snackbar.show({
  //   text: message,
  //   duration:
  //     showTime === undefined
  //       ? Snackbar.LENGTH_SHORT
  //       : type === 'long'
  //       ? Snackbar.LENGTH_LONG
  //       : type === 'infinte'
  //       ? Snackbar.LENGTH_INDEFINITE
  //       : Snackbar.LENGTH_SHORT,
  //   action: {
  //     text: text,
  //     onPress: snackAction,
  //   },
  //   backgroundColor: Colors.baseColor,
  //   fontFamily: Fonts.pop_Regular,
  //   textColor: Colors.whiteColor,
  // });
};

export const message = message => {
  return Toast.show(message, Toast.SHORT, {
    backgroundColor: 'blue',
  });
};

export const validateMobile = mobile => {
  const regex = /^[0-9][0-9]{9}$/;
  return regex.test(mobile);
};


// function for email validation
export const validateEmail = email => {
  const regex =
    /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;
  return regex.test(email);
};
//

export const titleCase = name => {
  let res = name.split(' ');
  res.forEach((w, index) => {
    res[index] = w.charAt(0).toUpperCase().concat(w.slice(1, w.length));
  });
  res = res.join(' ');
  return res;
};

export const editNumber = number => {
  if (Platform.OS === 'android') {
    Linking.openURL(`tel:${number}`);
  } else {
    Linking.openURL(`telprompt:${number}`);
  }
};

export const popRenderDesign = () => {
  return <ActivityIndicator size="large" color={baseColor} />;
};

export const itemSeprater = () => {
  return <View style={{width: 10}} />;
};
export const headerComponent = () => {
  return <View style={{width: 10}} />;
};

export const footerComponent = () => {
  return <View style={{width: 10, marginBottom: resWidth(3)}} />;
};

export const emptyLoader = topspace => {
  return (
    <ActivityIndicator
      size="large"
      color={baseColor}
      style={{marginTop: topspace}}
    />
  );
};

// export const emptyListView = msg => {
//   return (
//     <View
//       style={{
//         width: '100%',
//         height: deviceHeight - 250,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Icon
//         name="emoji-sad"
//         type="Entypo"
//         style={{fontSize: 70, color: Colors.baseColor}}></Icon>

//       <Text
//         style={{alignSelf: 'center', marginTop: 10, color: Colors.baseColor}}>
//         {msg}
//       </Text>
//     </View>
//   );
// };

export const setAsyncData = async (login, data) => {
  try {
    // await AsyncStorage.setItem(paramName,value)
    console.log('dataaa');
    console.log('data' + login + 'c:' + data);
    AsyncStorage.multiSet([
      ['islogin', login],
      ['USER_DATA', JSON.stringify(data)],
    ]);
  } catch (e) {
    console.log('asyncError' + e);
  }
};

export const showError = (res, props, navigation) => {
  if ('errors' in res.response.data) {
    if ('phone' in res.response.data.errors)
      showAlert(
        JSON.stringify(res.response.data.errors.phone[0]).replace(/['"]+/g, ''),
        false,
      );
    else if ('event' in res.response.data.errors)
      showAlert(
        JSON.stringify(res.response.data.errors.event[0]).replace(/['"]+/g, ''),
        false,
      );
    else if ('otp' in res.response.data.errors)
      showAlert(
        JSON.stringify(res.response.data.errors.otp[0]).replace(/['"]+/g, ''),
        false,
      );
    else if ('image' in res.response.data.errors)
      showAlert(
        JSON.stringify(res.response.data.errors.image[0]).replace(/['"]+/g, ''),
        false,
      );
    else if ('website_id' in res.response.data.errors)
      showAlert(
        JSON.stringify(res.response.data.errors.website_id[0]).replace(
          /['"]+/g,
          '',
        ),
        false,
      );
    else if ('requested_amount' in res.response.data.errors)
      showAlert(
        JSON.stringify(res.response.data.errors.requested_amount[0]).replace(
          /['"]+/g,
          '',
        ),
        false,
      );
    else if ('utr_number' in res.response.data.errors)
      showAlert(
        JSON.stringify(res.response.data.errors.utr_number[0]).replace(
          /['"]+/g,
          '',
        ),
        false,
      );
    else if ('user_website_id' in res.response.data.errors)
      showAlert(
        JSON.stringify(res.response.data.errors.user_website_id[0]).replace(
          /['"]+/g,
          '',
        ),
        false,
      );
    else if ('name' in res.response.data.errors)
      showAlert(
        JSON.stringify(res.response.data.errors.name[0]).replace(/['"]+/g, ''),
        false,
      );
  } else {
    if (res.response.data.message === 'Unauthenticated.') {
      console.log(JSON.stringify(props));
      showAlert(
        JSON.stringify(res.response.data.message).replace(/['"]+/g, ''),
        false,
      );
      let data = {visible: true, navigation: navigation};
      console.log('JSONdata' + JSON.stringify(data));
      props.sessionState(data);
    } else {
      showAlert(
        JSON.stringify(res.response.data.message).replace(/['"]+/g, ''),
        false,
      );
    }
  }
};
