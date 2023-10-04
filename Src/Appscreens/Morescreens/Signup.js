import {View, Text, StyleSheet,Linking,TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../assets/Colors';
// import AntDesign from 'react-native-vector-icons/AntDesign';

const Resistration = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header
        // Righticon={'heart'}
        // ScreenName={'Nextscr'}
        navigation={navigation}
        Tittle="CONNECT & HELP"
      />
      <TouchableOpacity onPress={() => Linking.openURL('mailto:olkaro1313@gmail.com') }  title="olkaro1313@gmail.com" style={Styles.View1}>
        <MaterialCommunityIcons name="email" size={30} color={Colors.baseColor} />
        <Text style={Styles.Text1}>olkaro1313@gmail.com</Text>
        <AntDesign name="checkcircle" size={20} color={Colors.baseColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Linking.openURL("https://telegram.me/share/url?url=<URL>&text=<TEXT>")} style={Styles.View1}>
        <Fontisto name="telegram" size={30} color={Colors.baseColor} />
        <Text style={Styles.Text1}>Username :-- @hacker1313a</Text>
        <AntDesign name="checkcircle" size={20} color={Colors.baseColor} />
      </TouchableOpacity>
      {/* <View style={Styles.View1}>
      <Fontisto name="telegram" size={30} color={'#00B1D2FF'} />
        <Text style={Styles.Text1} onPress={()=>Linking.openURL('https://t.me/black_hat_hacker_all')}>Telegram group </Text>
        <AntDesign name="checkcircle" size={20} color={'#00B1D2FF'} />
      </View> */}
      <TouchableOpacity onPress={() =>    Linking.openURL('instagram://user?username=olkaro1313')} style={Styles.View1}>
        <MaterialCommunityIcons
          name="instagram"
          size={30}
          color={Colors.baseColor}
        />
        <Text style={Styles.Text1}>olkaro1313</Text>
        <AntDesign name="checkcircle" size={20} color={Colors.baseColor} />
      </TouchableOpacity>
    </View>
  );
};

export default Resistration;

const Styles = StyleSheet.create({
  View1: {
    borderWidth: 0.5,
    margin: 20,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#00B1D2FF',
    backgroundColor: '#fff',
  },
  Text1: {
    color: '#00B1D2FF',
    fontSize: 14,
    fontWeight: '700',
    marginRight: 30,
  },
});
