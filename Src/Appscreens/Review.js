import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../assets/Colors';

const Review = ({navigation}) => {
  const Reviews = [
    {
      Review: 'very helpful course buy this course and create a history  ',
    },
    {
      Review: 'very helpful course buy this course and create a history  ',
    },
    {
      Review: 'very helpful course buy this course and create a history  ',
    },
    {
      Review: 'very helpful course buy this course and create a history  ',
    },
    {
      Review: 'very helpful course buy this course and create a history  ',
    },
    {
      Review: 'very helpful course buy this course and create a history  ',
    },
  ];

  const [Comment, setComment] = useState('');

  const Addcomment = async () => {
 alert('thankyou for your valuable feedback')
 setComment(" ")
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={Colors.baseColor} />
      <Header
        // Righticon={'heart'}
        // ScreenName={'Nextscr'}
        navigation={navigation}
        Tittle="REVIEWS"
      />

      <FlatList
        data={Reviews}
        style={{
          marginTop: '2%',
        }}
        spacing={10}
        renderItem={({item}) => (
          <View style={Styles.FLview}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/Images/user.png')}
                style={Styles.Images}
              />
              <Text style={Styles.Username}>Deepak</Text>
            </View>

            <Text style={Styles.Reviewtxt}>{item.Review}</Text>
          </View>
        )}
      />

      <View style={Styles.Comments}>
        <Image
          source={require('../assets/Images/beardman.png')}
          style={{width: 30, height: 30, margin: 10}}
        />
        <ScrollView>
          <TextInput
            multiline
            placeholder="Add One Your Review For This Course.... "
            value={Comment}
            placeholderTextColor={'gray'}
            onChangeText={val => setComment(val)}
            scrollEnabled={true}
            style={{color: '#000'}}
          />
        </ScrollView>
        {Comment.length >= 1 ? (
          <MaterialIcons
            onPress={() => Addcomment()}
            name="send"
            size={19}
            color="blue"
            style={{margin: 15}}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Review;

const Styles = StyleSheet.create({
  FLview: {
    borderWidth: 0.6,
    margin: 10,
    borderColor: '#ccc',
    borderRadius: 20,
    flexShrink: 1,
  },
  Images: {width: 30, height: 30, margin: 10},
  Username: {
    margin: 2,
    fontWeight: '600',
    color: 'gray',
    marginTop: 15,
  },
  Reviewtxt: {
    color: '#000',
    fontWeight: '300',
    flexShrink: 1,
    margin: 3,
    marginLeft: 7,
    marginBottom: 10,
  },
  Comments: {
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1.6,
    width: '100%',
    borderColor: '#ccc',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});
