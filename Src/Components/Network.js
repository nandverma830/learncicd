import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import * as Animatable from 'react-native-animatable';
import fonts from './fonts';

const App = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setnetworktype(state.type);
      //   console.log('Is connected?', state.isConnected);
      setnetwork(state.isConnected);
    });
  }, []);

  const [network, setnetwork] = useState(true);
  const [networktype, setnetworktype] = useState();
  return (
    <View style={{position: 'absolute', bottom: 0}}>
      {network === true ? (
        <Animatable.View
          animation={network == true ? 'fadeOutDown' : 'fadeInUp'}
          duration={5000}
          style={{
            backgroundColor: 'green',
            justifyContent: 'center',
            height: 20,
            width: (width = Dimensions.get('screen').width),
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontFamily: fonts.lato_regular,
            }}>
            Back online
          </Text>
        </Animatable.View>
      ) : (
        <Animatable.View
          animation="fadeInUp"
          duration={1200}
          style={{
            backgroundColor: 'red',
            justifyContent: 'center',
            height: 23,
            width: (width = Dimensions.get('screen').width),
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontFamily: fonts.lato_regular,
            }}>
            You're offline !
          </Text>
        </Animatable.View>
      )}
    </View>
  );
};

export default App;
