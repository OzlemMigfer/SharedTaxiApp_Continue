import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './UserInfo.styles';
import {useNavigation} from '@react-navigation/native';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const UserInfo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userId, setUserId] = useState('');
  //phone auth
  const [countryCode, setCountryCode] = useState('TR');
  const [phoneNo, setPhoneNo] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({});
    };

    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });

    return unsubscribe;
  }, []);

  //save the user informations
  const saveName = async () => {
    try {
      const fullPhoneNumber = `+90${phoneNo}`;
      const response = await firestore().collection('userInfo').doc(userId).set({ firstName, lastName, fullPhoneNumber }, {merge: true});
      console.log('Bilgiler başarıyla eklendi: ', response);
      navigation.navigate('HomePage');
    } catch (error) {
      console.error('bilgileri kaydetme hatası: ', error);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Text style={styles.header}>Bilgilerinizi Giriniz</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          placeholder="Ad"
          placeholderTextColor="gray"
          onChangeText={setFirstName}
        ></TextInput>

        <TextInput
          style={styles.input}
          value={lastName}
          placeholder="Soyad"
          placeholderTextColor="gray"
          onChangeText={setLastName}
        ></TextInput>

        <View style={styles.phone_container}>
          <View style={styles.country_input}>
            <View style={styles.country_picker__container}>
              <CountryPicker
                theme={DARK_THEME}
                countryCode={countryCode}
                withFilter="false"
                withFlag
                withCallingCode={true}
                onSelect={country => setCountryCode(country.cca2)}
                defaultCode="+90"
              />
              <Text style={styles.country_code_text}>{countryCode}</Text>
            </View>

            <TextInput
              style={styles.phone_input}
              value={phoneNo}
              placeholder="Telefon Numarası"
              placeholderTextColor="gray"
              onChangeText={text => setPhoneNo(text)}
              keyboardType="phone-pad"
            />
          </View>
        </View>
      </View>

      <View style={styles.footer_container}>
        <TouchableOpacity 
          style={styles.button_next} 
          onPress={() => {
            saveName();
          }}
        >
          <Text style={styles.button_next_text}>İleri</Text>
        </TouchableOpacity>
        <View style={styles.triangle}></View>
      </View>
    </View>
  );
};

export default UserInfo;