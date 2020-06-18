export default (state, action) => {
  switch(action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        categoryView: state.categoryView === action.payload ? 'all' : action.payload
      }
    case 'SHOW_FILTERS':
      return {
        ...state,
        filterView: state.filterView ? false : true
      }
    case 'TOGGLE_SUBSCRIBE_MODAL':
      return {
        ...state,
        subscribeModalView: state.subscribeModalView ? false : true
      }
    default: 
      return state;
  }
}