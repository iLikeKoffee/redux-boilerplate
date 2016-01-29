import React, {Component} from 'react'
import Counter from "../containers/counter"
import Header from "../components/pages/header"
import User from '../components/pages/about-user'
import Lecture from  '../components/pages/teacher/lecture'
import Footer from  '../components/pages/footer'
import Courses from '../components/pages/teacher/courses'
import Students from '../components/pages/teacher/students'

const logoPath=require('../../img/logo.png');
const logoFooterPath=require('../../img/logo-footer.png');

export default class Main extends Component {

  render () {
    return (
    <div>
        <div className="wrapper">
            <Header/>

            <div className="subhead shad">
                <div className="container">
                    <div className="row">
                          <User/>
                        <div className="col-md-4">
                            <a href="" className="logo"> <img src={logoPath}/> <span>Портал дистанционного образования КГУ</span> </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shad pt40" >
                <div className="container">
                    <div className="row">
                        <Lecture/>
                        <Courses/>
                    </div>
                </div>
            </div>

            <Students/>

        </div>

         <Footer/>


    </div>







    )
  }
}
