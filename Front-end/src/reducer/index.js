import { ADD_EVENT, CHANGE_VARNING, DELETE_TASK, GET_POSTS } from '../action';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.state;

    case ADD_EVENT:
      return action.state;

    case DELETE_TASK:
      let event = action.event;
      return {...state, event};

    case CHANGE_VARNING:
      return {...state, varningWind: false};

    default:
      return state;
  }
}
