
import React from 'react';
import Router from 'react-dom'

class Child extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Router>
                    <p>Hello</p>
                </Router>
            </div>
        );
    }
}
