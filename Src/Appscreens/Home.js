import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  homeStylesheet,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
  Dimensions,
  RefreshControl,
  SafeAreaView,
  Linking,
  Modal,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Stack, Avatar} from '@react-native-material/core';
import Ripple from 'react-native-material-ripple';
import database from '@react-native-firebase/database';
import fonts from '../Components/fonts';
import Carousel from 'react-native-snap-carousel';
import homeStyles from '../assets/styles/homeStyles';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';
import Colors from '../assets/Colors';
const SLIDER_WIDTH = Dimensions.get('screen').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 3);
import * as Animatable from 'react-native-animatable';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {startUpdateFlow} from '@gurukumparan/react-native-android-inapp-updates';

const Home = ({navigation}) => {
  const REF = useRef();
  const [loder, setloder] = useState(true);
  const [freeCourseDetails, setfreeCourseDetails] = useState();
  const [paidCourseDetails, setpaidCourseDetails] = useState();
  const [SliderImages, setSliderImages] = useState([]);
  const [loading, setloading] = useState(false);
  const [Update, setUpdate] = useState(false);
  const [ChanelLink, setChanelLink] = useState('');
  const [ImageLoder, setImageLoder] = useState(true);
  const [AppLink, SetAppLink] = useState('');
  const [TelegramLink, setTelegramLink] = useState('');
  const [Notice, setNotice] = useState('');
  const [NoticePopUp, setNoticePopUp] = useState(false);
  useEffect(() => {
    _getData();
    database()
      .ref('/CommonAction')
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val(), '<============ Common Data Is');
        setNotice(snapshot.val().Notice.Notice);
        setNoticePopUp(snapshot.val().Notice.noticepopup);
      });
    checkUpdate();
  }, []);

  const checkUpdate = async () => {
    try {
      const result = await startUpdateFlow('immediate');
      console.log('Play Store Version  ==================>', result);
    } catch (e) {
      console.log('error ==================>', e);
    }
  };

  const _getData = () => {
    setloading(true);
    database()
      .ref('/SliderImages')
      .once('value')
      .then(snapshot => {
        console.log('Slider Images  ===========>', snapshot.val());
        setloading(false);
        let parsedData = snapshot.val();
        var imagesArray = Object.values(parsedData);
        setSliderImages(imagesArray);
        for (let i = imagesArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]];
        }
      });
    database()
      .ref('/freecourses')
      .once('value')
      .then(snapshot => {
        console.log('free course ===========>', snapshot.val());
        setloder(false);
        setloading(false);
        const courseArray = [];
        for (const key in snapshot.val()) {
          const course = snapshot.val()[key];
          courseArray.push(course);
        }
        setfreeCourseDetails(courseArray);
        for (let i = courseArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [courseArray[i], courseArray[j]] = [courseArray[j], courseArray[i]];
        }
      });

    database()
      .ref('/paidcourses')
      .once('value')
      .then(snapshot => {
        console.log('paid course ===========>', snapshot.val());
        setloder(false);
        setloading(false);
        const courseArray = [];
        for (const key in snapshot.val()) {
          const course = snapshot.val()[key];
          courseArray.push(course);
        }
        setpaidCourseDetails(courseArray);
        for (let i = courseArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [courseArray[i], courseArray[j]] = [courseArray[j], courseArray[i]];
        }
      });
    database()
      .ref('/update')
      .once('value')
      .then(snapshot => {
        console.log('Update is =====================> ' + snapshot.val());
        setUpdate(snapshot.val());
      });
    database()
      .ref('/chanelLink')
      .once('value')
      .then(snapshot => {
        console.log('Chanel Link is =====================> ' + snapshot.val());
        setChanelLink(snapshot.val());
      });
    database()
      .ref('/AppLink')
      .once('value')
      .then(snapshot => {
        console.log('AppLink  is =====================> ' + snapshot.val());
        SetAppLink(snapshot.val());
      });
    database()
      .ref('/Telegram')
      .once('value')
      .then(snapshot => {
        console.log('AppLink  is =====================> ' + snapshot.val());
        setTelegramLink(snapshot.val());
      });
  };

  const Seeall = () => {
    navigation.navigate('TopTabNavigation');
  };

  if (loder) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Bars size={12} color={Colors.baseColor} />
      </View>
    );
  }

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={homeStyles.itemContainer}
        onPress={() => bannerClick(item, index)}>
        <Image
          resizeMode={'contain'}
          source={{uri: item}}
          style={homeStyles.sliderimages}
        />
      </TouchableOpacity>
    );
  };

  function bannerClick(item, index) {
    console.log(index);
    {
      index != null
        ? navigation.navigate('TopTabNavigation')
        : navigation.navigate('Profile');
    }
  }

  const _freeNavigateAction = item => {
    navigation.navigate('Coursedeatils', {FREE: 'Free', FREEITEM: item});
  };

  const _paidNavigateAction = item => {
    navigation.navigate('Coursedeatils', {
      PAID: 'Padcourse',
      PAIDITEM: item,
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: Colors.bodyColor, flex: 1}}>
      <StatusBar backgroundColor={Colors.baseColor} />
      <View style={homeStyles.Header}>
        <View style={{flex: 0.8}}>
          <Text style={homeStyles.appName1}>
            Welcome to <Text style={homeStyles.appName}>oLkaro</Text>
          </Text>
        </View>
        {/* <View
          style={{
            flex: 0.1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('WishList')}>
            <Avatar
              icon={props => <FontAwesome5 name="heart" {...props} />}
              color="#fff"
              size={35}
              tintColor={Colors.baseColor}
            />
          </TouchableOpacity>
        </View> */}

        <View
          style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Avatar
              icon={props => <FontAwesome5 name="bell" {...props} />}
              color="#fff"
              size={35}
              tintColor={Colors.baseColor}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={() => _getData()} refreshing={loading} />
        }
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#fff', flex: 1}}>
        {/* <View> */}
        {Update === true ? (
          <View style={homeStyles.UpdateView}>
            <Text style={homeStyles.UpdateText}>A New Update Is Available</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(AppLink)}
              style={{backgroundColor: '#fff', padding: 4, borderRadius: 5}}>
              <Text style={homeStyles.UpdateTxt}>UPDATE</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <Carousel
          ref={REF}
          data={SliderImages}
          renderItem={_renderItem}
          sliderWidth={SLIDER_WIDTH}
          layout="default"
          autoplayInterval={4000}
          autoplayDelay={1000}
          autoplay={true}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.6}
          loop={true}
          itemWidth={SLIDER_WIDTH - 10}
          hasParallaxImages={true}
          removeClippedSubviews={true}
          showsHorizontalScrollIndicator={false}
        />
        {NoticePopUp && (
          <View style={homeStyles.Notice}>
            <Text style={homeStyles.NoticeText}>{Notice}</Text>
          </View>
        )}

        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={freeCourseDetails}
            style={{margin: 11}}
            spacing={10}
            renderItem={({item}) => (
              <View style={{margin: 6}}>
                <Ripple
                  rippleColor="#ccc"
                  rippleOpacity={1}
                  rippleCentered={true}
                  rippleDuration={200}
                  rippleSize={300}
                  onPress={() => _freeNavigateAction(item)}>
                  <View style={homeStyles.Freecourselist}>
                    <Image
                      style={homeStyles.freecourseimage}
                      onLoadEnd={() => setImageLoder(false)}
                      source={{uri: item.homethumbnail}}
                      resizeMode={'contain'}
                    />
                    {/* {ImageLoder && (
                      <ActivityIndicator style={{position:'absolute',top:10}} color={'#000'} size={20} />
                    )} */}
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 5,
                      }}>
                      <Text
                        style={homeStyles.freecourseTitle}
                        numberOfLines={1}>
                        {item.coursetitle}
                      </Text>
                      <Text style={homeStyles.Free}>Free</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      {/* <EvilIcons name={'user'} size={33} color="#000" /> */}
                      <Image
                        source={require('../assets/Images/man.png')}
                        style={{height: 23, width: 23}}
                      />
                      <Text style={homeStyles.freeTeacher} numberOfLines={1}>
                        Teacher : {item.teacher}
                      </Text>
                    </View>
                    <View
                      style={{
                        borderTopWidth: 0.5,
                        marginTop: 6,
                        borderColor: 'gray',
                      }}>
                      <Text style={homeStyles.videoLength}>
                        {/* {item.videolength} */}
                        All Data / All Tools
                      </Text>
                      <Text style={homeStyles.language}>
                        Language : {item.language}
                      </Text>
                    </View>
                  </View>
                </Ripple>
              </View>
            )}
          />
        </View>

        {/* paid data in scroll */}
        <View style={{margin: 8}}>
          <View style={homeStyles.YoutubStyle}>
            <Text
              style={[homeStyles.popularText, {color: 'red', marginLeft: 10}]}>
              All Free Data/Videos
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => Linking.openURL(TelegramLink)}>
                <Fontisto
                  name="telegram"
                  size={30}
                  style={{marginRight: 30, margin: 3}}
                  color={Colors.baseColor}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(ChanelLink)}>
                <FontAwesome5
                  name="youtube"
                  style={{marginRight: 19}}
                  size={35}
                  color={'red'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('instagram://user?username=olkaro1313')
                }>
                <MaterialCommunityIcons
                  name="instagram"
                  size={35}
                  style={{marginRight: 6}}
                  color={'#c12c91'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={homeStyles.popularCourseView}>
            <Text style={homeStyles.popularText}>Popular Content</Text>
            <TouchableOpacity onPress={() => Seeall()}>
              <Text style={homeStyles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={paidCourseDetails}
            // style={{margin: 11}}
            spacing={10}
            renderItem={({item, index}) => (
              <TouchableOpacity
                // animation={'fadeInUp'}
                // duration={1000}
                // delay={index * 300}
                onPress={() => _paidNavigateAction(item)}
                style={homeStyles.paidcourseFlatlist}>
                <Image
                  onLoadEnd={() => setImageLoder(false)}
                  style={homeStyles.paidcourseImage}
                  source={{uri: item.homethumbnail}}
                  resizeMode={'contain'}
                />
                {ImageLoder && <ActivityIndicator color={'#000'} size={20} />}

                <View style={{margin: '3%', marginTop: 10, flexShrink: 1}}>
                  <Text style={homeStyles.coursetitle} numberOfLines={1}>
                    {item.coursetitle}
                  </Text>
                  <View style={homeStyles.paiddetails}>
                    {/* <View style={{flexDirection: 'row', width: '55%'}}>
                      <Image
                        source={require('../assets/Images/man.png')}
                        style={{height: 23, width: 23}}
                      />
                      <Text style={homeStyles.teacherName} numberOfLines={1}>
                        <Text>Teacher : </Text>
                        {item.teacher}
                      </Text>
                    </View> */}
                    {item.price == 0 ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          width: '45%',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={[
                            homeStyles.Free,
                            {fontSize: 17, marginRight: 10},
                          ]}>
                          Free
                        </Text>
                        <AntDesign
                          name={'right'}
                          size={18}
                          style={{marginTop: 3}}
                          color="green"
                        />
                      </View>
                    ) : (
                      <View style={homeStyles.fakePrice_}>
                        <Text style={homeStyles.highprice}>
                          ₹{item.fakeprice}
                        </Text>
                        <Text style={homeStyles.coursePrice}>
                          ₹{item.price}
                        </Text>
                        <AntDesign
                          name={'right'}
                          size={18}
                          style={{marginTop: 3}}
                          color="#000"
                        />
                      </View>
                    )}
                  </View>
                  <View style={homeStyles.totalvideoview}>
                    <Text style={homeStyles.totalvideos}>
                      {/* {item.videolength} */}
                      Full Content /All Tools
                    </Text>
                    {/* <Text style={homeStyles.languagePaid}>
                      <Text style={{fontWeight: '600'}}>Language : </Text>
                      {item.language}
                    </Text> */}
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
