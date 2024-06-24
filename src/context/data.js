import { useContext } from 'react';
import { DataContext } from './context';

const useData = () => {
  return useContext(DataContext);
};

export default useData;