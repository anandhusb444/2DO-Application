import React, { useState } from 'react'
import '../Style/Todo.css'
import logo from'../images/icon.png'

function Todo() {

  const [task, setTask] = useState("");
  const [list,setList] = useState([]);

  const AddTask = () =>
  {
      if(!task.trim()) return;
      setList([...list,task]);
      setTask(""); 
  }

  const DoneTask = () =>
  {
      
  }

  const DeletTask = (index) => 
  {
      const update = list.filter((_,i) => i != index);
      setList(update);
  }


  return (
    <>
        <div className='container'>
            <div className='todo'>
                <h2>TO DO - App <img src={logo} alt="todo picture" /></h2>

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
                  {list.map((task,index) => (
                    <li key={index}>{task} 
                        <span onClick={() => DeletTask(index)}>&times;</span>
                    </li>
                    
                  ))}
                </ul>

            </div>
        </div>
    </>
  )
}

export default Todo
