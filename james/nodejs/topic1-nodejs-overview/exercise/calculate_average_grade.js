let students = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }
];

let genderGlobal = 'male';

function getTotalGrade(accumulator, currentValue) {

    if (currentValue.gender === genderGlobal) {
        return accumulator + currentValue.point;
    }

    return accumulator;
}


function getAverageStudent(genderParam) {
    genderGlobal = genderParam;
    let totalGradeMale = students.reduce(getTotalGrade, 0);
    console.log(totalGradeMale);

    let totalMaleStudent = students.filter((student) => student.gender === genderGlobal);
    console.log(totalMaleStudent);

    return totalGradeMale/totalMaleStudent.length;
}

console.log('Average male student: ' + getAverageStudent('male'));
console.log('Average female student: ' + getAverageStudent('female'));
