import React, { useContext} from 'react'
import TodoTask from './TodoTask'

import { TodoContect } from './TodoContect/TodoContect';

const TodoList = () => {



    const {activity,setactivity,update, handleupdate} = useContext(TodoContect)
   
   
  return (
    <div >
        <section className='text-gray-900 body-font overflow-hidden'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='w-[80%] mx-auto flex flex-wrap'>
                    <div className='lg:w-1/2'>
                        <img
                         alt='ecommer'
                         class=" w-full lg:h-auto h-64 object-cover object-center rounded"
                         src='https://images.unsplash.com/photo-1635959973793-ad3596d03711?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        />
                    </div>
                    <div className='lg:w-[40%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
                        <h2 className='text-gray-900 font-bold mb-5 text-center text-5xl'>
                            Todo
                        </h2>
                        <div className=' mb-4'>
                            <input
                            type='text'
                            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
                            focus:ring-indigo-200 text-base  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
                            duration-200 ease-in-out" 
                            value={activity}
                            onChange={(e)=>{setactivity(e.target.value)}}
                            
                            
                            />
                        </div>
                        {
                            update? <button className='text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600
                            rounded text-lg' onClick={handleupdate}> 
                                Add
                            </button>: <button className='text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600
                        rounded text-lg' onClick={handleupdate}> 
                            update
                        </button>
                        }
                       
                    
                        <TodoTask />
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default TodoList


