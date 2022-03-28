import React from 'react'

function DefinitionNeed() {
  return (
    <div>
        <h1>Выявление потребностей (перед звонком с презенацией продукта)</h1>
        <div className='border'>
            <p>Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать</p>
            <p className='example'>Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?</p>
            <input type="text" name='need' />
        </div>
        <div className='border'>
            <p>Напишите в течение какого количества дней ваше предложение будет готово для клиента</p>
            <p className='example'>Например: 1 день</p>
            <input type="text" name='readyTime' />

        </div>
        <div className='border'>
            <p>Напишите сколько времени вам с клиентом понадобится на обсуждение предложения на следующем звонке</p>
            <p className='example'>Например: 15 минут</p>
            <input type="text" name='meetingTime'/>
        </div>

    </div>
  )
}

export default DefinitionNeed