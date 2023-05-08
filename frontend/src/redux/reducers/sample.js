const initialState = {
  count: 0,
  gameMode: "single",
};
function sampleReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT_COUNT":
      return { ...state, count: payload.count + 1 };
    case "GAMEMODE":
      return { ...state, gameMode: payload.mode };
    default:
      return { ...state };
  }
}
export default sampleReducer;
