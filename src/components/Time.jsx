import React from 'react';

function Time(props) {
  return (
    <section>
      {
        props.time.map((el, i) => {
          return (
            <div key={i} className="time-section">
              <div className="time-view">
                <span>{el}:00</span>
              </div>
              {
                el !== 5 ?
                  <div className="time-view">
                    <span>{el}:30</span>
                  </div>
                    : null
              }
            </div>
          )
        })
      }
    </section>
  )
}

export default Time;
