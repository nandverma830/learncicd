import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  StatusBar,
} from 'react-native';
import React, {useState, useCallback, useRef, useEffect} from 'react';
import Header from '../../Components/Header';
import Video from 'react-native-video';
import fonts from '../../Components/fonts';
import Colors from '../../assets/Colors';
import database from '@react-native-firebase/database';

const Wishlist = ({navigation}) => {
  const [HelpVideo, setHelpVideo] = useState('');
  useEffect(() => {
    database()
      .ref('/HelpVideo')
      .once('value')
      .then(snapshot => {
        console.log('Help Video  is =====================> ' + snapshot.val());
        setHelpVideo(snapshot.val());
      });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={Colors.baseColor} />
      <Header Tittle="HELP SCREEN" />
      <View style={Styles.lIST}>
        <Text style={Styles.Txt}>If any Problem contact :{"\n"}{"\n"}9992150052 {"\n"}9350531673 {"\n"}7988085235 {"\n"} </Text>
        {/* <Video
          source={{
            uri: HelpVideo,
          }}
          repeat={true}
          paused={true}
          controls={true}
          fullscreen
          style={{height: 200, backgroundColor: '#ccc'}}
        /> */}
      </View>
    </View>
  );
};

export default Wishlist;
const Styles = StyleSheet.create({
  lIST: {
    flex: 0.2,
    borderWidth: 1,
    borderColor: Colors.baseColor,
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 6,
    borderBottomWidth: 5,
  },
  Txt: {
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 10,
    margin: 6,
    fontFamily: fonts.pop_Regular,
  },
});
