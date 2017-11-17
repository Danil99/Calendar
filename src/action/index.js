export const ADD_EVENT = 'ADD_EVENT';
export const CHANGE_VARNING = 'CHANGE_VARNING';
export const DELETE_TASK = 'DELETE_TASK';

export function onAddEvent(title, time, duration) {
  return {
    type: ADD_EVENT,
    title,
    time,
    duration
  }
}

export function onVarningWind() {
  return {
    type: CHANGE_VARNING
  }
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id
  }
}
