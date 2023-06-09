import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../../../components/Text';

export default function ItemList({item}) {
  return (
    <View style={styles.item} flex={1}>
      <Image style={styles.itemImage} source={item.image} />
      <Text style={styles.itemName}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    marginHorizontal: 16,
  },
  itemImage: {
    width: 46,
    height: 46,
  },
  itemName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    color: '#464646',
  },
});
