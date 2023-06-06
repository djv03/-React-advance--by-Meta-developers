//there are two main ways to do so thing    
// containment 
//and specialization

// 1. containment: some components don't know their children ahead of time

// like sidebar or dailogue

import React from 'react'
const Button=({children, BgColor})=>{
    return <button style={{BgColor}}>{children}</button>
}

const Alert=({children})=>{
    return(
        <>
        <div></div>
        <div>{children}</div>
        </>
    )
}

const deleteButton=()=>{
    return <Button BgColor='red'>delete</Button>
}

function Composition() {
  return (
    <div>
      <Alert>
        <h1>delete account?</h1>
        <p>your data will be lost</p>
      </Alert>
    </div>
  )
}

export default Composition

//kuch jyada samaj ni aya , but revert it to it