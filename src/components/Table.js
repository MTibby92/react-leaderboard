import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import recent from '../data/30days'
import alltime from '../data/alltime'

class Table extends Component {
    constructor() {
        super()
        this.state = {
            sortByRecent: true
        }
    }

    handleClick(e) {
        {/* handles which column has been selected to order results by */}
    }

    render() {
        const rows
        {/* determine how to pull in data from two different sets into unified row item and iterate through */}

        return (
            <table>
                <TableHeader />
                {/* implementation all of the rows with data */}
            </table>
        )
    }
}

export default Table