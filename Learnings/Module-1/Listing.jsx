import React from 'react';
//in this tutorial we are gonna see how the how the listing could be done in the React

//so most of the time in react you are dealing with large data,mostly in in form of array/object/array of objects
//which could come form many places(like api call, server)

// let us take array of 3 items or sake of simplicity

let menuItems=[
    {
        id:1,
        itemName:"bhajiya",
        description:"fried in besan",
        price:'400rs/kg'
    },
    {
        id:2,
        itemName:"Patti",
        description:"crispy chilly chips",
        price:'350rs/kg'
    },
    {
        id:3,
        itemName:"Chips",
        description:"Indian style frech fried ",
        price:'300rs/kg'
    }
]

//so how to render them in the list without writing them all

//so our solution is map() method is
//dont worry! this is the same map() which is used in the array mathod in vanilla JS
//rather it shows beauty of the react here that how intutive it become for the developer to make ui
   


function Listing() {
    //declaring new array varible coz---> map() returns a new array
    //                                    map() takes call back function 

    // (stores each ele of array(menuItem) in to new array(showMenu) with performing function(call back of map) on it )
    const showMenu=menuItems.map((item)=>{

        const name=`price of ${item.itemName} is ${item.price}`

        return(<li>{name}</li>)
    })
  return (
    <div>
        <ul>
            {showMenu}
        </ul> 
    </div>
  )
}

export default Listing
