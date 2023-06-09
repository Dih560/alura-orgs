import React from 'react';
import StatusBar from './src/components/StatusBar';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
