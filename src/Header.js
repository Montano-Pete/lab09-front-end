import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <p><Link to="/create">Add Fruit!</Link></p>
                <p><Link to="/">Home</Link></p>
            </div>
        )
    }
}
