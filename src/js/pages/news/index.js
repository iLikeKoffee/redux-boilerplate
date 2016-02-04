import React, {Component} from 'react'
import Header from '../../components/header'
import Logo from '../../components/subhead/index'
import NewsList from './../../components/newsList/index'
import Pagination from './../../components/pagination/index'
import Footer from '../../components/footer/index'

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const newsList = [
  {
    title: 'Добавлен новый курс',
    date: '27.02.2016',
    time: '09:36',
    text: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit'
  },
  {
    title: 'Добавлен новый курс',
    date: '27.02.2016',
    time: '09:36',
    text: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit'
  }
]

const logoPath = require('../../../img/logo.png')

export default class News extends Component {
  render () {
    return (
      <div>
        <div className='wrapper'>
          <Header/>
          <div className='subhead shad'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  <a href='' className='logo'> <img src={logoPath}/> <span>Портал дистанционного образования КГУ</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='pt40'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 b30'>
                  <NewsList newsList = {newsList} />
                  <Pagination pages = {pages} current = {5}/>
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

