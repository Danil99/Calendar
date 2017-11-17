import { ADD_EVENT, CHANGE_VARNING, DELETE_TASK } from '../action';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_EVENT:
      let newState = {...state};

      let reg = action.time;
      let x = (Number(reg[0]) * 60) - (8 * 60) + Number(reg[1] || 0);
      let y = x + Number(action.duration);

      let a = newState.event.filter(el => {
        if(!Boolean(el.start >= y || x >= el.start + el.duration)) return el;
      })

      if(a.length >= 2) {
        return {...state, varningWind: true}
      }

      if(Number(reg[0]) >= 17 || Number(reg[0]) < 8 || y > 540) {
        return {...state, varningWind: true};
      }

      let i = newState.event.indexOf(a[0]);
      let left = a.length + 1;
      if(i !== -1) {
        newState.event[i] = {...newState.event[i], windCount: 2}
        if(newState.event[i].widthLeft === 2) left = 1;
      };

      newState.event.push({
        id: newState.event.length + 1,
        start: x,
        duration: Number(action.duration),
        title: action.title,
        windCount: a.length + 1,
        widthLeft: left
      })

      return newState;

    case CHANGE_VARNING:
      return {...state, varningWind: false};

    case DELETE_TASK:
      let newState2 = {...state};

      let elem = newState2.event.find(el => el.id === action.id);

      let a2 = newState2.event.filter(el => {
        if(!Boolean(el.start >= elem.start + elem.duration || elem.start >= el.start + el.duration) && el.id !== action.id) return el;
      })

      a2.forEach(el => {
        let a3 = newState2.event.filter(el2 => {
          if(!Boolean(el2.start >= el.start + el.duration || el.start >= el2.start + el2.duration) && el2.id !== action.id) return el2;
        })

        if(a3.length === 1) {
          let i = newState2.event.indexOf(el);
          newState2.event[i].widthLeft = 1;
          newState2.event[i].windCount = 1;
        }
      })

      return {...newState2, event: newState2.event.filter(el => el.id !== action.id)};

    default:
      return state;
  }
}
