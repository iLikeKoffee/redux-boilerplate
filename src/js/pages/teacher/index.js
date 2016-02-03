import React, {Component} from 'react'
import Lecture from './../../components/lectures'
import Courses from './../../components/courses'
import Students from './../../components/students'
import Header from '../../components/header'
import Logo from '../../components/ksu-logo'
import Footer from '../../components/footer'

const courses = [
  {
    name: 'Бухгалтерский финансовый учет'
  },
  {
    name: 'Экономический анализ производственно-хозяйственной деятельности'
  }
]

const lectures = [
  {
    name: 'Лекция 1: Анализ маркетинговой деятельности',
    nameTest: 'Тест: Анализ использования основных фондов организации'
  }
]

const students = [
  {
    surname: 'Фамилия',
    name: 'Имяимя Отчество',
    status: 'online'
  },
  {
    surname: 'Фамилия',
    name: 'Имяимя Отчество',
    status: 'online'
  }
]

export default class Teacher extends Component {
  render () {
    return (
      <div>
        <div className='wrapper'>
          <Header/>
          <Logo />
          <div className='pt40'>
            <div className='shad pt40'>
              <div className='container'>
                <div className='row'>
                  <Lecture lectures={lectures}/>
                  <Courses courses={courses}/>
                </div>
              </div>
            </div>
            <Students students={students}/>
          </div>
        </div>
        <Footer/>
    </div>
    )
  }
}
