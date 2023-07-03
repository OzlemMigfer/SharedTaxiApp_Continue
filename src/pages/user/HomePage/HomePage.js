import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './HomePage.styles';
import {Dropdown} from 'react-native-element-dropdown';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
// import axios from 'axios';


const cityData = [
  {key: '1', value: 'Adana'},
  {key: '2', value: 'Adıyaman'},
  {key: '3', value: 'Afyonkarahisar'},
  {key: '4', value: 'Ağrı'},
  {key: '5', value: 'Amasya'},
  {key: '6', value: 'Ankara'},
  {key: '7', value: 'Antalya'},
  {key: '8', value: 'Artvin'},
  {key: '9', value: 'Aydın'},
  {key: '10', value: 'Balıkesir'},
  {key: '11', value: 'Bilecik'},
  {key: '12', value: 'Bingöl'},
  {key: '13', value: 'Bitlis'},
  {key: '14', value: 'Bolu'},
  {key: '15', value: 'Burdur'},
  {key: '16', value: 'Bursa'},
  {key: '17', value: 'Çanakkale'},
  {key: '18', value: 'Çankırı'},
  {key: '19', value: 'Çorum'},
  {key: '20', value: 'Denizli'},
  {key: '21', value: 'Diyarbakır'},
  {key: '22', value: 'Edirne'},
  {key: '23', value: 'Elazığ'},
  {key: '24', value: 'Erzincan'},
  {key: '25', value: 'Erzurum'},
  {key: '26', value: 'Eskişehir'},
  {key: '27', value: 'Gaziantep'},
  {key: '28', value: 'Giresun'},
  {key: '29', value: 'Gümüşhane'},
  {key: '30', value: 'Hakkari'},
  {key: '31', value: 'Hatay'},
  {key: '32', value: 'Isparta'},
  {key: '33', value: 'Mersin'},
  {key: '34', value: 'İstanbul'},
  {key: '35', value: 'İzmir'},
  {key: '36', value: 'Kars'},
  {key: '37', value: 'Kastamonu'},
  {key: '38', value: 'Kayseri'},
  {key: '39', value: 'Kırklareli'},
  {key: '40', value: 'Kırşehir'},
  {key: '41', value: 'Kocaeli'},
  {key: '42', value: 'Konya'},
  {key: '43', value: 'Kütahya'},
  {key: '44', value: 'Malatya'},
  {key: '45', value: 'Manisa'},
  {key: '46', value: 'Kahramanmaraş'},
  {key: '47', value: 'Mardin'},
  {key: '48', value: 'Muğla'},
  {key: '49', value: 'Muş'},
  {key: '50', value: 'Nevşehir'},
  {key: '51', value: 'Niğde'},
  {key: '52', value: 'Ordu'},
  {key: '53', value: 'Rize'},
  {key: '54', value: 'Sakarya'},
  {key: '55', value: 'Samsun'},
  {key: '56', value: 'Siirt'},
  {key: '57', value: 'Sinop'},
  {key: '58', value: 'Sivas'},
  {key: '59', value: 'Tekirdağ'},
  {key: '60', value: 'Tokat'},
  {key: '61', value: 'Trabzon'},
  {key: '62', value: 'Tunceli'},
  {key: '63', value: 'Şanlıurfa'},
  {key: '64', value: 'Uşak'},
  {key: '65', value: 'Van'},
  {key: '66', value: 'Yozgat'},
  {key: '67', value: 'Zonguldak'},
  {key: '68', value: 'Aksaray'},
  {key: '69', value: 'Bayburt'},
  {key: '70', value: 'Karaman'},
  {key: '71', value: 'Kırıkkale'},
  {key: '72', value: 'Batman'},
  {key: '73', value: 'Şırnak'},
  {key: '74', value: 'Bartın'},
  {key: '75', value: 'Ardahan'},
  {key: '76', value: 'Iğdır'},
  {key: '77', value: 'Yalova'},
  {key: '78', value: 'Karabük'},
  {key: '79', value: 'Kilis'},
  {key: '80', value: 'Osmaniye'},
  {key: '81', value: 'Düzce'},
];

