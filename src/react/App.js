

import React from 'react'
import { Router, Route, Link, withRouter} from 'react-router';

import Sidebar from '../redux/components/Sidebar'
import Player from '../redux/components/Player'
import GenreBox from '../redux/components/GenreBox'
import DirBox from '../redux/components/DirBox';
import StationBox from '../redux/components/StationBox'
import './styles/app.css'
import Recent from '../redux/components/Recent';
import Favourite from '../redux/components/Favourite';
import Search from '../redux/components/Search';

export default class App extends React.Component {

  render() {
   
    return (
      
      <div className="flex-container">
        <div className="flex-container__col-left">
          <h3>&nbsp;</h3>
          <Sidebar />
        </div>
        <div id="container" className="flex-container__col-right">
          <Route exact path="/recent" component={Recent}/>
          <Route exact path="/favourite" component={Favourite}/>
          <Route exact path="/category" component={GenreBox}/>
          <Route exact path="/category/:genre" component={DirBox}/>
          <Route exact path="/category/:genre/:dir" component={StationBox}/>
          <Route exact path="/search" component={Search}/>
          <Player />
        </div>

      </div>
    )
  }
}




