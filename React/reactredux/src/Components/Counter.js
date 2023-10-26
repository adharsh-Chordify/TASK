import React from 'react'
import "../App.css"
import { useDispatch, useSelector } from 'react-redux'
import { decNumber, incNumber } from '../actions/action1'


function Counter() {
    const dispatch=useDispatch()
    const state=useSelector((e)=>e.changeTheNumber)

    return (
        <>
            <div className='container mt-5'>
                <h1>Increment/Decrement Counter</h1>
                <h4>Using React and Redux</h4>

                <div class="btn-group mt-2" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary" title='Decrement' onClick={()=>dispatch(decNumber())}>-</button>
                    <input className='w-25 form-control text-center' disabled value={state}></input>
                    <button type="button" class="btn btn-secondary" title='Increment' onClick={()=>dispatch(incNumber(5)) }>+</button>
                </div>

            </div>
        </>
    )
}

export default Counter
