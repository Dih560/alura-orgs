import {useState, useEffect} from 'react';

import {getProducers} from '../services/loadData';

export default function useProducers(bestProducers) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const retorno = getProducers();
    retorno.list.sort(
      (producer1, producer2) => producer1.distance - producer2.distance,
    );
    let newList = retorno.list;

    if (bestProducers) {
      newList = newList.filter(producer => producer.stars > 3);
    }
    setList(newList);
  }, [bestProducers]);

  return list;
}
