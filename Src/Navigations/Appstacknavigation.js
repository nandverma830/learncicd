// In App.js in a new project

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Appscreens/Home';
import Appnavigation from '../Navigations/Appnavigation';
import coursedeatils from '../Appscreens/Coursedeatils';
import Profile from '../Appscreens/Profile';
import Notification from '../Appscreens/Notification';
import Videoscreen from '../Appscreens/Videoscreen';
import TopTabNavigation from '../Appscreens/TopTabNavigation';
import Review from '../Appscreens/Review';
import About from '../Appscreens/Morescreens/About';
import Termsandconditions from '../Appscreens/Morescreens/Termsandconditions';
import HelpScreen from '../Appscreens/Morescreens/HelpScreen';
import Privacypolicy from '../Appscreens/Morescreens/Privacypolicy';
import Signup1 from '../Appscreens/Morescreens/Signup';
import Signup from '../Authentication/Signup';
import Tools from '../Appscreens/Tools';
import WishList from '../Appscreens/WishList';
import VerifyScreen from '../Authentication/VerifyScreen';
import OtpScreen from '../Authentication/OtpScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  const [UserLogin, setUserLogin] = useState(true);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* {UserLogin ? (
        <> */}
          <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
          <Stack.Screen name="SignupScreen" component={Signup} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
        {/* </>
      ) : (
        <> */}
          <Stack.Screen name="Homepage" component={Appnavigation} />
          <Stack.Screen name="Coursedeatils" component={coursedeatils} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Videoscreen" component={Videoscreen} />
          <Stack.Screen name="TopTabNavigation" component={TopTabNavigation} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Signup" component={Signup1} />
          <Stack.Screen
            name="Termsandconditions"
            component={Termsandconditions}
          />
          <Stack.Screen name="HelpScreen" component={HelpScreen} />
          <Stack.Screen name="Privacypolicy" component={Privacypolicy} />
          <Stack.Screen name="Review" component={Review} />
          <Stack.Screen name="Tools" component={Tools} />
          <Stack.Screen name="WishList" component={WishList} />
        {/* </>
      )} */}
    </Stack.Navigator>
  );
};
export default App;
