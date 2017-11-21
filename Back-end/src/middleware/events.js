import state from '../store/index.js';

module.exports = function (req, res) {
  res.send(state);
}
