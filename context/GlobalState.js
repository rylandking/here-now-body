import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// All global state can go here. Can create other files just like this one if it gets too big.
// Tutorial https://www.youtube.com/watch?v=XuFDcZABiDQ 
const initalState = {
  categoryView: 'all',
  filterView: false
}

// Create context
export const GlobalContext = createContext(initalState);

// Provider component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initalState)

  // Actions (like interactvity shit)
  function setCategory(uniqueCategorySlug) {
    dispatch({
      type: 'SET_CATEGORY',
      payload: uniqueCategorySlug
    })
  }

  function showFilters(filterView) {
    dispatch({
      type: 'SHOW_FILTERS',
      payload: !filterView
    })
  }

  return (<GlobalContext.Provider value={{
    categoryView:state.categoryView,
    setCategory,
    filterView:state.filterView,
    showFilters
  }}>
    {children}
  </GlobalContext.Provider>)
}