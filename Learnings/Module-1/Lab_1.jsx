
import React from "react";
import './Lab.css';
import { useState } from "react";

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
};

const EmailErrorMessage = () => {
    return (
        <p className="FieldError">please enter the valid email adress</p>
    );
};


function Lab_1() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const getIsFormValid = () => {
        return(

            firstName&&
            validateEmail(email)&&
            password.value.length>=8 &&
            role != "role"
        );
        
    };

    const clearForm = () => {
        // Implement this function
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value:"",
            isTouched:false });
        setRole("role");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="Field">
                        <label>
                            First name <sup>*</sup>
                        </label>
                        <input placeholder="First Name"
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }} />
                    </div>
                    <div className="Field">
                        <label>Last name</label>
                        <input placeholder="Last name"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }} />
                    </div>
                    <div className="Field">
                        <label>
                            Email address <sup>*</sup>
                        </label>
                        <input placeholder="Email address"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    {!validateEmail(email)?(<EmailErrorMessage/>):null}
                    <div className="Field">
                        <label>
                            Password <sup>*</sup>
                        </label>
                        <input placeholder="Password(atlest 8 characters)"
                           value={password.value} 
                           type="password" 
                           onChange={(e) => { 
                             setPassword({ ...password, value: e.target.value }); 
                           }} 
                           onBlur={() => { 
                             setPassword({ ...password, isTouched: true }); 
                           }} 
                             />
                             {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
                    </div>
                    <div className="Field">
                        <label>
                            Role <sup>*</sup>
                        </label>
                        <select value={role}
                            onChange={(e) => { setRole(e.target.value) }}>
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>
                        Create account
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default Lab_1;
