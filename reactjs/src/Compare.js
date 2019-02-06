import React, { Component } from 'react';

class Compare extends Component {
  constructor(props){
    super(props);
    this.state = {
      splits: this.props.dothesplits.split(''),
      redIndex: 1
    }
    this.handleSplit = this.handleSplit.bind(this);
  }
  handleSplit(e) {
    this.setState({
      splits: e.target.value.split('')
    });
  }
  render() {
    const { splits, redIndex } = this.state;
    const { dothesplits } = this.props;
    return (
      <>
        <h1>
          {splits.map((letter, i) =>
            <span 
              key={`letter-${i}`}
              className={redIndex === i ? 'red' : undefined}
            >
              {letter}
            </span>
          )}
        </h1>
        <input
          defaultValue={dothesplits}
          onChange={this.handleSplit}
          className="input input--copy"
        />
      </>
    );
  }
}

export default Compare;
