import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// All global state can go here. Can create other files just like this one if it gets too big.
// Tutorial https://www.youtube.com/watch?v=XuFDcZABiDQ 
const initalState = {
  categoryView: 'all',
  filterView: false,
  subscribeModalView: false,
  exitIntentModalViewed: false,
  menuView: false
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

  function toggleSubscribeModal(subscribeModalView) {
    dispatch({
      type: 'TOGGLE_SUBSCRIBE_MODAL',
      payload: !subscribeModalView
    })
  }

  function setExitIntentModal(exitIntentModalViewed) {
    dispatch({
      type: 'SET_EXIT_INTENT_MODAL',
      payload: true
    })
  }

  function setMenuView(menuView) {
    dispatch({
      type: 'SET_MENU_VIEW',
      payload: !menuView
    })
  }

  return (<GlobalContext.Provider value={{
    categoryView:state.categoryView,
    setCategory,
    filterView:state.filterView,
    showFilters,
    subscribeModalView:state.subscribeModalView,
    toggleSubscribeModal,
    exitIntentModalViewed:state.exitIntentModalViewed,
    setExitIntentModal,
    menuView:state.menuView,
    setMenuView
  }}>
    {children}
  </GlobalContext.Provider>)
}