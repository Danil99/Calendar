import state from '../store/index.js';

module.exports = function (req, res) {
  let reg = req.body.time;
  let x = (Number(reg[0]) * 60) - (8 * 60) + Number(reg[1] || 0);
  let y = x + Number(req.body.duration);
  let event = state.event;

  let a = event.filter(el => {
    if(!Boolean(el.start >= y || x >= el.start + el.duration)) return el;
  })

  if(Number(reg[0]) >= 17 || Number(reg[0]) < 8 || y > 540 || a.length >= 2) {
    res.send({...state, varningWind: true});
  } else {
    let i = event.indexOf(a[0]);
    let left = a.length + 1;
    if(i !== -1) {
      state.event[i] = {...event[i], windCount: 2};
      if(event[i].widthLeft === 2) left = 1;
    };

    function randomId() {
      let rand = Math.round(Math.random() * 10 * Math.random() * 100 / Math.random());
      if(event.includes(rand)) {
        randomId();
      } else return rand;
    };

    event.push({
      id: randomId(),
      start: x,
      duration: Number(req.body.duration),
      title: req.body.title,
      windCount: a.length + 1,
      widthLeft: left
    })
    res.send(state);
  }
}
