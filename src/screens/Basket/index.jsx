import React from 'react';
import Details from './components/Details';
import ItemList from './components/ItemList';
import {FlatList, StyleSheet, View} from 'react-native';
import Text from '~/components/Text';
import useTexts from '~/hooks/useText';
import Header from '~/components/Header';
import {useRoute} from '@react-navigation/native';

export default function Basket() {
  const route = useRoute();
  const {producer, details, items} = route.params;
  const {titleBasket, titleItems} = useTexts();

  const renderHeaderList = () => (
    <>
      <Header title={titleBasket} />
      <View style={styles.container}>
        <Details {...details} producer={producer} />
        <Text style={styles.title}>{titleItems}</Text>
      </View>
    </>
  );

  return (
    <>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({item}) => <ItemList item={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderHeaderList}
      />
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    fontSize: 20,
    lineHeight: 32,
  },
});
