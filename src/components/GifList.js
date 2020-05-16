import React, { Component } from 'react';

class GifList extends Component {

    render() {
        console.log(this.props)
        return (
            <ul>
                <li>
                <img src={this.props.url} alt='Giffies'/>
                </li>
            </ul>
        );
    }
}

export default GifList;