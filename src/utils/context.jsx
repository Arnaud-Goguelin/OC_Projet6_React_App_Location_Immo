import { createContext } from "react";
import useFetch from './useFetch'

export const DataContext = createContext()


function DataProvider({children}) {

  const { data, isLoading, error } = useFetch('http://localhost:3000/housing.json');

  return (
    <DataContext.Provider value={{ data, isLoading, error }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider;

//pourquoi créer un composant pour passer les données alors que je peux les passer en props?