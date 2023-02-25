import React, { useState } from 'react'

function Form2() {
    const [score, setscore] = useState("10");
    const [comment, setcomment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (score <= 5 && comment.length <= 10) {
            alert("please provide valid reason for improvement for the next time")
        }

        console.log("sucess");
        console.log(score);
        console.log(comment);
        setcomment("");
        setscore("10");
        document.getElementById("space2").innerHTML = "submitted sucessfully";
    }


return (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset >
                <span id='space2'></span>
                <h2>give your feedback</h2>
                <div className="field">
                    <label htmlFor="">score:{score}</label>
                    <input type="range" min="0" max="10"
                        value={score}
                        onChange={(e) => { setscore(e.target.value) }} />
                </div>
                <div className="field">
                    <label htmlFor="">Comment</label>
                    <textarea name="" id="" cols="30" rows="10" value={comment} onChange={(e) => { setcomment(e.target.value) }} ></textarea>
                </div>
                <button>submit</button>
            </fieldset>
        </form>

    </div>
)
}

export default Form2
