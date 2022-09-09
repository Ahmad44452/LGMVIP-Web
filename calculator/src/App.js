import { useState } from 'react';
import './styles.scss';

const App = () => {

  const [calcString, setCalcString] = useState('0');

  const resetState = () => {
    setCalcString('0');
  }

  const addNumber = (number) => {
    setCalcString(prev => {
      if (prev === '0') {
        return `${number}`;
      } else {
        return `${prev}${number}`;
      }
    })
  }

  const addSign = (sign) => {
    setCalcString(prev => {
      const prevCharacter = prev[prev.length - 1];
      if (prevCharacter === '+' || prevCharacter === '-' || prevCharacter === '*' || prevCharacter === '/') {
        return `${prev.substring(0, prev.length - 1)}${sign}`;
      } else {
        return `${prev}${sign}`
      }
    })
  }

  const addDecimal = () => {
    setCalcString(prev => {
      const prevCharacter = prev[prev.length - 1];
      if (prevCharacter === '.') {
        return prev;
      } else {
        return `${prev}.`
      }
    })
  }

  const delCharacter = () => {
    setCalcString(prev => {
      if (prev === '0' || prev.length === 1) {
        return '0';
      } else {
        return prev.substring(0, prev.length - 1);
      }
    })
  }

  const evaluate = () => {
    setCalcString(`${eval(calcString)}`);
  }

  return (
    <div className="main">
      <div className="calculator">
        <div className='calculator__display'>{calcString}</div>
        <div className='calculator__button calculator__button--ac' onClick={resetState}>AC</div>
        <div className='calculator__button' onClick={delCharacter}>DEL</div>
        <div className='calculator__button' onClick={() => addSign('/')}>/</div>
        <div className='calculator__button' onClick={() => addNumber(7)}>7</div>
        <div className='calculator__button' onClick={() => addNumber(8)}>8</div>
        <div className='calculator__button' onClick={() => addNumber(9)}>9</div>
        <div className='calculator__button' onClick={() => addSign('*')}>*</div>
        <div className='calculator__button' onClick={() => addNumber(4)}>4</div>
        <div className='calculator__button' onClick={() => addNumber(5)}>5</div>
        <div className='calculator__button' onClick={() => addNumber(6)}>6</div>
        <div className='calculator__button' onClick={() => addSign('-')}>-</div>
        <div className='calculator__button' onClick={() => addNumber(1)}>1</div>
        <div className='calculator__button' onClick={() => addNumber(2)}>2</div>
        <div className='calculator__button' onClick={() => addNumber(3)}>3</div>
        <div className='calculator__button' onClick={() => addSign('+')}>+</div>
        <div className='calculator__button' onClick={() => addNumber(0)}>0</div>
        <div className='calculator__button' onClick={addDecimal}>.</div>
        <div className='calculator__button calculator__button--equal' onClick={evaluate}>=</div>
      </div>
    </div>
  )
}

export default App;