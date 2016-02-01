import React, {Component} from 'react'

const ImgPath = require('../../../pict/face1.png')

export default class Students extends Component {
  render() {
    return (
      <div className='bg-white pt40'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='row b20'>
                <div className='col-md-12'><h2>Студенты курса</h2></div>
              </div>
              <div className='row b20'>
                <div className='col-md-3 item-stud'>
                  <div className='ava'><img src={ImgPath}/></div>
                  <span className='status f-blue'>online</span>
                  <a href=''>Фамилия <br/>
                    Имяимя Отчество </a>
                </div>
                <div className='col-md-3 item-stud'>
                  <div className='ava'><img src={ImgPath}/></div>
                  <a href=''>Фамилия <br/>
                    Имяимя Отчество </a>
                </div>
                <div className='col-md-3 item-stud'>
                  <div className='ava'><img src={ImgPath}/></div>
                  <a href=''>Фамилия <br/>
                    Имяимя Отчество </a>
                </div>

                <div className='col-md-3 item-stud'>
                  <div className='ava'><img src={ImgPath}/></div>
                  <a href=''>Фамилия <br/>
                    Имяимя Отчество </a>
                </div>

                <div className='col-md-3 item-stud'>
                  <div className='ava'><img src={ImgPath}/></div>
                  <a href=''>Фамилия <br/>
                    Имяимя Отчество </a>
                </div>
                <div className='col-md-3 item-stud'>
                  <div className='ava'><img src={ImgPath}/></div>
                  <a href=''>Фамилия <br/>
                    Имяимя Отчество </a>
                </div>
                <div className='col-md-3 item-stud'>
                  <div className='ava'><img src={ImgPath}/></div>
                  <a href=''>Фамилия <br/>
                    Имяимя Отчество </a>
                </div>
                <div className='col-md-3 item-stud'>
                  <div className='ava'><img src={ImgPath}/></div>
                  <a href=''>Фамилия <br/>
                    Имяимя Отчество </a>
                </div>
                <div className='col-md-3 item-stud'>
                  <div className='ava'><img src={ImgPath}/></div>
                  <span className='status f-blue'>online</span>
                  <a href=''>Фамилия <br/>
                    Имяимя Отчество </a>
                </div>
                <div className='col-md-3 item-stud'>
                  <div className='ava'><img src={ImgPath}/></div>
                  <span className='status f-blue'>online</span>
                  <a href=''>Фамилия <br/>
                    Имяимя Отчество </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
