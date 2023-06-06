//in this tutotrial we are going to learn about spread operator

//let us unserstand it by example

import React from 'react'

function SpreadOp() {
    const order={
        id:1,
        userName:'kamlesh',
        item:'italian pizza',
        price:'300rs'
    }

    const addedOrder={
        ...order,
        item:'pizza pasta'
    }
    function orderList(){
        return(
            <></>
        )
    }
  return (
      <div>
        <h1>
      {addedOrder.item}
        </h1>
      <br />
      {addedOrder.price}
    </div>
  )
}


 export default SpreadOp
