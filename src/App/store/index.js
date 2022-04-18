const initialState = {
    value: 0,
    value2: 1,
    x: 10,
    y: 12,
}

//bikin reducer
function reducer(state = initialState, action) {
    switch (action.type) {
      case "INCREMENT":
        return {
            ...state,
            value: state.value + 1,
            value2: state.value2 * 10,
        }
      case "DECREMENT":
        return {
          ...state,
          value: state.value - 1,
          value2: state.value2 / 10,
        };
      default:
        return state;
    }
  }
  
  export default reducer;