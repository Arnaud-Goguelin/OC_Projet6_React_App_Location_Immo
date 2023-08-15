import { createContext } from "react";
import useFetch from './useFetch'

export const DataHousing = createContext()


function DataProvider({children}) {

  const { data, isLoading, error } = useFetch('http://localhost:3000/housing.json')

  return (
    <DataHousing.Provider value={{ data, isLoading, error }}>
        {children}
    </DataHousing.Provider>
  )
}

export default DataProvider;