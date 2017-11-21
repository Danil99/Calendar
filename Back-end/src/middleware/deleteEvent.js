import state from '../store/index.js';

module.exports = function (req, res) {
  let elem = state.event.find(el => el.id === req.body.id);

  let filt = item => state.event.filter(el => {
    if(!Boolean(el.start >= item.start + item.duration || item.start >= el.start + el.duration) && el.id !== req.body.id) return el;
  })

  filt(elem).forEach(el => {
    let a3 = filt(el);

    if(a3.length === 1) {
      let i = state.event.indexOf(el);
      state.event[i] = {...state.event[i], widthLeft: 1, windCount: 1};
    }
  })

  state.event = state.event.filter(el => el.id !== req.body.id);

  res.send(state.event);
}
