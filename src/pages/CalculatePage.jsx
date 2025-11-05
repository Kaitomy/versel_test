import React, { useState } from 'react'

const CalculatePage = () => {
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(5);
  const [result, setresult] = useState('');

  const plus = (a, b) => {
    return a + b;
  }
  const minus = (a, b) => {
    return a - b;
  }
  const division = (a, b) => {
    if (b == 0){
      return 0;
    }
    return a / b;
  }
  const multiply = (a, b) => {
    return a * b;
  }

  return (
    <div className='container' style={{maxWidth: 600}}>
      <h2>Калькулятор</h2>
      <div className='card'>
        <div className='card-body'>
          <div className='row g-3 mb-3'>
            <div className='col-md-6'>
              <label className='form-label'>Число 1</label>
              <input
              type='number'
              className='form-control'
              value={num1}
              onChange={(e) => setNum1(Number(e.target.value))}></input>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Число 2</label>
              <input
              type='number'
              className='form-control'
              value={num2}
              onChange={(e) => setNum2(Number(e.target.value))}></input>
            </div>

          </div>
          <div className='d-flex gap-2 mb-2'>
            <button
            className='btn btn-success flex-fill'
            onClick={() => setresult(String(plus(num1, num2)))}>+</button>
             <button
            className='btn btn-success flex-fill'
            onClick={() => setresult(String(minus(num1, num2)))}>-</button>
             <button
            className='btn btn-success flex-fill'
            onClick={() => setresult(String(division(num1, num2)))}>/</button>
             <button
            className='btn btn-success flex-fill'
            onClick={() => setresult(String(multiply(num1, num2)))}>*</button>
          </div>
          <div className='mb-2'>
            <label className='form-label mb-1'>Результат</label>
            <input
            type='text'
            className='form-control'
            value={result}
            readOnly
            placeholder='Тут будет результат'></input>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CalculatePage
