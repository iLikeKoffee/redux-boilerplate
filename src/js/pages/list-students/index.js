import React, {Component} from 'react'
import Header from '../../components/header'
import Logo from '../../components/subhead/index'
import Pagination from './../../components/pagination/index'
import Footer from '../../components/footer/index'
import './styles.less'

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const students = [
  {
    surname: 'Васечкин ',
    name: 'Василий Васильевич',
    status: 'online',

  },
  {
    surname: 'Лисичкина',
    name: 'Василиса Васильевна',
    status: 'offline',

  },

]

const logoPath = require('../../../img/logo.png')
const photoPath = require('../../../img/19.png')

export default class ListStudents extends Component {

  renderStudents(students) {
    const items = students
      .map(c => (
        <div className='list-item number'>

          <div className='photo'>
            <img src={photoPath}/>
          </div>

          <div  className='data' >

            <div className='name'>{c.surname} <br/> {c.name}</div>
            <div className='status'>{c.status}</div>
        </div>

    <div className='message glyphicon glyphicon-envelope'>
    </div>
  </div>
  ))

    return (
      <div>
        {items}
      </div>
    )

  }


  render() {
    return (
      <div>
        <div className='wrapper'>
          <Header/>
          <Logo />
          <div className='pt40'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 b30'>
                  {this.renderStudents(students)}
                  <Pagination pages={pages} current={5}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}


