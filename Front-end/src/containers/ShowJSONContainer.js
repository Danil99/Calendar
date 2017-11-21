import { connect } from 'react-redux';

import ShowJSON from '../components/ShowJSON';

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, null)(ShowJSON);
