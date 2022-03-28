import React from 'react'

function UseMitingProductPresentation() {
  return (
    <div>
        <h1>Назначение встречи. Презентация продукта</h1>
        <div className='border'>
            <p>Напишите формат встречи, который предполагается в вашей компании</p>
            <div><input type="radio" name="meetingFormat" value='Offline'defaultChecked/>Offline</div>
            <div><input type="radio" name="meetingFormat" value='Online'/>Online</div>
            <div><input type="radio" name="meetingFormat" value='Формат встречи не имеет значения'/>Формат встречи не имеет значения</div>
        </div>
    </div>
  )
}

export default UseMitingProductPresentation