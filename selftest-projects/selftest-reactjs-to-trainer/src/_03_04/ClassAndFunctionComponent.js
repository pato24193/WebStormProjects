import React, {useState} from "react"
import SubComponent from "./SubComponent";

class ClassAndFunctionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {objName: "Object Name"}

        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({objName: "Haha"})
    }

    render() {
        return (
            <div>
                Hello! I'm Class Component.
                <p>{this.state.objName}</p>
                <div><button onClick={this.changeName}>Change name</button></div>
                <SubComponent objParent={this.state.objName}/>
            </div>
        );
    }
}

// function ClassAndFunctionComponent() {
//
//     let [objName, setObjName] = useState("Object Name");
//
//     let changeName = () => {
//         setObjName("Object name (new)");
//     }
//
//     return (
//         <div>
//             Hello! I'm Function Component
//             <p>{objName}</p>
//             <div><button onClick={changeName}>Change name</button></div>
//         </div>
//     );
// }

export default ClassAndFunctionComponent;
