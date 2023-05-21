import React, {useState,useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import ConfirmOTP from '../ConfirmOTP';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import styles from './FirstPage.styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const FirstPage = ({navigation}) => {
  //phone auth
  const [countryCode, setCountryCode] = useState('TR');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationStarted, setVerificationStarted] = useState(false);
  //google-sign-in
  const [userGoogle, setUserGoogle] = useState({});


  //google-sign-in
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '424531437205-bpjca3bdfdv17vkqbqu5n3ashjeojqbv.apps.googleusercontent.com',
    });
  },[]);

  //google-sign-in
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId:
      '424531437205-bpjca3bdfdv17vkqbqu5n3ashjeojqbv.apps.googleusercontent.com',
    offlineAccess: true,
    hostedDomain: '',
    forceCodeForRefreshToken: true,
    accountName: '',
    iosClientId: '<FROM DEVELOPER CONSOLE>',
    googleServicePlistPath: '',
    openIdRealm: '',
    profileImageSize: 120,
  });

  //google-sign-in
  const googleSignIn = async() => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    navigation.navigate('UserInfo');
    return auth().signInWithCredential(googleCredential);
  }

  //phone auth
  const handlePhoneAuth = () => {
    setVerificationStarted(true);
  };

  //phone auth
  if (verificationStarted) {
    const fullPhoneNumber = `+90${phoneNumber}`;
    return <ConfirmOTP phoneNumber={fullPhoneNumber} />;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image_logo}
        source={require('../../../components/assets/logo1.png')}
      />
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
          value={phoneNumber}
          placeholder="Telefon Numarası"
          placeholderTextColor="gray"
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity
        style={styles.button_phone}
        title="Devam"
        onPress={handlePhoneAuth}>
        <Text style={styles.button_continue}>Devam</Text>
      </TouchableOpacity>

      {/* line */}
      <KeyboardAvoidingView
        style={styles.container_line}
        behavior="padding"
        keyboardVerticalOffset={100}>
        <View style={styles.line_view}>
          <View style={styles.line}></View>
          <View style={styles.text_container_line}>
            <Text style={styles.text_line}>veya</Text>
          </View>
        </View>
      </KeyboardAvoidingView>

      {/* google */}
      <View style={styles.footer_container}>
        <TouchableOpacity 
          style={styles.google_button}
          onPress={() => 
            googleSignIn()
              .then(res => {
                console.log(res.user);
                setUserGoogle(res.user);
              })
              .catch(error => console.log(error))
          }
        >
          <Image style={styles.google_image} source={require('../../../components/assets/google.png')} />
          <Text style={styles.google_text}>Google ile Devam Et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FirstPage;
