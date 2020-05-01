import React, { Component } from 'react';

class Table_Item extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>
                    <span>{this.props.data.title}</span>
                </td>
          </tr>
        );
    }
}

export default Table_Item;