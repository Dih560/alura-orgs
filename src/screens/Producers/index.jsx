import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import {FlatList, StyleSheet} from 'react-native';
import Producer from './components/Producer';
import Text from '../../components/Text';
import useTexts from '../../hooks/useText';
import useProducers from '../../hooks/useProducers';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Producers({bestProducers}) {
  const navigation = useNavigation();
  const route = useRoute();
  const [showPurchaseMessage, setShowPurchaseMessage] = useState(false);

  const purchaseName = route.params?.purchase.name;
  const timestamp = route.params?.purchase.timestamp;
  const {titleProducers, messagePurchase} = useTexts();
  const list = useProducers(bestProducers);

  const renderHeaderList = () => (
    <>
      <Header bestProducers={bestProducers} />
      {showPurchaseMessage && (
        <Text style={styles.messagePurchase}>
          {messagePurchase?.replace('$NAME', purchaseName)}
        </Text>
      )}
      <Text style={styles.title}>{titleProducers}</Text>
    </>
  );

  const handleProducer = producer => navigation.navigate('Producer', producer);

  useEffect(() => {
    let timeout;
    if (purchaseName) {
      setShowPurchaseMessage(true);
      timeout = setTimeout(() => setShowPurchaseMessage(false), 5000);
    }

    return () => clearTimeout(timeout);
  }, [purchaseName, timestamp]);

  return (
    <>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <Producer producer={item} onPress={() => handleProducer(item)} />
        )}
        ListHeaderComponent={renderHeaderList}
      />
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    color: '#464646',
  },
  messagePurchase: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 14,
    lineHeight: 22,
  },
});
