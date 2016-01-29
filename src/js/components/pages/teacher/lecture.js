import React, {Component} from 'react'

export default class Lecture extends Component {
    render () {
        return (
            <div className="col-md-8 b30" >
                <h1 className="bubble">Экономический анализ производственно-хозяйственной деятельности</h1>
                <div className="list-item"> <a href="" className="f-blue lnk-list">Лекция 1: Анализ маркетинговой деятельности</a> </div>
                <div className="list-item"> <a href="" className="f-blue lnk-list">Лекция 2: Анализ технико-организационного уровня и других условий производства</a> </div>
                <div className="list-item "> <a href="" className="f-blue lnk-apply">Тест: Анализ использования основных фондов организации</a> </div>
                <div className="list-item "> <a href="" className="f-blue lnk-play">Лекция 4: Анализ материальных ресурсов предприятия</a> </div>
                <div className="list-item "> <a href="" className="f-blue lnk-list">Лекция 1: Анализ маркетинговой деятельности</a> </div>
                <div className="list-item "> <a href="" className="f-blue lnk-list">Лекция 2: Анализ технико-организационного уровня и других условий производства</a> </div>
                <div className="list-item "> <a href="" className="f-blue lnk-apply">Тест: Анализ использования основных фондов организации</a> </div>

                <div className="b30"></div>
                <a href="" className="btn bg-orange btn-edit">Редактировать курс</a>
            </div>
        )
    }
}
