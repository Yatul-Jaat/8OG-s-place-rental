import React, { createContext, useContext, useState } from 'react'

export const SelectedContext=createContext();

export const useSelectContext=()=>{
    return useContext(SelectedContext)
}

const UseSelectedContext = ({children}) => {
    let [index,setIndex]= useState(2)
    let [localUser,setLocalUser]=useState(localStorage.getItem("user")  || null)
  return (
    <SelectedContext.Provider value={{index, setIndex,localUser}} >{children}</SelectedContext.Provider>
  )
}

export default UseSelectedContext