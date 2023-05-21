import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './FullNamePage.styles';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';


const FullNamePage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userId, setUserId] = useState('');

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

  //save the firstname and lastname
  const saveName = async () => {
    try {
      const response = await firestore().collection('userInfo').doc(userId).set({ firstName, lastName }, {merge: true});
      console.log('İsim ve soyisim başarıyla eklendi: ', response);
      navigation.navigate('HomePage');
    } catch (error) {
      console.error('İsim ve soyisim kaydetme hatası: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Text style={styles.header}>Adınızı ve Soyadınızı Giriniz</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          placeholder="Ad"
          placeholderTextColor="gray"
          onChangeText={setFirstName}
        >
        </TextInput>
        <TextInput
          style={styles.input}
          value={lastName}
          placeholder="Soyad"
          placeholderTextColor="gray"
          onChangeText={setLastName}
        >
        </TextInput>
      </View>

      <View style={styles.footer_container}>
        <TouchableOpacity style={styles.button_next} onPress={saveName}>
          <Text style={styles.button_next_text}>İleri</Text>
        </TouchableOpacity>
        <View style={styles.triangle}></View>
      </View>
    </View>
  );
};

export default FullNamePage;