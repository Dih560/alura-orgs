import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import star from '../assets/estrela.png';
import starGray from '../assets/estrelaCinza.png';

export default function Star({onPress, disabled, checked, big}) {
  const styles = getStyles(big);

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image
        style={styles.star}
        source={checked ? star : starGray}
        alt="Star"
      />
    </TouchableOpacity>
  );
}

const getStyles = isBig =>
  StyleSheet.create({
    star: {
      marginRight: 2,
      width: isBig ? 36 : 12,
      height: isBig ? 36 : 12,
    },
  });
