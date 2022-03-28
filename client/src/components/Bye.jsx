import React from 'react'

function Bye(props) {
  return (
    <div className='noBorder'>
        <h1>Спасибо, ваш Скрипт собран</h1>
        <p>Результат придёт на почту <b>{props.mail}</b></p>
    </div>
  )
}

export default Bye