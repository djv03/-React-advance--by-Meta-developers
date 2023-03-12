import React, { useState } from 'react'

function GoalsApp() {
    const [formData, setformData] = useState({ task: "", deadline: "", person: "" });
    const [allTasks, setallTasks] = useState([
        {
            id: 1,
            task: "buy chairs",
            deadline: "tomorrwo",
            person: '400rs/kg'
        },
        {
            id: 2,
            task: "call friend",
            deadline: "weekend",
            person: '350rs/kg'
        }

    ]);

    function changeHandler(e) {
        console.log(e.target.name);
        setformData({ ...formData, [e.target.name]: e.target.value})
    }
    // const completionChangeHandler = (event) => {
    //     setformData({ ...formData,deadline: event.target.value });
    // }
    // const personChangeHandler = (event) => {
    //     setformData({ ...formData, person: event.target.value});
    // }

    function submitHandler(e) {
        e.preventDefault();
        console.log(formData)
        setformData({ item: e.target.value });
        setallTasks([...allTasks, formData]);
    }

    //to render all the tasks
    const showTasks = allTasks.map((item) => {
        const name = `our task is ${item.task} on ${item.deadline} by ${item.person}`
        return (<li key={item.task}>{name}</li>)
    })
    return (
        <div>

            <form onSubmit={submitHandler}>

                <input type="text" placeholder='enter your task' value={formData.task} onChange={changeHandler} />
                <input type="text" placeholder='time of completion' value={formData.deadline} onChange={changeHandler} />
                <input type="text" placeholder='assigned person' value={formData.person} onChange={changeHandler} />

                <button >Add task</button>
            </form>
            {/* rendering the tasks */}
            <ul>
                {showTasks}
            </ul>
        </div>
    )
}

export default GoalsApp
