import {View, Text,ScrollView} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import fonts from '../../Components/fonts';


const Privacy = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header
        // Righticon={'heart'}
        // ScreenName={'Nextscr'}
        navigation={navigation}
        Tittle="PRIVACY POLICY"
      />
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <Text
          style={{color: '#000', fontWeight: '300', fontSize: 16, margin: 8,fontFamily: fonts.pop_Regular}}>
          Privacy Policy of the oLkaro learning app This Application collects
          some Personal Data from its Users. Data Controller and Owner oLkaro
          Pvt Ltd Owner contact email: olkaro1313@gmail.com Types of Data
          collected Among the types of Personal Data that this Application
          collects, by itself or through third parties, there are: Cookies and
          Usage Data. Other Personal Data collected may be described in other
          sections of this privacy policy or by dedicated explanation text
          contextually with the Data collection. The Personal Data may be freely
          provided by the User, or collected automatically when using this
          Application. Any use of Cookies - or of other tracking tools - by this
          Application or by the owners of third party services used by this
          Application, unless stated otherwise, serves to identify Users and
          remember their preferences, for the sole purpose of providing the
          service required by the User. Failure to provide certain Personal Data
          may make it impossible for this Application to provide its services.
          Users are responsible for any Personal Data of third parties obtained,
          published or shared through this Application and confirm that they
          have the third party's consent to provide the Data to the Owner. Mode
          and place of processing the Data Methods of processing The Data
          Controller processes the Data of Users in a proper manner and shall
          take appropriate security measures to prevent unauthorized access,
          disclosure, modification, or unauthorized destruction of the Data. The
          Data processing is carried out using computers and/or IT enabled
          tools, following organizational procedures and modes strictly related
          to the purposes indicated. In addition to the Data Controller, in some
          cases, the Data may be accessible to certain types of persons in
          charge, involved with the operation of the site (administration,
          sales, marketing, legal, system administration) or external parties
          (such as third party technical service providers, mail carriers,
          hosting providers, IT companies, communications agencies) appointed,
          if necessary, as Data Processors by the Owner. The updated list of
          these parties may be requested from the Data Controller at any time.
          Place The Data is processed at the Data Controller's operating offices
          and in any other places where the parties involved with the processing
          are located. For further information, please contact the Data
          Controller. Retention time The Data is kept for the time necessary to
          provide the service requested by the User, or stated by the purposes
          outlined in this document, and the User can always request that the
          Data Controller suspend or remove the data. The use of the collected
          Data The Data concerning the User is collected to allow the Owner to
          provide its services, as well as for the following purposes: Access to
          third party accounts and Analytics. The Personal Data used for each
          purpose is outlined in the specific sections of this document.
          learning permissions asked by this Application This Application may
          ask for some learning permissions allowing it to perform actions with
          the User's learning account and to retrieve information, including
          Personal Data, from it. For more information about the following
          permissions, refer to the learning permissions documentation and to
          the learning privacy policy. The permissions asked are the following:
          Basic information By default, this includes certain User’s Data such
          as id, name, picture, gender, and their locale. Certain connections of
          the User, such as the Friends, are also available. If the User has
          made more of their Data public, more information will be available.
          Detailed information on the processing of Personal Data Personal Data
          is collected for the following purposes and using the following
          services: This type of service allows this Application to access Data
          from your account on a third party service and perform actions with
          it. These services are not activated automatically, but require
          explicit authorization by the User. learning account access (This
          Application) This service allows this Application to connect with the
          User's account on the learning social network, provided by learning,
          Inc. Permissions asked: Place of processing: US – Privacy Policy The
          services contained in this section enable the Owner to monitor and
          analyze web traffic and can be used to keep track of User behavior.
          Google Analytics (Google Inc.) Google Analytics is a web analysis
          service provided by Google Inc. (“Google”). Google utilizes the Data
          collected to track and examine the use of this Application, to prepare
          reports on its activities and share them with other Google services.
          Google may use the Data collected to contextualize and personalize the
          ads of its own advertising network. Personal Data collected: Cookies
          and Usage Data. Place of processing: US – Privacy Policy – Opt Out
          Additional information about Data collection and processing Legal
          action The User's Personal Data may be used for legal purposes by the
          Data Controller, in Court or in the stages leading to possible legal
          action arising from improper use of this Application or the related
          services. The User declares to be aware that the Data Controller may
          be required to reveal personal data upon request of public
          authorities. Additional information about User's Personal Data In
          addition to the information contained in this privacy policy, this
          Application may provide the User with additional and contextual
          information concerning particular services or the collection and
          processing of Personal Data upon request. System logs and maintenance
          For operation and maintenance purposes, this Application and any third
          party services may collect files that record interaction with this
          Application (System logs) or use for this purpose other Personal Data
          (such as IP Address). Information not contained in this policy More
          details concerning the collection or processing of Personal Data may
          be requested from the Data Controller at any time. Please see the
          contact information at the beginning of this document. The rights of
          Users Users have the right, at any time, to know whether their
          Personal Data has been stored and can consult the Data Controller to
          learn about their contents and origin, to verify their accuracy or to
          ask for them to be supplemented, cancelled, updated or corrected, or
          for their transformation into anonymous format or to block any data
          held in violation of the law, as well as to oppose their treatment for
          any and all legitimate reasons. Requests should be sent to the Data
          Controller at the contact information set out above. This Application
          does not support “Do Not Track” requests. To determine whether any of
          the third party services it uses honor the “Do Not Track” requests,
          please read their privacy policies. Changes to this privacy policy The
          Data Controller reserves the right to make changes to this privacy
          policy at any time by giving notice to its Users on this page. It is
          strongly recommended to check this page often, referring to the date
          of the last modification listed at the bottom. If a User objects to
          any of the changes to the Policy, the User must cease using this
          Application and can request that the Data Controller remove the
          Personal Data. Unless stated otherwise, the then-current privacy
          policy applies to all Personal Data the Data Controller has about
          Users. If you do any freelance work by taking credit of our course,
          then we will have no problem in this. We will not be responsible.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Privacy;
