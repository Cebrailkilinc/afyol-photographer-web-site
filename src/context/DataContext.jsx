import { Children, createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({children}) => {

    const deneme = 5

    const values = {
        deneme
    }


    return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}
