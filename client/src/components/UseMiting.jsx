import React from 'react'

function UseMiting() {
  return (
    <div>
        <h1>Назначение встречи</h1>
        <div className='border'>
            <p>Напишите цель встречи</p>
            <div><input type="radio" name='aimMeeteng' value='Знакомство' defaultChecked/>Знакомство</div>
            <div><input type="radio" name='aimMeeteng' value='Презентация продукта'/>Презентация продукта</div>
        </div>
    </div>
  )
}

export default UseMiting