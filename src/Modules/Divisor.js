import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';

class Divisor extends Component {
  constructor() {
    super();

    this.state = {
      a: 0,
      b: 0,
      result: null,
    };
  }

  validateValue = (val) => {
    const numberValue = Number(val);
    const isNumber = !isNaN(numberValue);
    const isNumberFinite = isFinite(numberValue);
    return isNumber && isNumberFinite;
  }

  handlerA = (e) => {
    const currentValue =  e.target.value;
    if (this.validateValue(currentValue)) {
      this.setState({
        a: Number(currentValue)
      });
    }
  }

  handlerB = (e) => {
    const currentValue =  e.target.value;
    if (this.validateValue(currentValue)) {
      this.setState({b:
          Number(currentValue)
      });
    }
  }

  getCommonDivisor = (a, b) => {
    let x = a;
    let y = b;
    while (x !== 0 && y !== 0) {
      if(x > y) {
        x = x % y;
      } else {
        y = y % x;
      }
    }

    this.setState({
      result: x + y
    });
  }

  render() {
    const {a, b, result} = this.state;

    return (
      <div className='main__form'>
        <fieldset className='form__fieldset'>
          <legend>Enter two integers</legend>

          <legend>First number:</legend>
          <Input
            className='form__input'
            value={a}
            onChange={this.handlerA}
          />

          <legend>Second number:</legend>
          <Input
            className='form__input'
            value={b}
            onChange={this.handlerB}
          />

          <div className='form__result'>
            Result: {result}
          </div>

        </fieldset>
        <Button
          variant='contained'
          color='primary'
          onClick={
            () => this.getCommonDivisor(Number(a), Number(b))
          }
        >
          Get result
        </Button>
      </div>
    );
  }
}

document.dispatchEvent(new CustomEvent('moduleLoaded', {detail: Divisor}));