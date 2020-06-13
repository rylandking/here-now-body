export default (state, action) => {
  switch(action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        categoryView: state.categoryView === action.payload ? 'all' : action.payload
      }
    default: 
      return state;
  }
}