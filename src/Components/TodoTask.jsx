import React, { useContext } from 'react'
import {CiSquareCheck} from 'react-icons/ci';
import {MdDelete} from "react-icons/md"
import {FaEdit} from "react-icons/fa"
import { TodoContect } from './TodoContect/TodoContect';
const TodoTask = () => {

    const {task,handleEdit,handlecomplete,handledelete,handleremoveall}=useContext(TodoContect)

    
  return (

    
    <div>
        <ul >
            {
                task.map((taketask)=>( <li className={`flex justify-between border-b-2 px-2 py-1 ${taketask.complete?"line-through":""} items-center` }key={taketask.id}>
                    <div className='flex gap-3'>
                        <span className='cursor-pointer ' onClick={()=>handlecomplete(taketask.id)}>
                            <CiSquareCheck size ={25}/>
                        </span>
                        <span>{taketask.tittle}</span>
                    </div>
                    <div className='flex gap-3'>
                        <span className='cursor-pointer' onClick={()=>handledelete(taketask.id)} >
                            <MdDelete size={25}/>
                        </span>
                        <span className='cursor-pointer' onClick={()=>handleEdit(taketask.id)}>
                            <FaEdit size={25}/>
                        </span>
                    </div>
                </li>
                ))
            }
       
        </ul>
        {
            task.length>=1?<button className='bg-red-500 rounded-md py-1 px-2 hover:bg-red-300 text-center font-bold mt-4' onClick={handleremoveall}>Remove all</button>:""
        }
       
      
    </div>
  )
}

export default TodoTask
