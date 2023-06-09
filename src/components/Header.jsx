import React from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Text from '~/components/Text';

import Gradient from '~/assets/gradiente.svg';
import topo from '~/assets/topo.png';
import BackSVG from '~/assets/voltar.svg';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');

export default function Header({title, image, height}) {
  const navigation = useNavigation();
  const styles = getStyles(height);

  const handleGoBack = () => navigation.goBack();

  return (
    <>
      <Image source={image} style={styles.topo} />
      <Gradient
        width={width}
        height={(130 / 360) * width}
        style={styles.gradient}
      />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <BackSVG color="white" style={styles.back} />
      </TouchableOpacity>
    </>
  );
}

Header.defaultProps = {
  image: topo,
  height: 270,
};

const getStyles = height =>
  StyleSheet.create({
    topo: {
      width: '100%',
      height,
    },
    gradient: {
      position: 'absolute',
    },
    title: {
      fontWeight: 'bold',
      position: 'absolute',
      alignSelf: 'center',
      color: 'white',
      fontSize: 16,
      lineHeight: 26,
      padding: 16,
      paddingTop: StatusBar.currentHeight || 0,
    },
    backButton: {
      position: 'absolute',
      padding: 17,
      paddingTop: StatusBar.currentHeight || 0,
    },
    back: {
      width: 24,
      height: 24,
    },
  });
