import React, {Component} from 'react'
import Header from '../../components/header'
import PersonalSetting from '../../components/personal-setting'
import Footer from '../../components/footer/index'
import PersonalData from '../../components/personal-data'

export default class Profile extends Component {
  render () {
    return (
      <div>
        <div className='wrapper'>
          <Header/>
          <div className='shad pt40'>
            <div className='container'>
              <div className='row'>
          <PersonalData/>
          <PersonalSetting/>
                </div>
              </div>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
