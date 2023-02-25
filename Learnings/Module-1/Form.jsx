import React, { useState } from 'react';

function Form() {

    const{name,setname}=useState("");

    const changeHoga=(e)=>{
        setname(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("form submitted");
        document.getElementById("space").innerHTML="submitted sucessfully";
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
            <span id='space'></span>
            <div>
            <label htmlFor="name">Name:</label>
            <input
            id='name' 
            type="text" 
            name="name" 
            value={name}
            onChange={changeHoga}
            />
            </div>
                

            <button disabled={!name} type='submit' style={{cursor:"pointer"}}>submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Form
