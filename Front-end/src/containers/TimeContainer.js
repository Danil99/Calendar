import { connect } from 'react-redux';

import Time from '../components/Time';

function mapStateToProps(state) {
  return {
    time: state.time
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, null)(Time);
