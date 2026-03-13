import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div onClick={() => {toggle(id)}} className='flex items-center justify-between my-3 gap-2'>
        <div className='flex items-center gap-3 flex-1'>
            <img src={isComplete ? tick : not_tick} alt=""  className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 flex-1 break-all ${isComplete ?"line-through" : "" } `}>{text}</p>
        </div>

        <img onClick={(e) => {
          e.stopPropagation();
          deleteTodo(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer' />

    </div>
  )
}

export default TodoItems