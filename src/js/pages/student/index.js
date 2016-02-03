import React, {Component} from 'react'
import Task from './../../components/task-list/task-list'
import CourseList from './../../components/course-list'
import Header from '../../components/header'
import Logo from '../../components/subhead/index'
import Footer from '../../components/footer/index'

const courses = [
  {
    required: true,
    name: 'Экономика',
    description: 'Экономика'
  },
  {
    required: false,
    name: 'Биология',
    description: 'Биология'
  }
]

const articles = [
  {
    name: 'Очень полезная статья',
    description: 'Очень полезная статья'
  }
]

const tasks = [
  {
    day: '1',
    deadline: '26.08.2010 ',
    nameCourse: 'Экономический анализ производственно-хозяйственной деятельности',
    nameLection: 'Лекция 1: Анализ маркетинговой деятельности',
    nameTest: 'Тест: Анализ использования основных фондов организации'
  },
  {
    day: '3',
    deadline: '26.08.2010',
    nameCourse: 'Бухгалтерский финансовый учет',
    nameLection: 'Лекция 1: Анализ маркетинговой деятельности',
    nameTest: 'Тест: Анализ использования основных фондов организации'
  },
  {
    day: '7',
    deadline: '26.08.2010',
    nameCourse: 'Экономический анализ производственно-хозяйственной деятельности',
    nameLection: 'Лекция 1: Анализ маркетинговой деятельности',
    nameTest: 'Тест: Анализ использования основных фондов организации'
  },
  {
    day: '11',
    deadline: '26.08.2010',
    nameCourse: 'Бухгалтерский финансовый учет',
    nameLection: 'Лекция 1: Анализ маркетинговой деятельности',
    nameTest: 'Тест: Анализ использования основных фондов организации'
  }
]

export default class Student extends Component {
  render () {
    return (
      <div>
        <div className='wrapper'>
          <Header/>
          <Logo />
          <div className='pt40'>
            <div className='container'>
              <div className='row'>
                <Task tasks={tasks}/>
                <CourseList courses={courses} articles={articles}/>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
