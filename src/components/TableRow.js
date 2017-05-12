import React, { Component } from 'react'

class TableRow extends Component {
    render() {
        const num = this.props.num
        const avatar = this.props.avatar
        const name = this.props.name
        const recent = this.props.recent
        const alltime = this.props.alltime

        return (
            <tr>
                <td>{num}</td>
                <td>
                    <img className="avatar_image" src={avatar} alt="user avatar"/><a href={`www.freecodecamp.com/${name}`} target="_blank">{name}</a>
                </td>
                <td>{recent}</td>
                <td>{alltime}</td>
            </tr>
        )
    }
}

export default TableRow
