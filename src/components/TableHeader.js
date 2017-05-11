import React, { Component } from 'react'

class TableHeader extends Component {
    render() {
        return (
            <tr>
                <th>#</th>
                <th>Camper Name</th>
                <th>Points in past 30 days</th>
                <th>All time points</th>
            </tr>
        )
    }
}

export default TableHeader