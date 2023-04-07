import React from "react";

class Body extends React.Component {
    render() {
        return (
          <div>
              <span>{this.props.studentObj.name}</span>
              <input value={this.props.contentProp} onChange={this.props.updateStateProp}/>
              <h2 style={{color: "red"}}>{this.props.contentProp}</h2>
          </div>
        );
    }
}

export default Body;
