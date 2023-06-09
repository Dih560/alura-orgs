import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import useTexts from '../../../hooks/useText';
import {useNavigation} from '@react-navigation/native';

export default function Details(props) {
  const navigation = useNavigation();
  const {name, producer, description, price} = props;
  const {buttonBuy} = useTexts();

  const handleBuy = () =>
    navigation.navigate('Resume', {
      purchase: {name, timestamp: +new Date()},
      producer,
    });

  return (
    <>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.farmContainer}>
        <Image source={producer.image} style={styles.farmLogo} />
        <Text style={styles.farmName}>{producer.name}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>

      <Button title={buttonBuy} onPress={handleBuy} />
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
  },
  farmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  farmLogo: {
    width: 32,
    height: 32,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    fontWeight: 'bold',
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
