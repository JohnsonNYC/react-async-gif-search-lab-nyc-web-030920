import React, { Component } from 'react';
import GifList from './GifList'
import GifSearch from './GifSearch'

let link = 'https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g'
class GifListContainer extends Component {
    state = {
        data: [],
        gif: []
    }

    componentDidMount() {
        fetch(link)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    data: data.data,
                    gif: [data.data[0], data.data[1], data.data[2]]
                });
            });
    }

    render() {
        return (
            <div>
                {this.state.gif.map((gif, index) => <GifList key={index} {...gif} />)}
                <GifSearch />
            </div>
        )
    }
}

export default GifListContainer;