import React, { Component } from 'react';
import { getAllFruits } from './fetch-utils.js';
import { Link } from 'react-router-dom';

export default class ListPage extends Component {
    
    state = {
        fruta: []
    }

    componentDidMount = async () => {
        const fruits = await getAllFruits();

        this.setState({ fruta: fruits })
    }

    render() {
        return (
            <div className='fruits'>
                {
                    this.state.fruta.map(fruit => <Link to={`/fruits/${fruit.id}`}>
                    <div className='fruit'>
                        <p>{fruit.name}</p>
                        <p>{fruit.price}</p>
                        <p>{fruit.category}</p>
                    </div>
                    </Link>)
                }
            </div>
        )
    }
}
