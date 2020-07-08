import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';

class TriangleSquare extends Component {
  constructor() {
    super();

    this.state = {
      a: 0,
      b: 0,
      c: 0,
      result: null,
    }
  }

    handlerA = (e) => {
      this.setState({
        a: e.target.value
      });
    }

    handlerB = (e) => {
      this.setState({
      b: e.target.value
    });
    }

    handlerC = (e) => {
      this.setState({
        c: e.target.value
      });
    }

  getTriangleSquare = (a, b, c) => {
      const halfPerimeter = (a + b + c) / 2;
      const sum = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
      this.setState({
        result: sum
      });
    }


  render() {
    const {a, b, c, result} = this.state;

    return (
      <div className='main__form'>
        <fieldset className='form__fieldset'>
          <legend>Enter length in cm</legend>

          <legend>Side a:</legend>
          <Input
            className='form__input'
            defaultValue={this.state.a}
            onChange={this.handlerA}
          />

          <legend>Side b:</legend>
          <Input
            className='form__input'
            defaultValue={this.state.b}
            onChange={this.handlerB}
          />

          <legend>Side c:</legend>
          <Input
            className='form__input'
            defaultValue={this.state.c}
            onChange={this.handlerC}
          />

          <div className='form__result'>
            Result: {isNaN(result) ? 'Enter the correct value' : result}
          </div>

          </fieldset>

          <Button
            variant='contained'
            color='primary'
            onClick={
              () => this.getTriangleSquare(Number(a), Number(b), Number(c))
            }
          >
            Get result
          </Button>
        </div>
      );
    }
}

document.dispatchEvent(new CustomEvent('moduleLoaded', {detail: TriangleSquare}));
