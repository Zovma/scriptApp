import React from 'react'

function SendingCommercialOffer() {
  return (
    <div>
        <h1>Отправка коммерческого предложения</h1>
        <div className='border'>
            <p>Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать</p>
            <p className='example'>Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?</p>
            <input type="text" name='need' />
        </div>
    </div>
  )
}

export default SendingCommercialOffer