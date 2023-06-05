//this is my intro to react Hooks
//according to the instructor: it can be frustarting to learn hooks, but stick it around and invest the time upfront, you will get the results



// 1. revising usestate hook

//crux of hook is to write code without setting varible to the new "values" each time it hit some events
//hooks do so by array destucturing:

import React from "react";
import { useState } from "react";


function hooksIntro() {
  const [name, setName] = useState("lemon");
  console.log(useState);
  function update() {
    setName("little lemon")
  }
  //this is to revise array destructuing    
  let vaggies = ["onion", "potato", "carrrot", "cabbage"];
  const [v1, v2, ...rest] = vaggies;
  console.log(v1);
  console.log(v2);
  console.log(rest);

  //and similarly object destructuring
  let dhruvin = {
    myname: "dhruivn",
    city: "surat"
  }
  const { myname, city } = dhruvin;
  console.log(myname);
  console.log(city);

  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={update}
      >click here</button>


    </div>
  )
}

export default hooksIntro
