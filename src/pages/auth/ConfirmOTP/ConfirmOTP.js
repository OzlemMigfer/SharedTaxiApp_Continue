import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './ConfirmOTP.styles';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


const ConfirmOTP = ({phoneNumber}) => {
  const [verificationCode, setVerificationCode] = useState('');
  const navigation = useNavigation();
  
  const handleVerification = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      await confirmation.confirm(verificationCode);
      // Doğrulama işlemi başarılıysa, kullanıcıyı uygulamanın ana sayfasına yönlendir
      navigation.navigate('EMailPage');
    } catch (error) {
      // Doğrulama işlemi başarısızsa, kullanıcıya hata mesajı göster
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Text style={styles.header}>Telefonunuza Gelen Kodu Giriniz</Text>
        <TextInput
          style={styles.input}
          value={verificationCode}
          placeholder="Doğrulama Kodu"
          placeholderTextColor="gray"
          onChangeText={setVerificationCode}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.button} onPress={handleVerification}>
          <Text style={styles.button_text}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmOTP;
