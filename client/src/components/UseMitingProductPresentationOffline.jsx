import React from 'react'

function UseMitingProductPresentationOffline() {
  return (
    <div>
        <h1>Назначение встречи. Презентация продукта. Offline</h1>
        <div className='border'>
            <p>Напишите, какой вариант встречи возможен</p>
            <div><input type="radio" name='meetingOption' value='Наш офис' defaultChecked/>Наш офиc</div>
            <div><input type="radio" name='meetingOption' value='Офис клиента' />Офис клиента</div>
            <div><input type="radio" name='meetingOption' value='Не важно где пройдёт встреча' />Не важно где пройдёт встреча</div>
        </div>
    </div>
  )
}

export default UseMitingProductPresentationOffline