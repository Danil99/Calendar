import { connect } from 'react-redux';

import AddEvent from '../components/AddEvent';

import { onAddEvent, onVarningWind } from '../action';

function mapStateToPeops(state) {
  return {
    varningWind: state.varningWind
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addEvent: (title, time, duration) => dispatch(onAddEvent(title, time, duration)),
    changeVarningWind: () => dispatch(onVarningWind())
  }
}

export default connect(mapStateToPeops, mapDispatchToProps)(AddEvent);
