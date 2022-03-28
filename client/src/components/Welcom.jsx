import React from 'react'

function Welcom() {
    return (
        <div>
            <h1>Приветсвие</h1>
            <div className='border'>
                <p>Напишите должность сотрудника, который звонит</p>
                <input type="text" name="position" id="" />
            </div>
            <div className='border'>
                <p>Напишите форму вашей организации</p>
                <p className='example'>Например: "компания", "юридическая фирма", "автосервис", "салон красоты"</p>
                <input type="text" name="form" id="" />
            </div>
            <div className='border'>
                <p>Напишите название вашей организации</p>
                <input type="text" name="title" id="" />
            </div>

        </div>


    )
}

export default Welcom