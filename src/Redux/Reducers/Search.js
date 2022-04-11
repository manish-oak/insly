export default(state = '', action = {}) => {
    switch(action.type) {
      case 'SET_SEARCH_VALUE':
        return action.value
  
      default: return state;
    }
  }