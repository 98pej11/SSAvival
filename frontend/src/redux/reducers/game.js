const initialState = {
  remindAnswer: "",
  remindWordList: [],
  round: 0,
  title: null,
  timeLimit: 0,
  bgPath: null,
  totalScore: 0,
  totalTimeLimit: 120,
  nextComp: false,
};
function gameReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_REMIND_ANSWER":
      console.log(payload.data.wordList);
      return {
        ...state,
        remindAnswer: payload.data.answer.choices[0].text.trim(),
        remindWordList: payload.data.wordList,
      };
    case "SET_GAME":
      return {
        ...state,
        title: payload.title,
        timeLimit: payload.timeLimit,
        bgPath: payload.bgPath,
        round: state.round + 1,
      };
    case "UPDATE_SCORE":
      return { ...state, totalScore: state.totalScore + payload };
    case "TIME_OVER":
      return { ...state, nextComp: !state.nextComp };
    default:
      return { ...state };
  }
}
export default gameReducer;