const townData = [
  {key: '1', value: 'Merkez'},
  {key: '2', value: 'Ağın'},
  {key: '3', value: 'Alacakaya'},
  {key: '4', value: 'Arıcak'},
  {key: '5', value: 'Baskil'},
  {key: '6', value: 'Karakoçan'},
  {key: '7', value: 'Keban'},
  {key: '8', value: 'Kovancılar'},
  {key: '9', value: 'Maden'},
  {key: '10', value: 'Palu'},
  {key: '11', value: 'Sivrice'},
]

const quarterData = [
  {key: '1', value: 'Üniversite Mah.'},
  {key: '2', value: 'Beşyol Mah.'},
  {key: '3', value: 'Kırklar Mah.'},
  {key: '4', value: 'Kızılay Mah.'},
  {key: '5', value: 'Aydınlar Mah.'},
  {key: '6', value: 'Yeni Mah.'},
  {key: '7', value: 'Hürriyet Mah.'},
  {key: '8', value: 'Harput Mah.'},
  {key: '9', value: 'Şehitlik Mah.'},
  {key: '10', value: 'Yıldızbağları Mah.'}
]

const HomePage = () => {
  const [keyCity, setKeyCity] = useState('');
  const [keyTown, setKeyTown] = useState('');
  const [keyQuarter, setKeyQuarter] = useState('');

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTown, setSelectedTown] = useState('');
  const [selectedQuarter, setSelectedQuarter] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    // Etkinleştirilmiş state güncellemesi veya diğer işlemler burada gerçekleştirilebilir
  }, [selectedCity, selectedTown, selectedQuarter]); // selectedValue bağımlılığını ekleyin

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../components/assets/background-homepage-2.png')} />
      <Text style={styles.header}>HOŞGELDİNİZ</Text>
      <View style={styles.body_container}>
        <Text style={styles.start_text}>Kalkış Noktası</Text>
        <Dropdown 
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          searchPlaceholder="Ara..."
          valueField="key"
          labelField="value"
          placeholder="Şehir Seçiniz"
          renderItem={renderItem}
          value={keyCity}
          data={cityData}
          onChange={item => {setSelectedCity(item.value)}}
          search
        />
        <Dropdown 
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          searchPlaceholder="Ara..."
          valueField="key"
          labelField="value"
          placeholder="İlçe Seçiniz"
          renderItem={renderItem}
          value={keyTown}
          data={townData}
          onChange={item => {setSelectedTown(item.value)}}
          search
        />
        <Dropdown 
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          searchPlaceholder="Ara..."
          valueField="key"
          labelField="value"
          placeholder="Mahalle Seçiniz"
          renderItem={renderItem}
          value={keyQuarter}
          data={quarterData}
          onChange={item => {setSelectedQuarter(item.value)}}
          search
        />
      </View>

      <View style={styles.body_container}>
        <Text style={styles.start_text}>Varış Noktası</Text>
        <Dropdown 
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          searchPlaceholder="Ara..."
          valueField="key"
          labelField="value"
          placeholder="Şehir Seçiniz"
          renderItem={renderItem}
          value={keyCity}
          data={cityData}
          onChange={item => {setSelectedCity(item.value)}}
          search
        />
        <Dropdown 
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          searchPlaceholder="Ara..."
          valueField="key"
          labelField="value"
          placeholder="İlçe Seçiniz"
          renderItem={renderItem}
          value={keyTown}
          data={townData}
          onChange={item => {setSelectedTown(item.value)}}
          search
        />
        <Dropdown 
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          searchPlaceholder="Ara..."
          valueField="key"
          labelField="value"
          placeholder="Mahalle Seçiniz"
          renderItem={renderItem}
          value={keyQuarter}
          data={quarterData}
          onChange={item => {setSelectedQuarter(item.value)}}
          search
        />
      </View>

      <View style={styles.footer_container}>
        <TouchableOpacity style={styles.button_next} onPress={() => navigation.navigate('PassengerPage')} >
          <Text style={styles.button_next_text}>İleri</Text>
        </TouchableOpacity>
        <View style={styles.triangle}></View>
      </View>
    </View>
  );
};

export default HomePage;
