import React from 'react'
import { createContext,useContext,useState } from 'react'

const AppContext = createContext();

export const MenuProvider = ({children}) => {
     const [menu,setMenu] = useState("All")
     return (
        <MenuProvider.Provider value={{menu,setMenu}}>
            {children}
        </MenuProvider.Provider>
     )
}

export const useAppContext = () => useContext(AppContext)
