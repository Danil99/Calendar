import React from 'react';

class ShowJSON extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div className="json-conv">
        <span onClick={() => this.setState({show: true})}>Get JSON</span>

        {
          this.state.show ?
            <div className="show-json">
              <div className="close" onClick={() => this.setState({show: false})}></div>
              {
                JSON.stringify(this.props.state.event.map(el => {
                  return {
                    start: el.start,
                    duration: el.duration,
                    title: el.title
                  }
                }))
              }
            </div>
              :
                null
        }
      </div>
    )
  }
}

export default ShowJSON;
