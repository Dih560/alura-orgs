import React, {useMemo, useReducer} from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Stars from '../../../components/Stars';
import Text from '../../../components/Text';

const distanceInMeters = distance => `${distance}m`;

export default function Producer({producer, onPress}) {
  const [selected, selectedDispatch] = useReducer(value => !value, false);

  const distance = useMemo(
    () => distanceInMeters(producer.distance),
    [producer.distance],
  );

  return (
    <TouchableOpacity
      style={[styles.container, styles.shadowProp]}
      onPress={onPress}>
      <Image style={styles.image} source={producer.image} alt="Producer logo" />
      <View style={styles.titleContainer}>
        <Text style={styles.titleName}>{producer.name}</Text>
        <Stars quantity={producer.stars} editable={selected} big={selected} />
      </View>
      <View style={styles.distanceContainer}>
        <Text style={styles.distanceValue}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    borderRadius: 6,
  },
  shadowProp: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  titleContainer: {
    flex: 3,
    marginLeft: 8,
    marginVertical: 16,
    justifyContent: 'space-between',
  },
  titleName: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#464646',
  },
  distanceContainer: {
    flex: 1,
    marginRight: 16,
  },
  distanceValue: {
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'center',
  },
});
