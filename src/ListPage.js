import React, { Component } from 'react'
import { getAllFruits } from './fetch-utils.js'

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
                    this.state.fruta.map(fruit => <div className='fruit'>
                        <p>{fruit.name}</p>
                        <p>{fruit.price}</p>
                        <p>{fruit.category}</p>
                    </div>)
                }
            </div>
        )
    }
}
