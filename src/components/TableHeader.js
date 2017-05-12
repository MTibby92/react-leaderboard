import React, { Component } from 'react'

class TableHeader extends Component {
    render() {
        return (
            <tr>
                <th>#</th>
                <th>Camper Name</th>
                <th>
                    <button onClick={(e) => this.props.handleClick(e)} value="recent" >Points in past 30 days</button>
                </th>
                <th>
                    <button onClick={(e) => this.props.handleClick(e)} value="alltime" >All time points</button> 
                </th>
            </tr>
        )
    }
}

export default TableHeader