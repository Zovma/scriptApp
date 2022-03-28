import React from 'react'

function UseMitingProductPresentationOnline() {
  return (
    <div>
        <h1>Назначение встречи. Презентация продукта. Online</h1>
        <div className="border">
            <p>Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать</p>
            <p className='example'>Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?</p>
            <input type="text" name='need' />
        </div>
        <div className="border">
            <p>Напишите какое приложение вы будете использовать для связи с клиентом</p>
            <p className='example'>Например: Zoom, Google Meet, Skype</p>
            <input type='text' name='communicationApp'></input>
        </div>
        <div className="border">
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <input type="text" name='meetingTime' />
        </div>
    </div>
  )
}

export default UseMitingProductPresentationOnline