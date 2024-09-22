import React from 'react'

function Task({title,description,delete_button,index}) {
  return (
    <div className='Task'>
        <div>
      <p className='title'>{title}</p>
      <span className='descrip'>{description}</span>
      </div>
      <button classNName={index} onClick={()=>(delete_button(index))}>-</button>
    </div>

  )
}

export default Task;
