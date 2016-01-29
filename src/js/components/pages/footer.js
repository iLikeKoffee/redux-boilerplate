import React, {Component} from 'react'

const ImgPath=require('../../../img/logo-footer.png');

export default class Footer extends Component {
    render () {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <a href="" className="logo"> <img src={ImgPath}/> <span>Портал дистанционного образования КГУ</span> </a>
                        </div>
                        <div className="col-md-3">
                            Ул. Радищева, 33, Курск, 305000, Российская Федерация
                            <a href="mailto:info@kursksu.ru">info@kursksu.ru</a> | <a href="">Задать вопрос</a>
                        </div>

                        <div className="col-md-2 text">
                            <a href="" >Курсы</a> <br/>
                            <a href="" >Сообщения</a><br/>
                            <a href="" >Преподаватели</a>
                        </div>

                        <div className="col-md-2 text">
                            <a href="" >Уведомления</a> <br/>
                            <a href="" >Новости</a><br/>
                            <a href="" >База знаний</a>
                        </div>

                    </div>
                </div>
            </footer>

    )
    }
}
