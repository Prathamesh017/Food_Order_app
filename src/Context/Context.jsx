import React, { createContext, useContext, useReducer } from 'react'
import { Reducer } from './Reducer';
import menu from '../data';
const userContext=createContext();    
function Context({children}) {
const [state,dispatch]=useReducer(Reducer,{
  cart:[],
  menu:menu

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