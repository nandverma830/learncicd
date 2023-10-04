import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import fonts from '../../Components/fonts';


const About = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header
        // Righticon={'heart'}
        // ScreenName={'Nextscr'}
        navigation={navigation}
        Tittle="ABOUT US"
      />
      <ScrollView style={{margin:10}} showsVerticalScrollIndicator={false}>
        <Text
          style={{color: '#000', fontWeight: '300', fontSize: 16, margin: 8,fontFamily: fonts.pop_Regular}}>
          About oLkaro Learn Anytime, Anywhere In Any Language For Free Our name
          oLkaro is coined from the word Learn in Vernacular Languages - oLkaro
          teaches students in the user's native language. Years of research have
          indicated that students learn the most difficult concepts easily when
          explained in a language they most understand and with images,
          examples, and practical insights. Each of the subjects we teach at
          oLkaro is offered in vernacular languages, have perfect examples and
          lots of practical insights and are taught by experts in their fields
          Video Play Thumbnail How We Do? We Engage With The Best Subject Matter
          Experts For Each Subject And Have Them Create The Best Content In The
          Language That The User Can Understand. Our Video Editing Team Edits
          The Content And Adds Graphics And Animations To The Content So It Even
          Becomes Easier To Understand The Videos. The Content We Provide Is Not
          A Sample But Is The Full Content That A User Might Require The
          Subject. Our Goal Is To Create Content That A User Can View And
          Understand The Subject Without Support From Anyone Else. What Can You
          Learn We Currently Have A Lot Of Courses In The IT Domain And We Are
          Adding New Courses Every Day. If You Want To See A Course That You
          Feel Is Missing Please Let Us Know. Please Email Us At New Courses
          olkaro1313@gmail.Com The Team Over And Above The Passionate Team Of
          Subject Matter Experts We Are A Passionate Group Of Professionals,
          Educators, And Technology Geeks Who Want To Share Knowledge How Can
          You Learn You will enroll yourself with the course of your choice and
          get started at zero charges! Courses are designed with updated
          curriculums which will make the learner industry-ready. You will learn
          from tutors who are experienced professionals themselves. A proper
          study plan will be made to follow that will help you plan your course
          effectively. Moreover, you will be able to assess your knowledge with
          assignments and projects that will be provided at different steps of
          your course. Pursuing our courses will give you a chance to earn the
          Skill India Certificate.
        </Text>
      </ScrollView>
    </View>
  );
};

export default About;
