import React, { useState } from 'react'

const TypeScriptPage = () => {
  const [userName,setUserName] = useState('Анастасия');
  const helloUser  = (name) => `Приветствую, ${name}`;
  const [count, setCount] = useState(0);
  const [rgb, setRgb] = useState([255,0,255]);
  return (
    <div>
      <h2>TypeScript пример</h2>
      <div className='card mb-3'>
        <div className='card-header bg-warning text-white'>
          <h5>Строки</h5>
        </div>
        <div className='card-body'>
          <input
          type='text'
          className='form-control mb-2'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder='Введите имя'
          ></input>
          <div className='alert alert-info'>
            <b>Результат</b> {helloUser(userName)}
          </div>
        </div>
      </div>
      <div className='card mb-3'>
        <div className='card-header bg-success text-white'>
          <h5>Счетчик</h5>
        </div>
        <div className='card-body'>
          <div className='text-center mb-2'>
            <h2>{count}</h2>
          </div>
          <div className='d-flex gap-2 md-2'>
            <button className='btn btn-success flex-fill'
            onClick={() => setCount(count + 1)}>
              + Увеличить</button>
            <button className='btn btn-danger flex-fill'
            onClick={() => setCount(count - 1)}>
              - Уменьшить</button>
          </div>
        </div>
      </div>
      <div className='card mb-3'>
        <div className='card-header bg-primary text-white mb-2'>
          <h5>Случайный цвет</h5>
        </div>
        <div className='card-body'>
          <div className='p-3 rounded text-center mb-2'
          style={{backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`}}>
            <b className='text-white'>
              RGB: [{rgb[0]}, {rgb[1]}, {rgb[2]}]
            </b>
          </div>
          <button className='btn btn-primary w-100'
          onClick={() => setRgb([
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
          ])}>
            Хочу другой цвет! 
          </button>
        </div>
      </div>
    </div>
  )
}

export default TypeScriptPage

