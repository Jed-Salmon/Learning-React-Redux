import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

// State from the redux store is mapped to our component props.
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
    // for large scale applications you would perform data transformation so to select what is only required.
    // Selectors basically return some state information from the redux store.
    // Look more into using redux 'selectors' if need be.
  };
};
// Apart from the props cakeContainer was receiving, it will now receive an additional prop called 'numOfCakes' which reflects the number of cakes in the redux store.

// Maps our dispatch of an action creator to a prop in our component.
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
// Our component now receives a second additional prop called 'buyCake' which will dispatch the buy cake action.

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

// overview of lesson 18 - connect
// https://youtu.be/gFZiQnM3Is4?t=420
