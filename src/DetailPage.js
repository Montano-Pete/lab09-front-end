import React, { Component } from 'react';
import { getAllCategories, getOneFruit, updateFruit } from './fetch-utils.js';

export default class DetailPage extends Component {

    state = {
        name: '',
        price: 0,
        categories: [],
        category_id: 1
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;

        const fruit = await getOneFruit(id);
        const categories = await getAllCategories();

        this.setState({
            name: fruit.name,
            price: fruit.price,
            categories: categories,
            category_id: fruit.category_id
        })
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

        await updateFruit(this.props.match.params.id, {
            name: this.state.name,
            price: this.state.price,
            category_id: this.state.category_id
        });

        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>Update Fruit</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Price
                        <input value={this.state.price} type='number' onChange={this.handlePriceChange} />
                    </label>
                    <label>
                        Category
                        <select onChange={this.handleCategoryChange}>
                            {this.state.categories.map(category =>
                                <option
                                    selected={category.id === this.state.category_id}
                                    value={category.id}>
                                    {category.category}
                                </option>)}
                        </select>
                    </label>
                    <button>Add!</button>
                </form>
            </div>
        )
    }
}
