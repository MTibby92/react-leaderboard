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
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        console.log(e.target.value)
        
        if(e.target.value === 'recent') {
            data.sort((a,b) => {
                if(parseInt(a.recent, 10) - parseInt(b.recent, 10) < 0) {
                    return 1
                } else if (parseInt(a.recent, 10) - parseInt(b.recent, 10) === 0) {
                    return 0
                } else {
                    return -1
                }
            })

            this.setState({
                sortByRecent: true
            })
        } else {
            data.sort((a,b) => {
                if(parseInt(a.alltime, 10) - parseInt(b.alltime, 10) < 0) {
                    return 1
                } else if (parseInt(a.alltime, 10) - parseInt(b.alltime, 10) === 0) {
                    return 0
                } else {
                    return -1
                }
            })

            this.setState({
                sortByRecent: false
            })
        }
    }

    render() {
        const rows = []

        for (let i=0; i < data.length; i++) {
            rows.push(<TableRow key={i+1} num={i+1} avatar={data[i].img} name={data[i].username} recent={data[i].recent} alltime={data[i].alltime} />)
        }

        return (
            <table className="table table-hover table-bordered">
                <tbody>
                    <TableHeader handleClick={this.handleClick} />
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default Table
