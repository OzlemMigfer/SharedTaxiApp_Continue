import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './PassengerPage.styles';
import { useNavigation } from '@react-navigation/native';
import call from 'react-native-phone-call';


const PassengerPage = () => {
  const navigation = useNavigation();

  const makePhoneCall = () => {
    const phoneNumber = '+905346621078';
    const args = {
      number: phoneNumber,
      prompt: true,
    };

    call(args).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Text style={styles.header_text}>İşte Eşleşen Yolcular!</Text>
      </View>

      <View style={styles.footer_container}>
        <TouchableOpacity style={styles.passenger_button} onPress={() => navigation.navigate('PassengerInfo')}>
          <Text style={styles.passenger_text}>Özlem Miğfer</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={makePhoneCall} style={styles.phone_button}>
            <Image style={styles.phone_logo} source={require('../../../components/assets/phone_icon_yellow.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PassengerPage;