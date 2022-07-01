import React, { createContext, useContext, useState,useReducer } from 'react'
import { Reducer } from './Reducer';
const userContext=createContext();    
function Context({children}) {
const [state,dispatch]=useReducer(Reducer,{
  cart:[],
})
  return (
    <userContext.Provider value={{state,dispatch}}>{children}</userContext.Provider>
  )
  }

const DataContext = ()=>{
   return useContext(userContext);
}

export default Context;
export {DataContext};