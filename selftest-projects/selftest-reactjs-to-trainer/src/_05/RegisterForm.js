import {useState} from "react";

function RegisterForm(props) {

    const [form, setForm] = useState({});

    const register = () => {
        console.log(form);
    }

    const onChangeValue = (e) => {
        console.log(e);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="studentName" onChange={onChangeValue}/>
            </div>
            <div>
                <label htmlFor="doB">Date of birth</label>
                <input id="doB" type="date" name="dateOfBirth" onChange={onChangeValue}/>
            </div>
            <button onClick={register}>Register</button>
        </div>
    );
}

export default RegisterForm;
