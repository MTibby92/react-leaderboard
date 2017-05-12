import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import data from '../data/data'

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
        const rows = []

        for (let i=0; i < data.length; i++) {
            rows.push(<TableRow key={i+1} num={i+1} avatar={data[i].img} name={data[i].username} recent={data[i].recent} alltime={data[i].alltime} />)
        }

        return (
            <table>
                <tbody>
                    <TableHeader />
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default Table
