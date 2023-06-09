import React from 'react';
import Header from '../../components/Header';
import useTexts from '../../hooks/useText';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Basket from './components/Baskets';
import Text from '../../components/Text';

import topo from '../../assets/produtores/topo.png';

export default function Producer() {
  const route = useRoute();
  const {name, baskets, image} = route.params;
  const {titleProducer, titleBaskets} = useTexts();

  const renderHeaderList = () => (
    <>
      <Header title={titleProducer} image={topo} height={150} />
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.producerImage}
            source={image}
            alt="Producer logo"
          />
          <Text style={styles.producer}>{name}</Text>
        </View>

        <Text style={styles.baskets}>{titleBaskets}</Text>
      </View>
    </>
  );

  return (
    <FlatList
      style={styles.list}
      data={baskets}
      keyExtractor={(_, index) => index}
      renderItem={({item}) => (
        <Basket {...item} producer={{name, image, baskets}} />
      )}
      ListHeaderComponent={renderHeaderList}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
  },
  container: {
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
  },
  producerImage: {
    width: 62,
    height: 62,

    marginTop: -23,

    borderRadius: 6,
  },
  producer: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  baskets: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
});
