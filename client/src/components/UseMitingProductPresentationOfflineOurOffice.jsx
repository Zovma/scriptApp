import React from 'react'

function UseMitingProductPresentationOfflineOurOffice() {
  return (
    <div>
        <h1>Назначение встречи. Презентация продукта. Offline. Наш офис</h1>
        <div className="border">
            <p>Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать</p>
            <p className='example'>Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?</p>
            <input type="text" name='need' />
        </div>
        <div className="border">
            <p>Напишите адрес вашего офиса</p>
            <p className='example'>Например: Невский проспект, дом 35, БЦ Атриум</p>
            <input type="text" name='officeAdress' />
        </div>
        <div className="border">
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <input type="text" name='meetingTime' />
        </div>
    </div>
  )
}

export default UseMitingProductPresentationOfflineOurOffice