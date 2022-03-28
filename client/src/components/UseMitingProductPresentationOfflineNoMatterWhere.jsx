import React from 'react'

function UseMitingProductPresentationOfflineNoMatterWhere() {
  return (
    <div>
        <h1>Назначение встречи. Презентация продукта. Offline. Не важно где пройдет встреча</h1>
        <div className="border">
            <p>Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать</p>
            <p className='example'>Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?</p>
            <input type="text" name="need"/>
        </div>
        <div className="border">
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <input type="text" name='meetingTime' />
        </div>
    </div>
  )
}

export default UseMitingProductPresentationOfflineNoMatterWhere