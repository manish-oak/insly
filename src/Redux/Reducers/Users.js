const initialState = []

export default(state = initialState, action = {}) => {
  switch(action.type) {
    case 'SET_USERS':
      return action.value

    default: return state;
  }
}