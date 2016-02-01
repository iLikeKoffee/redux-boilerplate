import React, {Component} from 'react'

const ImgPath = require('../../../pict/face3.png')

export default class Comments extends Component {
  render () {
    return (
      <div className='bg-white pt40'>
        <div className='container'>
          <div className='row b40'>
            <div className='col-md-8'>
              <h3 className='b10'>Оставить комментарий</h3>
              <div className='input b20'>
                <textarea></textarea>
              </div>
              <div className='p-right'>
                <a href='' className='btn bg-light sm'>Отмена</a>
                &nbsp;
                <a href='' className='btn bg-aqua sm'>Отправить</a>
              </div>
            </div>
          </div>
          <div className='row b40'>
            <div className='col-md-8'>
              <h1 className='bubble'>Комментарии</h1>
              <div className='comment'>
                <div className='img f-blue'>
                  <div><img src={ImgPath}/></div>
                  online
                </div>
                <a href='' className='f-blue'>Припачева<br/> Иладзе Владимировна</a>
                <p className='f-gray'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
                  aspernatur aut odit</p>
                <a href='' className='f-light s12'>ответить</a>
                <div className='comment'>
                  <div className='img f-blue'>
                    <div><img src={ImgPath}/></div>
                    online
                  </div>
                  <a href='' className='f-blue'>Припачева<br/> Иладзе Владимировна</a>
                  <p className='f-gray'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
                    aspernatur aut odit</p>
                  <a href='' className='f-light s12'>ответить</a>
                </div>
              </div>
              <div className='comment'>
                <div className='img f-blue'>
                  <div><img src={ImgPath}/></div>
                  online
                </div>
                <a href='' className='f-blue'>Припачева<br/> Иладзе Владимировна</a>
                <p className='f-gray'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
                  aspernatur aut odit</p>
                <a href='' className='f-light s12'>ответить</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
