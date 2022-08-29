let a: number = 2;
let b: string = 'Hello';

console.log(a);
console.log(b);

// tuple
let studentTuple: [number, string, string]
    = [123, 'Nguyen Van A', '2022-07-14'];
console.log(studentTuple);

interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;

    // study(): void;
}

let studentObj1: IStudent =
    {id: 456, name: 'Nguyen Van B', dateOfBirth: '2022-07-14'};
console.log(studentObj1);

function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(8, 4));
