import {useState} from "react";
import "./Body.css"
import {Route, Routes} from "react-router-dom";
import Contact from "./Contact";
import About from "./About";

function Body() {
    // const [form, setForm] = useState({});
    //
    // function handleChange(event) {
    //     setForm({
    //         ...form,
    //         [event.target.name]: event.target.value
    //     })
    // }
    //
    // function handleSubmit() {
    //     console.log(form)
    // }
    //
    // return (
    //     <div>
    //         <h1>Sign up</h1>
    //         <form>
    //             <div className="custom-input">
    //                 <label>Username </label>
    //                 <input name="username" value={form.username || ''} onChange={handleChange} />
    //             </div>
    //             <div className="custom-input">
    //                 <label>Email </label>
    //                 <input name="email" value={form.email || ''} onChange={handleChange} />
    //             </div>
    //             <div className="custom-input">
    //                 <label>Password </label>
    //                 <input type="password" name="password" value={form.password || ''} onChange={handleChange} />
    //             </div>
    //             <div className="custom-input">
    //                 <label>Confirm password </label>
    //                 <input type="password" name="confirmPassword" value={form.confirmPassword || ''} onChange={handleChange} />
    //             </div>
    //             <button type="button" onClick={handleSubmit}>Submit</button>
    //         </form>
    //     </div>
    // );
    const MESSAGE_ERROR = {
        email: "Email error",
        password: "Password error"
    };

    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    };

    const [form, setForm] = useState({});

    function handleChange(event) {
        let error = REGEX[event.target.name].test(event.target.value)
            ? ""
            : MESSAGE_ERROR[event.target.name];
        setForm({
            ...form,
            [event.target.name]: { value: event.target.value, error: error }
        });
        console.log(form.email);
        console.log(form.email.value);
        console.log(form.email && form.email.value)
    }

    function handleSubmit() {
        const isFilled =
            form.email && form.email.value && form.password && form.password.value;
        const isError = isFilled && (form.email.error || form.password.error);
        alert(
            isFilled && !isError
                ? "Login in successfully!!!"
                : "Please fill out all the fields!!!"
        );
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <div
                    className={`custom-input ${"custom-input-error" && form.email &&
                    form.email.error}`}
                >
                    <label>Email </label>
                    <input
                        name="email"
                        value={(form.email && form.email.value) || ""}
                        onChange={handleChange}
                    />
                    {form.email && form.email.error && (
                        <p className="error">Email error</p>
                    )}
                </div>
                <div
                    className={`custom-input ${form.password &&
                    form.password.error &&
                    "custom-input-error"}`}
                >
                    <label>Password </label>
                    <input
                        type="password"
                        name="password"
                        value={(form.password && form.password.value) || ""}
                        onChange={handleChange}
                    />
                    {form.password && form.password.error && (
                        <p className="error">Password error</p>
                    )}
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
            <Routes>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    );
}

export default Body;
