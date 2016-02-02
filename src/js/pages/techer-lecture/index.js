import React, {Component} from 'react'
import Lecture from './lecture'
import Course from './course'
import Comments from './comments'
import Header from '../../components/header'
import Logo from '../../components/ksu-logo'
import Footer from '../../components/footer'

const title = 'Романтизм и реализм во французской литературе 30-40-х годов XIX века'

const lecture = [
  {
    subtitle:'Романтизм и реализм во второй половине XIX века',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    subtitle:'Критический реализм',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  }
]

const images =[
  {
    name:'Виктор Гюго',
    info:'Французский писатель, глава и теоретик французского романтизма.Член Французской академии'
  }
]

const nameCourse = 'Экономический анализ производственно-хозяйственной деятельности'

const nameLectures = [
  {
    name:'Анализ маркетинговой деятельности'
  },
  {
    name:'Романтизм и реализм во французской литературе 30-40-х годов XIX века'
  },
  {
    name:'Антикризисное управление персоналом'
  }
]

const comments=[
  {
    surname:'Припачева',
    name: 'Иладзе Владимировна',
    comment:'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit',
    status:'online'
  }
]
export default class TeacherLecture extends Component {
  render () {
    return (
      <div>
      <div className='wrapper'>
        <Header/>
        <Logo />
        <div className='shad pt40'>
          <div className='container'>
            <div className='row'>
              <Lecture title={title} lecture={lecture} images={images}/>
              <Course nameCourse={nameCourse} nameLectures={nameLectures}/>
            </div>
          </div>
        </div>
        <Comments comments={comments}/>

        </div>
      <Footer/>
        </div>
    )
  }
}
