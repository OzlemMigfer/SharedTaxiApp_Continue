import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image, Button} from 'react-native';
import styles from './PassengerPage.styles';
import { useNavigation } from '@react-navigation/native';
import call from 'react-native-phone-call';
import axios from 'axios';


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

  //test for get data from api
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    axios
      .get('http://127.0.0.1/api/cities')
      .then(response => {
        console.log('Çekilen Veriler:', response);
      })
      .catch(error => {
        console.error('Veriler çekilirken bir hata oluştu:', error);
      });
  }

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

      <Button title='Veri Çek' onPress={fetchData} />
    </View>
  );
};

export default PassengerPage;