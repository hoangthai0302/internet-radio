
import React from 'react'
import { connect } from 'react-redux'
import {v4} from 'uuid'

import Star from '../../react/Star/Star'
import StationItem from '../../react/StationItem/StationItem'
import { onStationItemClick } from '../core/stationActions'
import LocalStorageService from '../../utils/LocalStorageService';


class StationItemContainer extends React.Component {

    render() {
        let { onStationItemClick, item } = this.props;

        return (
            <StationItem
                    key = {v4()}
                    item = {item}
                    onClick = { ()=> { this.props.onStationItemClick(item) }}
                />
        )
    }
}
  

export default connect(
    null,
    { onStationItemClick }
)(StationItemContainer)

