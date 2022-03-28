import React from 'react'

function Finish() {
  return (
    <div>
        <h1>Завершение</h1>
        <div className="border">
            <p>На этом закончим. Напишите, как вы вообще?</p>
            <p className='example'>Например: Отлично, продуктивно, интересно</p>
            <input type="text" name='finish' />
        </div>
    </div>
  )
}

export default Finish