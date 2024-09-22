import React, { useState } from 'react'
import Task from './Task'


function Cal() {
const [task, setTask] = useState([]);
const [title, settitle] = useState('');
const [description, setdescription] = useState('');
console.log(title,description)
const submitHandler=(e)=>{
  e.preventDefault();
  setTask([...task,{title,description}])
}
  console.log(task)
  const delete_button=(index)=>{
    console.log(index);
    const filtered_Arr=task.filter((val,i)=>{
      return i!== index });
setTask(filtered_Arr);
    
    }
  return (
    <>
    <h3>DAILY TASKS</h3>
    <div className='container'>
      <form onSubmit={submitHandler}>
    <input type="text" placeholder='title' value={title} onChange={(e)=>{
      settitle(e.target.value)
    }} />
     <textarea placeholder='Description' value={description} onChange={(e)=>{
      setdescription(e.target.value)
     }
     }></textarea>
      <button className='btn' type='submit'>Add</button>
      </form>
      {task.map((elem,index)=>(<Task key={index} title={elem.title} description={elem.description} 
      delete_button={delete_button}
      index={index}/>) )}
   
    </div>
    </>
  )
}

export default Cal
