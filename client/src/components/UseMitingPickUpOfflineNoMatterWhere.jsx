import React from 'react'

function UseMitingPickUpOfflineNoMatterWhere() {
  return (
    <div>
        <h1>Назначение встречи. Знакомство. Offline. Не важно где пройдет встреча</h1>
        <div className='border'>
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <input type="text" name='meetingTime' />
        </div>
    </div>
  )
}

export default UseMitingPickUpOfflineNoMatterWhere