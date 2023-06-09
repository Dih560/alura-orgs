import React, {useEffect} from 'react';
import {
  BackHandler,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import VoltarSVG from '../../assets/voltar.svg';
import success from '../../assets/sucesso.png';
import useTexts from '../../hooks/useText';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Resume() {
  const {
    messagePurchase,
    headerPurchase,
    titlePurchase,
    buttonHomePurchase,
    buttonProducerPurchase,
  } = useTexts();
  const route = useRoute();
  const navigation = useNavigation();
  const purchaseName = route.params?.purchase.name;
  const producer = route.params?.producer;

  const handleHome = () => navigation.navigate('Home');
  const handleProducer = () => navigation.navigate('Producer', producer);

  const handleHardwareBack = e => {
    handleProducer();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleHardwareBack);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', handleHardwareBack);
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBack} onPress={handleProducer}>
          <VoltarSVG />
        </TouchableOpacity>

        <Text style={styles.headerText}>{headerPurchase}</Text>
      </View>

      <ScrollView style={styles.content}>
        <Image source={success} style={styles.success} />

        <View style={styles.texts}>
          <Text style={styles.title}>{titlePurchase}</Text>
          <Text style={styles.message}>
            {messagePurchase?.replace('$NAME', purchaseName)}
          </Text>

          <Button title={buttonHomePurchase} onPress={handleHome} />
          <Button
            onPress={handleProducer}
            title={buttonProducerPurchase}
            style={styles.buttonProducer}
            titleStyle={styles.buttonProducerText}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: 58,

    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    paddingHorizontal: 40,
  },
  headerText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: StatusBar.currentHeight || 16,
  },
  headerBack: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
    top: StatusBar.currentHeight || 17,
  },
  content: {
    zIndex: 0,
  },
  success: {
    width: '100%',
    height: undefined,
    aspectRatio: 360 / 351,
  },
  texts: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  message: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  buttonProducer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ECECEC',
    marginBottom: 16,
  },
  buttonProducerText: {
    color: '#464646',
  },
});
