let profile = {
    fname: 'Code',
    lname: 'Gym',
    bday: new Date('1979-01-02')
}

// let fname = profile.fname;
// let lname = profile.lname;

// destructuring
// let a, b, c;
let {fname, lname} = profile;
let {fname: a, lname: b} = profile;
console.log(fname, lname);
console.log(a, b);
