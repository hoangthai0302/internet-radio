
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ListGroupContainer from '../listgroup/ListGroupContainer';



class Main extends React.Component {
  constructor(){
    super();
  }
  componentDidMount(){
    
  }


  render() {
    
    return (
      <div>
        <ListGroupContainer />
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
    data: state.listGroupData
})




export default withRouter(connect()(Main))


