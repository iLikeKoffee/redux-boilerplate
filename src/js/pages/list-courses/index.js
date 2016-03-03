import React, {Component} from 'react'
import Header from '../../components/header'
import Logo from '../../components/subhead/index'
import AboutCourse from './../../components/about-course/index'
import Pagination from './../../components/pagination/index'
import Footer from '../../components/footer/index'

const logoPath = require('../../../img/logo.png')

const data = [
  {
    title: 'World Religions',
    surname: 'Иванов',
    name: 'Иван Иванович',
    text: 'Sed ut perspiciatis, unde omnis iste natus error Sed ut perspiciatis, unde omnis iste natus errorSed ut perspiciatis, unde omnis iste natus errorSed ut perspiciatis, unde omnis iste natus errorSed ut perspiciatis, unde omnis iste natus errorSed ut perspiciatis, unde omnis iste natus errorSed ut perspiciatis, unde omnis iste natus error'
  },

  {
    title: 'World Religions',
    surname: 'Иванов',
    name: 'Иван Иванович',
    text: 'Sed ut perspiciatis, unde omnis iste natus error'
  }
]
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export default class ListCourses extends Component {
  render () {
    return (
      <div>
        <div className='wrapper'>
          <Header/>
          <Logo />
          <div className='pt40'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 b30'>
                  <AboutCourse data = {data} />
                  <Pagination pages = {pages} current = {5}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )}
}
