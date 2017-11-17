import { connect } from 'react-redux';

import TaskList from '../components/TaskList';

import { deleteTask } from '../action';

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDeleteTask: id => dispatch(deleteTask(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
