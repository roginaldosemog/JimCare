import { connect } from 'react-redux';
// import { resetStore } from '../actions/applicationActions';
import HomeScreen from '../screens/HomeScreen';

const mapStateToProps = state => (
  {
    //application: state.application,
  }
);

const mapDispatchToProps = dispatch => (
  {
    //resetStore: (...states) => dispatch(resetStore(...states)),
  }
);

const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default HomeScreenContainer;
