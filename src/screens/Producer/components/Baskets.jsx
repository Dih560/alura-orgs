import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Text from '../../../components/Text';

export default function Basket({details, items, producer}) {
  const navigation = useNavigation();
  const {name, image, description, price} = details;

  const handleBasket = () =>
    navigation.navigate('Basket', {
      details,
      items,
      producer,
    });

  return (
    <TouchableOpacity style={estilos.basket} onPress={handleBasket}>
      <View style={estilos.container}>
        <Image source={image} style={estilos.image} />

        <View style={estilos.texts}>
          <Text style={estilos.name}>{name}</Text>
          <Text style={estilos.description}>{description}</Text>
          <Text style={estilos.price}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  basket: {
    paddingHorizontal: 16,
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 6,
  },
  texts: {
    flex: 1,
    marginLeft: 8,
  },
  name: {
    color: '#464646',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  description: {
    color: '#A3A3A3',
    fontSize: 14,
    lineHeight: 22,
  },
  price: {
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
