import React from 'react'

export default function MissionCall() {
  return (
    <div>
        <h1>Цель звонка</h1>
        <div className='border'>
            <p>Напишите коротко о деятельности вашей организации и о тех реальных преимуществах, которые вы имеете в сравнении с конкурентами"</p>
            <p className='example'>Например: Мы занимаемся предоставлением пропусков для грузовых автомобилей в Москву. Взаимодействуя напрямую с департаментом транспорта имеем очень быстрое оформление и высокую степень одобрения - 99%</p>
            <input type='text' name="activity"></input>
        </div>
        <div className='border'>
            <p>Напишите цель данного звонка</p>
            <div><input type="radio" name="mission" value='Выявление потребностей (перед звонком с презентацией продукта)' defaultChecked/>Выявление потребностей (перед звонком с презентацией продукта)</div>
            <div><input type="radio" name="mission" value='Подбор и продажа продукта (здесь и сейчас)'/>Подбор и продажа продукта (здесь и сейчас)</div>
            <div><input type="radio" name="mission" value='Назначение встречи (знакомство или презентация продукта)'/>Назначение встречи (знакомство или презентация продукта)</div>
            <div><input type="radio" name="mission" value='Отправка коммерческого предложения (здесь и сейчас)'/>Отправка коммерческого предложения (здесь и сейчас)</div>
        </div>
    </div>
  )
}