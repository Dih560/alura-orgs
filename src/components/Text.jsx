import React from 'react';
import {Text as NativeText, StyleSheet} from 'react-native';

export default function Text({style, children, ...rest}) {
  let defaultStyle = styles.text;

  if (style?.fontWeight === 'bold') {
    defaultStyle = styles.textBold;
  }

  return (
    <NativeText style={[style, defaultStyle]} {...rest}>
      {children}
    </NativeText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
  },
  textBold: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'normal',
  },
});
