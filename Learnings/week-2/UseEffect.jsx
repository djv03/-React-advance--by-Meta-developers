//this is the intro to the useeffect hook 

//but first let us understand why we need it in the first place?

//so there is 2 type of function

//pure function: get same output on same input for no matter how mant time we ran it
//impure function: has some part of it which is depended on the outer of the function ex: console.log, geolocation

//so useEffect hook is used to hadle those "impurities " in functions

// IMP: use effect will run as same time as state of the page changes
import React, { useEffect } from 'react'
import { useState } from 'react'

function UseEffect() {
    const addthisData=['mumbai','kolkata']
    const[data, setData]=useState([])
    useEffect(()=>{
        setData(...data,addthisData)
        console.log(data)
    },[ ])
  return (
    <div>
        
        {data.map((k) => {
                    return <ul >
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold'> {data[k]} </div>
                           
                        </div>
                    </ul>
                })}
    </div>
  )
}

export default UseEffect
