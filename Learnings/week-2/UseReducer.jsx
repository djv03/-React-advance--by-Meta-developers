//this is intro to usereducer hook , let us see  what is its use

//it is widely considered as substitute of useState hook, then why we are using useState in first place

//simply "useReducer is superpower useState"
import React from 'react'
import { useReducer } from 'react'
function Usereducer() {
    const reducerfunc = (state, action) => {
        if (action.type === 'buy_raw') {
            return { money: state.money - 100 }
        }
        if (action.type === 'sell') {
            return { money: state.money + 400 }
        }
        return state;
    }
    const initialState = { money: 100 };
    const [state, dispatch] = useReducer(reducerfunc, initialState)
    return (
        <div>
            <h1>available balance:{state.money}</h1>
            <button onClick={() => dispatch({ type: 'buy_raw' })} style={{ padding: '13px' }}>buy dhana/marcha</button>
            <button onClick={() => dispatch({ type: 'sell' })} style={{ padding: '13px' }}>sell 1kg Bhajiya</button>
        </div>
    )
}

export default Usereducer

//the question you might ask: how to decide wheather use useState of useReducer

//  when a you have to spend multiple states and processes inside useState then use useReducer 

//but when we get one states or func with single stage of execution then go with useState