import React, {Component} from 'react'
import Lecture from  './lectures'
import Courses from './courses'
import Students from './students'


export default class Teacher extends Component {

    render () {

        return (
            <div>
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
        )
    }
}
