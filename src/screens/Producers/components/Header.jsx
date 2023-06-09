import React from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import Text from '../../../components/Text';

import logo from '../../../assets/logo.png';
import useTexts from '../../../hooks/useText';

export default function Header({bestProducers}) {
  const {saludation, nameSaludation, legend, legendBestProducers} = useTexts();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} alt="Orgs logo" />
      {!bestProducers && (
        <Text style={styles.title}>
          {saludation} {nameSaludation}
        </Text>
      )}
      <Text style={[styles.subtitle, bestProducers ? styles.subtitleBest : {}]}>
        {bestProducers ? legendBestProducers : legend}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    padding: 16,
    paddingTop: (StatusBar.currentHeight || 0) + 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  title: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
  subtitleBest: {
    marginTop: 24,
  },
});
