import {
  View,
  Text,
  FlatList,
  Image,
  coursedetailsstylesheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Alert,
  Share,
  Dimensions,
  Pressable,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ripple from 'react-native-material-ripple';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Stack, Avatar} from '@react-native-material/core';
import RazorpayCheckout from 'react-native-razorpay';
import Header from '../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import coursedetailsstyles from '../assets/styles/coursedetailsstyles';
import fonts from '../Components/fonts';
import Colors from '../assets/Colors';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const deviceRatio = (deviceWidth + deviceHeight) / 2;
const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

export default function Coursedeatils({navigation, route}) {
  const {FREE} = route.params;
  const {PAID} = route.params;
  const {PAIDITEM} = route.params;
  const {FREEITEM} = route.params;
  const {_reRander} = route.params;

  useEffect(() => {
    const data = AsyncStorage.getItem('users').then(val => setphonedata(val));
    _dataAction();
  }, [PAID]);
  const VIDEOSDATA = FREEITEM == undefined ? PAIDITEM : FREEITEM;
  const [phonedata, setphonedata] = useState('');
  const [courseDetails, setcourseDetails] = useState('');
  const [toggle, settoggle] = useState(false);
  const [DetailsImage, setDetailsImage] = useState();
  console.log('Phone details ====>', phonedata);
  console.log('PADI ITEM  DETAILS ========================>', PAIDITEM);
  console.log('FREE ITEM  DETAILS ========================>', FREEITEM);
  console.log('COURSE TYPE ==================>', FREE);
  console.log('COURSE TYPE ==================>', PAID);
  const data1 = VIDEOSDATA.coursedetails.videos;
  console.log('VIDEOSDATA ========================>', FREEITEM);

  const videoData = data1.videotime.map((time, index) => ({
    time: time,
    title: data1.videotitle[index],
    url: data1[index],
  }));

  const _dataAction = () => {
    if (PAIDITEM == undefined || PAIDITEM == null) {
      setcourseDetails(VIDEOSDATA);
      setDetailsImage(VIDEOSDATA.coursedetails.courseaboutimages);
    } else {
      setcourseDetails(VIDEOSDATA);
      setDetailsImage(VIDEOSDATA.coursedetails.courseaboutimages);
    }
  };

  const Paymentgateway = () => {
    if (phonedata == null) {
      Alert.alert('Please Complete Your Profile', '', [
        {
          text: 'Go to profile',
          onPress: () => navigation.navigate('Profile'),
        },
        {
          text: 'Cancel',
        },
      ]);
    } else {
      var options = {
        description: 'Credits towards consultation',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTBuYmAt8l2uURJDiiX4i1IULOVN4clRO7VdKs7FWq3oCpPhxhsSstPcWQc01phnZGBQ&usqp=CAU',
        currency: 'INR',
        key: 'rzp_live_f00ZuJvzwZLzJI',
        amount: 999 * 100,
        name: 'oLkaro',
        order_id: '',
        prefill: {
          // email: 'user@example.com',
          contact: phonedata,
          // name: 'username',
        },
        theme: {color: '#fff'},
      };
      RazorpayCheckout.open(options)
        .then(data => {})
        .catch(error => {});
    }
  };

  const Varification = item => {
    if (phonedata == null) {
      Alert.alert('Please Complete Your Profile', '', [
        {
          text: 'Go to profile',
          onPress: () => navigation.navigate('Profile'),
        },
        {
          text: 'Cancel',
        },
      ]);
    } else {
      navigation.navigate('Videoscreen', {
        VideoUrl: item.url,
        VideoTitle: item.title,
      });
    }
  };

  return (
    <View style={{backgroundColor: Colors.bodyColor, flex: 1}}>
      {PAID != undefined ? (
        <Header
          navigation={navigation}
          // Righticon="heart"
          Tittle="COURSE DEATILS"
        />
      ) : (
        <Header
          navigation={navigation}
          // Righticon="heart"
          Tittle="FREE COURSE"
        />
      )}

      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DetailsImage}
          spacing={10}
          renderItem={({item}) => (
            <View
              style={{
                margin: 8,
                borderWidth: 0.8,
                borderColor: '#ccc',
                borderRadius: 20,
              }}>
              <ImageBackground
                imageStyle={{borderRadius: 20}}
                style={{
                  width: DetailsImage.length == 1 ? imageWidth - 19 : 300,
                  height: (deviceRatio * 28) / 100,
                }}
                source={{uri: item}}>
                <Text style={{}}>{/* {item.Thumbnaltitle} */}</Text>
              </ImageBackground>
            </View>
          )}
        />

        <View
          style={{backgroundColor: '#fff', padding: 20, marginHorizontal: 10}}>
          {PAID != undefined ? (
            <Text style={coursedetailsstyles.offerText}>
              <Entypo name={'star'} size={21} color="green" />
              {'  '}₹ {VIDEOSDATA.price} / Lifetime Free Updates{' '}
            </Text>
          ) : (
            <Text style={coursedetailsstyles.offerText}>
              <Entypo name={'star'} size={21} color="green" />
              {'  '}
              Lifetime Free Updates{' '}
            </Text>
          )}
          <View style={coursedetailsstyles.Titleview}>
            <Text style={coursedetailsstyles.courseTitle}>
              {courseDetails.coursetitle}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              margin: '1%',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Entypo name={'user'} size={21} color="#187498" />
              <Text style={coursedetailsstyles.teacher} numberOfLines={1}>
                By : {courseDetails.teacher}
              </Text>
            </View>

            {/* <TouchableOpacity onPress={() => alert('Comming Soon')}>
              <Entypo name={'share'} color={Colors.grayColor} size={25} />
            </TouchableOpacity> */}
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor: '#fff',
            }}>
            <View style={{flexDirection: 'row', margin: '3%'}}>
              <Text style={coursedetailsstyles.Description}>Description </Text>
              {toggle == true ? (
                <AntDesign
                  name={'caretdown'}
                  size={21}
                  color="gray"
                  style={{marginTop: '3%'}}
                  onPress={() => settoggle(false)}
                />
              ) : null}
              {toggle == false ? (
                <AntDesign
                  name={'caretup'}
                  size={21}
                  color="gray"
                  style={{marginTop: '5%'}}
                  onPress={() => settoggle(true)}
                />
              ) : null}
            </View>
            {/* <TouchableOpacity
              style={{marginLeft: '5%', margin: '4%'}}
              onPress={() => alert('Coming soon .........')}>
              <Text style={coursedetailsstyles.reviewText}>Reviews </Text>
            </TouchableOpacity> */}
            <Text style={coursedetailsstyles.ToolText1}>Free</Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Tools', {TOOLS: VIDEOSDATA.tools})
              }
              style={{flexDirection: 'row', margin: '4%'}}>
              <Entypo
                name={'download'}
                size={21}
                color="green"
                style={{margin: 1}}
              />
              <Text style={coursedetailsstyles.ToolText}>Tools</Text>
            </TouchableOpacity>
          </View>
          {toggle == true ? (
            <Text style={coursedetailsstyles.videoDecscription}>
              {VIDEOSDATA.coursedetails.description}
            </Text>
          ) : null}
        </View>
        <View style={{margin: '2%'}}>
          <View
            style={{
              flexDirection: 'row',
              margin: '3%',
            }}>
            <Text style={coursedetailsstyles.FullCourseText}>FREE DATA :</Text>
          </View>
          <FlatList
            data={videoData}
            renderItem={({item, index}) => (
              <View
                // onPress={() => Varification(item)}
                style={coursedetailsstyles.CourseListView}>
                {/* <Image
                  source={require('../assets/Images/play-button.png')}
                  style={{height: 40, width: 40}}
                /> */}
                <Text style={coursedetailsstyles.courseText}>
                  {'Download ->'}
                </Text>
                {PAID != undefined && VIDEOSDATA.price != 0 ? (
                  <Image
                    resizeMode="contain"
                    source={require('../assets/Images/lock.png')}
                    style={coursedetailsstyles.lockIcon}
                  />
                ) : (
                  <TouchableOpacity
                    style={{flexDirection: 'row'}}
                    onPress={() => Linking.canOpenURL(item.title)}>
                    <Text
                      style={coursedetailsstyles.courseText1}
                      // numberOfLines={2}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                )}
                {/* <Text style={coursedetailsstyles.time}>{item.time}</Text> */}
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
      {PAID != undefined && VIDEOSDATA.price != 0 ? (
        <Ripple
          rippleColor="#fff"
          rippleOpacity={1}
          rippleDuration={200}
          rippleCentered={true}
          rippleSize={300}
          onPress={() => Paymentgateway()}>
          <View style={coursedetailsstyles.button}>
            <Text style={coursedetailsstyles.buyNowText}>Buy Now</Text>
          </View>
        </Ripple>
      ) : null}
    </View>
  );
}
