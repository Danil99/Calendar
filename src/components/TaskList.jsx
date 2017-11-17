import React from 'react';

function TaskList(props) {
  return (
    <div className="tasks">
      {
        props.state.event.map(el => {
          return (
            <div key={el.id} className="task" style={{height: el.duration * 2, marginTop: el.start * 2, width: 100 / el.windCount + '%', left: el.widthLeft == 1 ? 0 : 100 / el.widthLeft + '%'}}>
              <div className="del" onClick={() => props.onDeleteTask(el.id)}>Delete</div>
              <h2>{el.title}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskList;
