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
    default: 
      return state;
  }
}