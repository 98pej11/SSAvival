const initialState = {
  myGameScore: 0,
};

function gameScoreReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "RESET_MY_SCORE":
      return { ...state, myGameScore: 0 };
    case "ADD_MY_SCORE":
      return {
        ...state,
        myGameScore: state.myGameScore + payload.myGameScoreGained,
      };
    default:
      return { ...state };
  }
}

export default gameScoreReducer;
