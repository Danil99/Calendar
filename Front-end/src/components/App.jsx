import React from 'react';

import AddEventContainer from '../containers/AddEventContainer';
import TimeContainer from '../containers/TimeContainer';
import TaskListContainer from '../containers/TaskListContainer';
import ShowJSONContainer from '../containers/ShowJSONContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <div className="calendar">
          <TimeContainer />
          <TaskListContainer />
          <ShowJSONContainer />
        </div>

        <AddEventContainer />
      </main>
    )
  }
}

export default App;
