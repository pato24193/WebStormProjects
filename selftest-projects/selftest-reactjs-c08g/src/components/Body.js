import {Student} from "../model/Student";
import {useState} from "react";

export function Body() {

    const [students, setStudents] = useState([
        new Student(34224, "Nguyen Van An", "23/04/1999"),
        new Student(643, "Le Van Binh", "29/02/2000"),
        new Student(2312, "Tran Thi La", "01/01/1999"),
    ]);

    // setStudents([
    //     new Student(34224, "Nguyen Van An", "23/04/1999"),
    //     new Student(643, "Le Van Binh", "29/02/2000"),
    //     new Student(2312, "Tran Thi La", "01/01/1999"),
    // ]);
    // const students = [
    //     new Student(34224, "Nguyen Van An", "23/04/1999"),
    //     new Student(643, "Le Van Binh", "29/02/2000"),
    //     new Student(2312, "Tran Thi La", "01/01/1999"),
    // ];
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2">

                </div>
                <div className="col-lg-8">
                    <table className="table my-lg-5">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date of brith</th>
                        </tr>
                        </thead>
                        <tbody>
                            {students.map((value, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.dateOfBirth}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-2">

                </div>
            </div>
        </div>
    );
}
