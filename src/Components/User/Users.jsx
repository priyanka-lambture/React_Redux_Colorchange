import React,{useState} from 'react';
import { createStore } from 'redux';

function Users({props}) {

  const [value,setvalue]=useState("")

  const reducer = (state=value,action)=>{
    if(action.type == "login"){
      return state = "Login Success";
    }else{
      return state = "Login Fail"
    }
  }

const store = createStore(reducer);

store.subscribe(()=>{
  // alert(store.getState());
  setvalue(store.getState());
})

  return (
    <div>
      <h1 className='text-center font-bold text-2xl 
      text-red-500'>{props.Greet}CNC WEB WORLD</h1>
      <h2 className='text-center font-bold text-2xl 
      text-purple-500 ' >{value}</h2>
        <button className='bg-blue-600 rounded px-2 py-2 ms-8 text-white'
        onClick={()=>store.dispatch({
            type : "login" //action
        })}>Login</button>
    </div>
  )
}

export default Users
