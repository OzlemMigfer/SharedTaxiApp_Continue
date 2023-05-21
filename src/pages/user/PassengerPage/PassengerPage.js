import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './PassengerPage.styles';
import { useNavigation } from '@react-navigation/native';

const PassengerPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Text style={styles.header_text}>İşte Eşleşen Yolcular!</Text>
      </View>

      <View style={styles.footer_container}>
        <TouchableOpacity style={styles.passenger_button} onPress={() => navigation.navigate('PassengerInfo')}>
          <Text style={styles.passenger_text}>Özlem Miğfer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.phone_button}>
            <Image style={styles.phone_logo} source={require('../../../components/assets/phone_icon_yellow.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.footer_container}>
        <TouchableOpacity style={styles.passenger_button} onPress={() => navigation.navigate('PassengerInfo')}>
          <Text style={styles.passenger_text}>Zeynep Üzmez</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.phone_button}>
            <Image style={styles.phone_logo} source={require('../../../components/assets/phone_icon_yellow.png')}/>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer_container}>
        <TouchableOpacity style={styles.passenger_button} onPress={() => navigation.navigate('PassengerInfo')}>
          <Text style={styles.passenger_text}>Kadir Bülbül</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.phone_button}>
            <Image style={styles.phone_logo} source={require('../../../components/assets/phone_icon_yellow.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PassengerPage;