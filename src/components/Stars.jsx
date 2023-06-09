import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Star from './Start';

export default function Stars({quantity: oldQuantity, editable, big}) {
  const [quantity, setQuantity] = useState(oldQuantity);

  const handleSelectStar = value => setQuantity(value);

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          checked={i <= quantity}
          disabled={!editable}
          big={big}
          onPress={() => handleSelectStar(i)}
        />,
      );
    }

    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
}

Stars.defaultProps = {
  quantity: 0,
  editable: false,
  big: false,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
