import React from 'react'

function UseMitingPickUpOfflineOurOffice() {
  return (
    <div>
        <h1>Назначение встречи. Знакомство. Offline. Наш офис</h1>
        <div className='border'>
            <p>Напишите адрес вашего офиса</p>
            <p className='example'>Например: Невский проспект, дом 35, БЦ Атриум</p>
            <input type="text" name='officeAdress' />
        </div>
        <div className='border'>
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <input type="text" name='communicationApp' />
        </div>
    </div>
  )
}

export default UseMitingPickUpOfflineOurOffice