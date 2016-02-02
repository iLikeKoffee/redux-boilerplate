import React, {Component} from 'react'
import Lecture from './lectures'
import Courses from './courses'
import Students from './students'
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

const lectures =[
  {
    name: 'Лекция 1: Анализ маркетинговой деятельности',
    nameTest:'Тест: Анализ использования основных фондов организации'
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
            <Students/>
          </div>
        </div>
        <Footer/>
    </div>
    )
  }
}


