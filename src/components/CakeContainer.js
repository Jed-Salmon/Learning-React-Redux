import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes - {props.numberOfCakes}</h2>
      <button>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
    // for large scale application you would perform data transformation so to select what is only required.
    // To do this, look into using redux 'selectors'  which are created in a separate file.
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
