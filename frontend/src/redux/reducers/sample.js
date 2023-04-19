const initialState = {
  samples: [],
};
function sampleReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_SAMPLE_SUCCESS":
      return { ...state, samples: payload.data };
    default:
      return { ...state };
  }
}
export default sampleReducer;
