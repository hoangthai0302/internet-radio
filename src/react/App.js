

import React from 'react'
import SidebarContainer from '../redux/components/sidebar/SidebarContainer'
import Main from '../redux/components/Main/Main'
import './styles/app.css'


export default class App extends React.Component {


  render() {
   
    return (
      
      <div className="flex-container">
        <div className="flex-container__col-left">
          <h3>&nbsp;</h3>
          <SidebarContainer />
        </div>
        <div className="flex-container__col-right">
          <Main />
        </div>

      </div>
    )
  }
}




