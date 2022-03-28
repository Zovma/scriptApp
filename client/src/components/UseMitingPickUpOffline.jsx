import React from 'react'

function UseMitingPickUpOffline() {
  return (
    <div>
        <h1>Назначение встречи. Знакомство. Offline</h1>
        <div className='border'>
            <p>Напишите, какой вариант встречи возможен</p>
            <div><input type="radio" name='meetingOption' value='Наш офис' defaultChecked/>Наш офис</div>
            <div><input type="radio" name='meetingOption' value='Офис клиента' />Офис клиента</div>
            <div><input type="radio" name='meetingOption' value='Не важно где пройдёт встреча' />Не важно где пройдёт встреча</div>
        </div>
    </div>
  )
}

export default UseMitingPickUpOffline