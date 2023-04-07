import './App.css';
import React from "react"
import Body from "./Body";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        header: "Header from state...",
        content: "Content from state...",
        studentList: [
            {
                id: 234,
                name: "Nguyen Van An"
            },
            {
                id: 875,
                name: "Nguyen Van Ca"
            },
            {
                id: 321,
                name: "Nguyen Van Binh"
            }
        ]
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
      console.log(e.target.value);
      this.setState({
          content: e.target.value
      });
  }

  render() {
    return (
        <div>
          {/*<Header headerProp={this.state.header}></Header>*/}
          {/*<input type="text" onChange={this.updateState} value={this.state.content}/>*/}
          {/*<h4>{this.state.content}</h4>*/}
          {/*  <Body contentProp={this.state.content} updateStateProp={this.updateState}/>*/}
            {this.state.studentList.map(value => <Body studentObj={value} />)}
        </div>
    );
  }
}

export default App;
