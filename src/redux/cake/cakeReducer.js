import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};

// set default state to your initialized state
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;
