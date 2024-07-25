import { createContext, useEffect, useState } from "react";


import { v4 as uuidv4 } from 'uuid';




const TodoContect = createContext()


const TodoFunction = ({children})=>{



    const getlocalstorage=()=>{
        const data = localStorage.getItem("list")
        return data?JSON.parse(localStorage.getItem("list")):[]
    }
    
const [ activity , setactivity ] = useState("")

const [task,settask] = useState(getlocalstorage())

const [ update , setupdate ] = useState(true)

const [ edit, setedit] = useState(null)


useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(task))
},[task])
const handleupdate =()=>{
    if (activity==""){
        alert("Enter the value in the input field ")
    }

    else  if (!update){
        settask(task.map((item)=>{
            if(item.id==edit){
                return{...item,tittle:activity}


                
            }
            return item
           

    }))
    setactivity("")
    setupdate(!update)
    setedit(null)


    }
    else{
   const allactivity = {id:uuidv4(),tittle:activity,complete:false}
    settask([...task,allactivity])
    setactivity("")
    }

}
const handledelete =(i)=>{

    const filteritem =  task.filter((item)=>(
          i!=item.id

      ))
      settask(filteritem)
      

  }

  const handleEdit =(index)=>{
      const finditem = task.find((item)=>(
           index===item.id 
      ))
      setactivity(finditem.tittle)
      setupdate(false)
      setedit(index)
  }
  const handleremoveall = ()=>{
      settask([])
  }

  const handlecomplete =(id)=>{
      settask(task.map((item)=>{
          if(item.id==id){
              return {...item , complete:!item.complete}
          }
          return item 
      }))
  }

const all= {activity,setactivity,task,settask,update,setupdate,edit,setedit,handleupdate , handleEdit,handlecomplete,handledelete,handleremoveall}


    return (
        <TodoContect.Provider value={all}>
            {children}
        </TodoContect.Provider>
    )
}

export{TodoContect,TodoFunction}