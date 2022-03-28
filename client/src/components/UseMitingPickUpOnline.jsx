import React from 'react'

function UseMitingPickUpOnline() {
  return (
    <div>
        <h1>Назначение встречи. Знакомство. Online</h1>
        <div className='border'>
            <p>Напишите какое приложение вы будете использовать для связи с клиентом</p>
            <p className='example'>Например: Zoom, Google Meet, Skype</p>
            <input type="text" name="communicationApp"/>
        </div>
        <div className='border'>
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <input type="text" name='meetingTime' />
        </div>
    </div>
  )
}

export default UseMitingPickUpOnline