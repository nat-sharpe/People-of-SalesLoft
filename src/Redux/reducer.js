const reducer = (state, action) => {
  if (action.type === "GET_PEOPLE") {
    return {
      ...state,
      people: action.payload,
      loaded: true
    } 
  } else {
    return state;
  }
}

export default reducer;