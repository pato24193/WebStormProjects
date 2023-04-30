


export function StudentList() {
    let students = [
        {id: 32432, name: "Phuc", dateOfBirth: "24/04/1999"},
        {id: 65623, name: "Nam", dateOfBirth: "07/07/2000"},
        {id: 9673, name: "Nu", dateOfBirth: "23/01/2005"}
    ];
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Dob</th>
            </tr>
            </thead>
            <tbody>
                {students.map((studentObj, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{studentObj.id}</td>
                        <td>{studentObj.name}</td>
                        <td>{studentObj.dateOfBirth}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
