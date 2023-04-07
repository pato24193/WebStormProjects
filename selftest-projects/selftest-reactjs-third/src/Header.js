import React from "react"

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                abc
                {this.props.headerProp}
            </div>
        );
    }
}

export default Header;
