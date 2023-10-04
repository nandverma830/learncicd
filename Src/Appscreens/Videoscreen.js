import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  BackHandler,
  Dimensions,
  TouchableNativeFeedback,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import Colors from '../assets/Colors';
import fonts from '../Components/fonts';
import BottomSheet from 'react-native-raw-bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../Components/Header';

const {width, height} = Dimensions.get('window');
Icon.loadFont();
let overlayTimer;
let Timer;

const VideoScreen = ({navigation, route}) => {
  let lastTap = null;
  const {VideoUrl} = route.params;
  const {VideoTitle} = route.params;
  useEffect(() => {
    console.log('VIDEO TITLE ===================>', VideoTitle);
    console.log('VIDEO URL ==============================>', VideoUrl);
  }, []);
  const [Fullscreen, setFullscreen] = useState(false);
  const [paused, setpaused] = useState(false);
  const [currentTime, setcurrentTime] = useState(0);
  const [duration, setduration] = useState(0.1);
  const [overlay, setoverlay] = useState(false);
  const [Comment, setComment] = useState('');
  const [videorate, setvideorate] = useState(1.0);
  const [Index, setIndex] = useState(1);
  const [Index1, setIndex1] = useState(1);
  const playerRef = useRef();
  const [isPreloading, setIsPreloading] = useState(true);

  const Addcomment = async () => {
    alert('thankyou for your valuable feedback');
    setComment('');
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const backAction = () => {
    Orientation.lockToPortrait(1);
    StatusBar.setHidden(false);
    setFullscreen(false);
    Alert.alert('GO BACK', 'Are You Sure You Want To Go Back ?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'NO',
      },
      {text: 'BACK', onPress: () => navigation.goBack()},
    ]);
    return true;
  };
  const FullscreenToggle = () => {
    if (Fullscreen) {
      Orientation.lockToPortrait(1);
      StatusBar.setHidden(false);
      setFullscreen(false);
    } else {
      Orientation.lockToLandscape(1);
      StatusBar.setHidden(true);
      setFullscreen(true);
    }
  };

  const handleDoubleTap = (doubleTapCallback, singleTapCallback) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      clearTimeout(Timer);
      doubleTapCallback();
    } else {
      lastTap = now;
      Timer = setTimeout(() => {
        singleTapCallback();
      }, DOUBLE_PRESS_DELAY);
    }
  };

  const ShowHideOverlay = () => {
    handleDoubleTap(
      () => {},
      () => {
        setoverlay(true);
        if (paused) {
        } else {
          overlayTimer = setTimeout(() => setoverlay(false), 5000);
        }
      },
    );
  };
  const backward = () => {
    playerRef.current.seek(currentTime - 10);
    clearTimeout(overlayTimer);
    overlayTimer = setTimeout(() => setoverlay(false), 3000);
  };
  const forward = () => {
    playerRef.current.seek(currentTime + 10);
    clearTimeout(overlayTimer);
    overlayTimer = setTimeout(() => setoverlay(false), 3000);
  };
  const onslide = slide => {
    playerRef.current.seek(slide * duration);
    clearTimeout(overlayTimer);
    overlayTimer = setTimeout(() => setoverlay(false), 3000);
  };
  const getTime = t => {
    const digit = n => (n < 10 ? `0${n}` : `${n}`);
    const sec = digit(Math.floor(t % 60));
    const min = digit(Math.floor((t / 60) % 60));
    const hr = digit(Math.floor((t / 3600) % 60));
    // return hr + ':' + min + ':' + sec;
    return min + ':' + sec;
  };
  const load = ({duration}) => setduration(duration);
  const progress = ({currentTime}) => setcurrentTime(currentTime);

  const bottomSheetRef = useRef(null);
  const Settings = () => {
    bottomSheetRef.current.open();
    if (paused) {
    } else {
      setpaused(!paused);
    }
  };
  const Speed = ['0.5x', 'Normal', '1.25x', '1.5x', '1.75x', '2x'];
  const Quality = ['144','180', '270', '360', '540', '720', '1080HD'];
  const SpeedF = index => {
    setIndex1(index);
    if (index == 0) {
      setvideorate(0.5);
      bottomSheetRef.current.close();
      setpaused(!paused);
    } else if (index == 1) {
      setvideorate(1.0);
      bottomSheetRef.current.close();
      setpaused(!paused);
    } else if (index == 2) {
      setvideorate(1.25);
      bottomSheetRef.current.close();
      setpaused(!paused);
    } else if (index == 3) {
      setvideorate(1.5);
      bottomSheetRef.current.close();
      setpaused(!paused);
    } else if (index == 4) {
      setvideorate(1.75);
      bottomSheetRef.current.close();
      setpaused(!paused);
    } else if (index == 5) {
      setvideorate(2);
      bottomSheetRef.current.close();
      setpaused(!paused);
    }
  };
  const QualityF = index => {
    setIndex(index);
    bottomSheetRef.current.close();
    setpaused(!paused);
  };
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor={"#000"} /> */}
      {/* <Header
        navigation={navigation}
        // Righticon="heart"
        Tittle="VIDEO SCREEN"
      /> */}
      <View style={Fullscreen ? styles.fullscreenVideo : styles.video}>
        <Video
          source={{
            uri: VideoUrl,
          }}
          style={{...StyleSheet.absoluteFill}}
          ref={playerRef}
          paused={paused}
          repeat={true}
          onLoad={load}
          onProgress={progress}
          resizeMode={'cover'}
          onLoadStart={() => setIsPreloading(true)}
          onReadyForDisplay={() => setIsPreloading(false)}
          isLooping
          rate={videorate}
          selectedVideoTrack={{
            type: 'resolution',
            value:144,
          }}
        />
        <View style={styles.overlay}>
          {isPreloading && (
            <ActivityIndicator
              animating
              color={'#5DA7DB'}
              size="large"
              style={{position: 'absolute', top: 100, left: '45%'}}
            />
          )}
          <BottomSheet
            ref={bottomSheetRef}
            // closeOnDragDown={true}
            height={300}
            customStyles={{
              container: {
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              },
            }}
            openDuration={250}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
              }}>
              <View
                style={{
                  height: '15%',
                  backgroundColor: '#F9F9F9',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                }}>
                <Text style={{color: '#000', fontSize: 16}}>Settings</Text>
                <Entypo
                  onPress={() => {
                    setpaused(!paused), bottomSheetRef.current.close();
                  }}
                  name="minus"
                  size={28}
                  color="#000"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.5, backgroundColor: '#fff'}}>
                  <Text style={styles.QualityText}>Quality</Text>
                  {Quality.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => QualityF(index)}
                        key={index}>
                        <Text
                          style={[
                            styles.Quality,
                            {
                              color: index == Index ? '#5DA7DB' : '#000',
                              fontWeight: index == Index ? '900' : '400',
                              fontSize: index == Index ? 16 : 14,
                            },
                          ]}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <View style={{flex: 0.5, backgroundColor: '#fff'}}>
                  <Text style={styles.SpeedText}>Speed</Text>
                  {Speed.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => SpeedF(index)}
                        key={index}>
                        <Text
                          style={[
                            styles.Quality,
                            {
                              color: index == Index1 ? '#5DA7DB' : '#000',
                              fontWeight: index == Index1 ? '900' : '400',
                              fontSize: index == Index1 ? 16 : 14,
                            },
                          ]}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>
          </BottomSheet>
          {overlay ? (
            <View
              style={{
                ...styles.overlaySet,
                backgroundColor: '#0006',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
                <Icon
                  name="arrow-back"
                  size={30}
                  onPress={() => backAction()}
                  style={{position: 'absolute', top: 10, left: 18}}
                  color="#fff"
                />
              <Entypo
                name="dots-three-vertical"
                size={20}
                onPress={() => Settings()}
                style={{position: 'absolute', top: 15, right: 16}}
                color="#fff"
              />
              <View style={{width: 50, height: 50}}>
                <MaterialCommunityIcons
                  name="rewind-10"
                  style={styles.icon}
                  onPress={backward}
                />
              </View>
              <View style={{width: 50, height: 50}}>
                <Ionicons
                  name={paused ? 'play' : 'pause-sharp'}
                  style={styles.icon}
                  onPress={() => setpaused(!paused)}
                />
              </View>
              <View style={{width: 50, height: 50}}>
                <MaterialCommunityIcons
                  name="fast-forward-10"
                  style={styles.icon}
                  onPress={forward}
                />
              </View>
              <View style={styles.sliderCont}>
                <View style={{...styles.timer, alignItems: 'center'}}>
                  <View style={{flexDirection: 'row', marginHorizontal: 10}}>
                    <Text style={{color: 'white'}}>
                      {getTime(currentTime)}/
                    </Text>
                    <Text style={{color: 'white'}}>{getTime(duration)}</Text>
                  </View>
                  <View style={{margin: 5}}>
                    <Icon
                      onPress={FullscreenToggle}
                      name={Fullscreen ? 'fullscreen' : 'fullscreen-exit'}
                      style={{fontSize: 26, color: 'white'}}
                    />
                  </View>
                </View>
                <Slider
                  style={{marginBottom: 10}}
                  maximumTrackTintColor="white"
                  minimumTrackTintColor="white"
                  thumbTintColor="white"
                  value={currentTime / duration}
                  onValueChange={onslide}
                />
              </View>
            </View>
          ) : (
            <View style={styles.overlaySet}>
              <TouchableNativeFeedback onPress={ShowHideOverlay}>
                <View style={{flex: 1}} />
              </TouchableNativeFeedback>
            </View>
          )}
        </View>
      </View>

      {!Fullscreen && (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <StatusBar backgroundColor={Colors.blackColor} />
          <Text style={styles.Videotitle}>{VideoTitle}</Text>
          <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
            <View style={styles.Comments}>
              <Image
                source={require('../assets/Images/beardman.png')}
                style={{width: 30, height: 30, margin: 10}}
              />
              <ScrollView>
                <TextInput
                  multiline
                  placeholder="Add A Comment.... "
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
                  color={Colors.baseColor}
                  style={{margin: 15}}
                />
              ) : null}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {width, height: width * 0.6, backgroundColor: 'black'},
  fullscreenVideo: {
    backgroundColor: 'black',
    ...StyleSheet.absoluteFill,
    elevation: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  overlaySet: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 34,
  },
  sliderCont: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  timer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
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
  Videotitle: {
    color: '#000',
    fontWeight: '600',
    fontSize: 17,
    padding: 5,
    borderBottomWidth: 0.6,
    borderBottomColor: '#ccc',
    fontFamily: fonts.pop_Regular,
    paddingHorizontal: 10,
  },
  Quality: {
    color: '#000',
    textAlign: 'center',
    marginTop: '5%',
  },
  QualityText: {
    color: '#000',
    fontSize: 16,
    marginTop: '7%',
    fontWeight: '700',
    textAlign: 'center',
  },
  SpeedText: {
    color: '#000',
    fontSize: 16,
    marginTop: '7%',
    fontWeight: '700',
    textAlign: 'center',
  },
});
export default VideoScreen;
