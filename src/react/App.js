

import React from 'react'
import Sidebar from '../redux/components/Sidebar'
import MainContent from '../redux/components/MainContent'
import Player from '../redux/components/Player'
import './styles/app.css'



export default class App extends React.Component {


  render() {
   
    return (
      
      <div className="flex-container">
        <div className="flex-container__col-left">
          <h3>&nbsp;</h3>
          <Sidebar />
        </div>
        <div id="container" className="flex-container__col-right">
          <MainContent />
          <Player />
        </div>

      </div>
    )
  }
}




