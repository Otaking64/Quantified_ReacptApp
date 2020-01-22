
import React, { Component } from 'react';
//list of temperatures that gets shown
const textArray = [28.3, 28.4, 28.6, '29.0', 28.9, 29.2, 28.3];

class FakeTemp extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }
//function that shows temperature on an interval of 1.5 seconds and goes
  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);


  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <>
        {textThatChanges}
      </>
    )
  }
}

export default FakeTemp;
