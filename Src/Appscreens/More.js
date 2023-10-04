import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  stylesheet,
  ScrollView,
  Share,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {height} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import Header from '../Components/Header';
import morestyles from '../assets/styles/morestyles';
import Colors from '../assets/Colors';
const win = Dimensions.get('screen');
import database from '@react-native-firebase/database';
const ratio = win.width / 541; //541 is actual image width

const App = ({navigation}) => {
  const Data = [{}];
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
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Install this app Olkaro ---->  ${AppLink}`,
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

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyColor}}>
      <StatusBar backgroundColor={Colors.baseColor} />
      <Header
        // Righticon={'heart'}
        // ScreenName={'Nextscr'}
        navigation={navigation}
        Tittle="oLkaro More"
      />
      <View style={{flex: 0.9, backgroundColor: Colors.bodyColor}}>
        <TouchableOpacity style={morestyles.Share} onPress={() => onShare()}>
          <Text style={morestyles.Sharetext}>Share App</Text>
          <FontAwesome5
            name="share-alt"
            size={17}
            style={{margin: 5, marginTop: 10}}
            color={'gray'}
          />
        </TouchableOpacity>

        <View style={morestyles.Btnview}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={morestyles.Buttonview}>
            <View style={morestyles.Iconback}>
              <FontAwesome5 name="user" size={18} color={'gray'} />
            </View>
            <Text style={morestyles.ButtonText}>Profile</Text>
            <FontAwesome5 name="chevron-right" size={17} color={'gray'} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            style={morestyles.Buttonview}>
            <View style={morestyles.Iconback}>
              <FontAwesome5 name="info" size={18} color={'gray'} />
            </View>
            <Text style={morestyles.ButtonText}>About Us</Text>
            <FontAwesome5 name="chevron-right" size={17} color={'gray'} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Termsandconditions')}
            style={morestyles.Buttonview}>
            <View style={morestyles.Iconback}>
              <FontAwesome5 name="file-alt" size={18} color={'gray'} />
            </View>
            <Text style={morestyles.ButtonText}>Terms & Condition</Text>
            <FontAwesome5 name="chevron-right" size={17} color={'gray'} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('HelpScreen')}
            style={morestyles.Buttonview}>
            <View style={morestyles.Iconback}>
              <MaterialCommunityIcons name="video" size={23} color={'gray'} />
            </View>
            <Text style={morestyles.ButtonText}>Help</Text>
            <FontAwesome5 name="chevron-right" size={17} color={'gray'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Privacypolicy')}
            style={morestyles.Buttonview}>
            <View style={morestyles.Iconback}>
              <Ionicons
                name="ios-shield-checkmark-outline"
                size={23}
                color={'gray'}
              />
            </View>
            <Text style={morestyles.ButtonText}>Privacy Policy</Text>
            <FontAwesome5 name="chevron-right" size={17} color={'gray'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={morestyles.Buttonview}>
            <View style={morestyles.Iconback}>
              <FontAwesome5 name="phone" size={18} color={'gray'} />
            </View>
            <Text style={morestyles.ButtonText}>Contact Us</Text>
            <FontAwesome5 name="chevron-right" size={17} color={'gray'} />
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.3, backgroundColor: Colors.bodyColor}}>
          <Text style={morestyles.Version}>Version 1.4</Text>
          {/* <Image source={require('../assets/Images/AppLogo.jpg')} style={{height:'30%',width:'50%'}}/> */}
        </View>
      </View>
    </View>
  );
};

export default App;
