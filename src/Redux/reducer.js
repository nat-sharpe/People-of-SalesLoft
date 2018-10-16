const reducer = (state, action) => {
  if (action.type === "GET_PEOPLE") {
    return {
      ...state,
      people: action.payload
    } 
  } else {
    return state;
  }
}

export default reducer;