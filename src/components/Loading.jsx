import React from 'react';
import {Center, Spinner} from 'native-base';

export default function Loading() {
  return (
    <Center flex={1} bg="#484848">
      <Spinner size={30} color="#2A9F85" />
    </Center>
  );
}
