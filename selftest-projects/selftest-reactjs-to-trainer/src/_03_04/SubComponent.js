import React from "react";

class SubComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                --------Sub Component--------
                <h2>{this.props.objParent}</h2>
            </div>
        );
    }
}

// function SubComponent(props) {
//     return (
//         <div>
//             --------Sub Component--------
//             <h2>{props.objParent}</h2>
//         </div>
//     );
// }

export default SubComponent;
