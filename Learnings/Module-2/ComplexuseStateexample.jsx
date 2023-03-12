//tutorial on complex usecases of useState

import React, { useState } from 'react'

function ComplexuseStateexample() {
    const [greeting, setGreeting] = useState(
        { greet: "ready to dive in???",
            place:" " });
    console.log(greeting, setGreeting);

    const branches=["surat","baroda","ahemadabad","mumbai"];

    //this method is not recoomendable, but it works
    //   function updateGreeting() { 
    //     setGreeting({ greet: "Hello, World-Wide Web" }); 
    //   } 
    //   above method is not recommended cause: if object has several attribute, usestate has to update it all despite wanting change in only 1


    //so the correcct method lies here
    // function updateGreeting() {
    //     const newGreet = { ...greeting };
    //     newGreet.greet = "Welcome to Jitubhai na bhajiya"
    //     setGreeting(newGreet);
    // }
    //here all changes are kept in new varibale called newgreet 
    // so in line:15 you would change your desired key:value and it will not change the entire obj


    //now use more complex objects to see how to use useState in it
    function updateGreeting() { 
        setGreeting(prevState => { 
            return {greet:"welcome to jitubhai na bhajiya", place: "surat"} 
        }); 
      } 
      function changeplace(){
        setGreeting(prevState => { 
            return {...prevState, place: "baroda"} 
        }); 
        //IMP: here prevState is very imp here is why
        // and this is the previous value of the greeting variable. In other words, it makes a copy of the prevState object, and updates only the place property on the copied object. It then returns a brand-new object: 
    }
    //djv idea: can something such that each time button clicked the place will put data from places array!!!
                // (tried but not implenmented) may be cause of object destructuring 
    return (
        <div>
            <h1>{greeting.greet}</h1>
            <h2>place order from your nearest branch: {greeting.place}</h2>


            <button onClick={updateGreeting}>enter the world of taste</button>
            <button onClick={changeplace}>change the branch</button>

        </div>
    )
}

export default ComplexuseStateexample
