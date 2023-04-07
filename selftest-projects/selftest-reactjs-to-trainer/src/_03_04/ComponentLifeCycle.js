import React, {useEffect, useState} from "react"

class ComponentLifeCycle extends React.Component{

    constructor(props) {
        super(props);
        // this.state = {name: 'first name'};

        this.changeName = this.changeName.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    changeName() {
        this.setState({name: 'second name'});
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.changeName}>Change name</button>
            </div>
        );
    }

}

// function ComponentLifeCycle() {
//
//     const [name, setName] = useState("first name");
//
//     useEffect(() => {
//         console.log('useEffect')
//     })
//
//     const changeName = () => {
//         setName( 'second name');
//     }
//
//     return (
//         <div>
//             <button type="button" onClick={changeName}>Change name</button>
//         </div>
//     );
// }

export default ComponentLifeCycle;
