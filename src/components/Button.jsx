import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';

export default function Button({title, style, titleStyle, onPress}) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={{...styles.buttonText, ...titleStyle}}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
  },
});
