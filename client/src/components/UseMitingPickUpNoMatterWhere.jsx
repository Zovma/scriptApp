import React from 'react'

function UseMitingPickUpNoMatterWhere() {
  return (
    <div>
        <h1>Назначение встречи. Знакомство. Формат встречи не имеет значения</h1>
        <div className='border'>
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <input type="text" name='meetingTime' />
        </div>
    </div>
  )
}

export default UseMitingPickUpNoMatterWhere