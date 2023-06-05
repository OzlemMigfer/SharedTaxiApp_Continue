import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import styles from './PassengerInfo.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Star = ({filled, onPress}) => (
  <TouchableOpacity style={styles.stars} onPress={onPress}>
    <Icon
      name={filled ? 'star' : 'star-o'}
      color={filled ? 'gold' : 'gray'}
      size={32}
    />
  </TouchableOpacity>
);

const PassengerInfo = () => {
  //for rating
  const [rating, setRating] = useState(0);

  const stars = [1, 2, 3, 4, 5].map(i => (
    <Star key={i} filled={i <= rating} onPress={() => setRating(i)} />
  ));

  const handleRating = () => {
    Alert.alert('Değerlendirme başarılı!');
  };

  return (
    <View style={styles.container}>

      <View style={styles.body_container}>       
        <View style={styles.info_container}>
          <Text style={styles.name_text}>Özlem Miğfer</Text>
          <Text style={styles.number_text}>+90 541 881 99 80</Text>
        </View>

        <View style={styles.point_container}>
          <Text style={styles.ratingText}>+{rating}</Text>
          <Icon name="star" color="gold" size={32} />
        </View>
      </View>

      <View style={styles.footer_container}>
        <Text style={styles.title}>Değerlendir</Text>
        <View style={styles.starsContainer}>{stars}</View>

        <TouchableOpacity style={styles.button} onPress={handleRating}>
          <Text style={styles.button_text}>Puanla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PassengerInfo;
