import React, { Component } from 'react';

class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '',
      duration: '',
      mess: 'You already have plans for a given time',
      formShow: false
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();

    let title = this.refs.title.value;
    let time = this.refs.time.value;
    let duration = this.refs.duration.value;

    let timeNum = time.match(/\d+/g);

    if(title !== '' && time !== '' && duration !== '') {
      if(Number(timeNum[0]) >= 17 || Number(timeNum[0]) < 8 || (Number(timeNum[0]) * 60) + Number(timeNum[1] || 0) - (8 * 60) + Number(duration) > 540) {
        this.setState({mess: 'You can add your plans from 8.00 to 17.00'})
      }
      this.props.addEvent(title, timeNum, duration);
    }
  }

  onChangeCount(event, type) {
    let regexp = type === 'time' ? /[\d+.:]+/g : /\d+/g;
    let reg = event.target.value.match(regexp);
    if(!Boolean(reg)) {
      this.setState({[type]: ''})
      this.refs[type].value = '';
      this.refs[type].select();
    } else this.setState({[type]: reg[0]});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.varningWind !== this.props.varningWind) {
      this.setState({time: '', duration: ''});
      setTimeout(() => {
        this.props.changeVarningWind();
        this.setState({mess: 'You already have plans for a given time'})
      }, 3000);
    }
  }

  form() {
    if(!this.props.varningWind) {
      return (
        <form onSubmit={ev => this.handleSubmit(ev)}>
          <div onClick={() => this.setState({formShow: false})} className="close"></div>
          <input ref="title" type="text" placeholder="Title" />
          <input type="text" ref="time" value={this.state.time} onChange={ev => this.onChangeCount(ev, 'time')} placeholder="Start" />
          <input ref="duration" type="text" value={this.state.duration} onChange={ev => this.onChangeCount(ev, 'duration')} placeholder="Duration" />
          <input type="submit" value="Add" />
        </form>
      )
    } else {
      return (
        <div className="varning-wind">
          <span>{this.state.mess}</span>
        </div>
      )
    }
  }

  render() {
    return (
      <section className="add-event">
        <div className="addEvent" onClick={() => this.setState({formShow: true})}>
          <span>+</span>
        </div>

        { this.state.formShow && this.form() }

      </section>
    )
  }
}

export default AddEvent;
