import logo from './logo.svg';
import './App.css';
import React from "react"
import {Component} from "react";
import Header from './Header';
import Body from "./Body";

// function App() {
//     return (
//             <form>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                     <input type="password" className="form-control" id="exampleInputPassword1" />
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         );
// }

class App extends React.Component {
    constructor(a, b) {
        super(a);
        // super(props);
        this.state = {
            username: "pato"
        }
        this.b = "abc";
    }
    // componentDidMount() {
    //     // setTimeout(() => {
    //     //
    //     // }, 5000);
    //     this.setState({ color: 'pink' });
    // }
    //
    // render() {
    //     return (
    //         <div>
    //             {this.b}
    //             <div
    //                 style={{
    //                     backgroundColor: this.state.color,
    //                     paddingTop: 20,
    //                     width: 400,
    //                     height: 80,
    //                     margin: 'auto'
    //                 }}
    //             />
    //         </div>
    //     );
    // }
    render() {
        return (
            <div>
                <Header usernameProps={this.state.username} bProps={this.b} />
                <Body></Body>
                {/*<form>*/}
                {/*    <div className="mb-3">*/}
                {/*        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>*/}
                {/*        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />*/}
                {/*        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                {/*    </div>*/}
                {/*    <div className="mb-3">*/}
                {/*        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>*/}
                {/*        <input type="password" className="form-control" id="exampleInputPassword1" />*/}
                {/*    </div>*/}
                {/*    <div className="mb-3 form-check">*/}
                {/*        <input type="checkbox" className="form-check-input" id="exampleCheck1" />*/}
                {/*        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>*/}
                {/*    </div>*/}
                {/*    <button type="submit" className="btn btn-primary">Submit</button>*/}
                {/*</form>*/}
            </div>

        );
    }

}

export default App;
