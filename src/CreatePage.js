import React, { Component } from 'react'
import { createFruit } from './fetch-utils.js';

export default class CreatePage extends Component {

    state = {
        name: '',
        price: 0,
        category_id: 1
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handlePriceChange = e => {
        this.setState({ price: e.target.value });
    }

    handleCategoryChange = e => {
        this.setState({ category_id: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await createFruit({
            name: this.state.name,
            price: this.state.price,
            category_id: this.state.category_id
        });

        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        Price
                        <input onChange={this.handlePriceChange}/>
                    </label>
                    <label>
                        Category
                        <select onChange={this.handleCategoryChange}>
                            <option value="1">Tree</option>
                            <option value="2">Ground</option>
                            <option value="3">Vine</option>
                            <option value="4">Cactus</option>
                        </select>
                    </label>
                    <button>Add!</button>
                </form>
            </div>
        )
    }
}
