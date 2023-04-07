import React from "react"

const studentList = [
    {
        id: 123,
        name: "Nguyen Van An",
        dateOfBirth: "2023-03-06"
    },
    {
        id: 867,
        name: "Le Van Binh",
        dateOfBirth: "2023-03-07"
    },
    {
        id: 324,
        name: "Huynh Van Cu",
        dateOfBirth: "2023-02-28"
    }
];

class ShowListStudent extends React.Component {

    // const [students, setStudent] = useState([]);
    //
    // setStudent([
    //     new Student(123, "Nguyen Van An", "2023-03-06"),
    //     new Student(867, "Le Van Binh", "2023-03-07"),
    //     new Student(324, "Huynh Van Cu", "2023-02-28"),
    // ]);

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
            // <table>
            //     <thead>
            //         <tr>
            //             <td>No</td>
            //             <td>Name</td>
            //             <td>Date of birth</td>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {
            //             studentList.map((studentObj, index) => (
            //                 <tr key={index}>
            //                     <td>{index + 1}</td>
            //                     <td>{studentObj.name}</td>
            //                     <td>{studentObj.dateOfBirth}</td>
            //                 </tr>
            //             ))
            //         }
            //     </tbody>
            // </table>
        );
    }
}

export default ShowListStudent;
