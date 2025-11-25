import React, { useState } from 'react'
import '../Style/Todo.css'
import logo from '../images/slack.png'
import { Toaster, toast } from "sonner";



function Todo() {

  const notify = () => toast.error("Enter your task")

  const [task, setTask] = useState("");
  const [list,setList] = useState([]);

  const AddTask = () =>
  {
    if(task === "")
    {
      notify();
      console.log("Clicked")
    }

      if(!task.trim()) return;
      setList([...list,{text:task,completed:false}]);
      setTask(""); 
  }

  const DoneTask = (index) =>
  {
      const doneTask = [...list];
      doneTask[index].completed = !doneTask[index].completed
      setList(doneTask);
  }

  const DeletTask = (index) => 
  {
      const update = list.filter((_,i) => i != index);
      setList(update);
  }

  return (
    <>
   <Toaster position="top-center" richColors />
        <div className='container'>
            <div className='todo'>
                <h2>Task Manager<img src={logo} alt="todo picture" /></h2>

                <div className='row'>
                    <input 
                    type='text' 
                    placeholder='Add you task' 
                    id="input-box"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}></input>
                    <button id='addBtn' onClick={AddTask}>Add</button>
                </div>

                <ul id='list-view'>
                  {list.map((item,index) => (
                  
                    <li key={index}
                       onClick={() => DoneTask(index)}
                        className={item.completed ? "checked" : ""}>
                          {item.text} 
                        <span className='material-symbols-outlined' onClick={(e) => {e.stopPropagation(); DeletTask(index)}}>close</span>
                    </li>
                    
                  ))}
                </ul>

            </div>
        </div>
    </>
  )
}

export default Todo
