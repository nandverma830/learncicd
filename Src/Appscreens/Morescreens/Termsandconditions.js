import {View, Text,ScrollView} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import fonts from '../../Components/fonts';


const Terms = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header
        // Righticon={'heart'}
        // ScreenName={'Nextscr'}
        navigation={navigation}
        Tittle="TERMS & CONDITIONS"
      />
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <Text
          style={{color: '#000', fontWeight: '300', fontSize: 16, margin: 8,fontFamily: fonts.pop_Regular}}>
          Using oLkaro Who May Use our Services You may use our Services only if
          you can form a binding contract with oLkaro, and only in compliance
          with these Terms and all applicable laws. When you create your oLkaro
          account, and subsequently when you use certain features, you must
          provide us with accurate and complete information, and you agree to
          update your information to keep it accurate and complete. Any use or
          access by anyone under the age of 13 is prohibited, and certain
          regions and Content Offerings may have additional requirements and/or
          restrictions. If you do any freelance work by taking credit of our
          course, then we will have no problem in this. We will not be
          responsible.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Terms;
