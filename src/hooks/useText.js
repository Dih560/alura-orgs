import {useState, useEffect} from 'react';

import {getTexts} from '../services/loadData';

export default function useTexts() {
  const [texts, setTexts] = useState({});

  useEffect(() => setTexts(getTexts()), []);

  return texts;
}
