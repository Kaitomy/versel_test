import React from 'react'

const FormsPage = () => {
  return (
    <div>
        <div className='row'>
            <div className='col-md-12'>
                <h2 className='text-center mb-5'>Формы</h2>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Форма регистрации</h4>
                        <form>
                            <div className='mb-3'>
                                <label className='form-label'>Имя: </label>
                                <input type="text" placeholder='Введите Имя' className='form-control'/>
                            </div>

                            <div className='mb-3'>
                                <label className='form-label'>Фамилия: </label>
                                <input type="text" placeholder='Введите Фамилия' className='form-control'/>
                            </div>

                            <div className='mb-3'>
                                <label className='form-label'>Отчество: </label>
                                <input type="text" placeholder='Введите Отчество' className='form-control'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Email: </label>
                                <input type="text" placeholder='Введите email' className='form-control'/>
                            </div>
                            <button type="submit" className='btn btn-outline-primary'>Отправить</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

        <div className='row mt-5'>
            <div className='col-md-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h4 className='mb-0'>Обратная связь</h4>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='mb-3'>
                                <label className='form-label'>Оцените наш сервис</label>
                                <select className='form-select'>
                                    <option value="">Выберите оценку</option>
                                    <option value="1">⭐ 1 звезда</option>
                                    <option value="2">⭐⭐ 2 звезды</option>
                                    <option value="3">⭐⭐⭐ 3 звезды</option>
                                    <option value="4">⭐⭐⭐⭐ 4 звезды</option>
                                    <option value="5">⭐⭐⭐⭐⭐ 5 звезд</option>
                                </select>
                                <label className='form-label'>Отзыв</label>
                                <textarea 
                                    className='form-control'
                                    rows="5"
                                    placeholder='Ваш отзыв...'
                                ></textarea>
                            </div>
                            <button type="submit" className='btn btn-warning w-100'>
                                Отправить отзыв</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FormsPage