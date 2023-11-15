import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {

    //state to hold value from input box
    const[range,setRange]=useState("")

    //hook to dispatch a function in action
    const dispatch = useDispatch()

    //component can access the state by using useselector hook
    const count = useSelector((state)=>state.counter.value)

    //range
    console.log(range);

  return (
    <>
      <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
          <h1 style={{fontSize:'85px',color:'grey'}}>{count}</h1>
          <div className='mt-5'>
  
              <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-2' >Increment</button>
              {/* Number method is used to convert string into number */}
  
              <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning ms-3 p-2'>Decrement</button>
  
              <button onClick={()=>dispatch(reset())} className='btn btn-danger ms-3 p-2'>Reset</button>
  
          </div>
      </div>
       {/* input box */}
       <div>
       <input type="text" className='form-control w-100 mt-4' placeholder='Enter the range' style={{borderColor:'burlywood'}} onChange={(e)=>setRange(e.target.value)}/>
     </div>
    </>
  )
}

export default Counter
