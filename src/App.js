import { useState } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import './index.css';
function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text: 'going to sleep',
            day: 'every day',
            reminder:false
    
        },
        {
            id:2,
            text:'going to sleep again',
            day: 'sometimes',
            reminder:true
        },
        {
            id:3,
            text: 'going to shopping',
            day: 'friday',
            reminder:true
        }
    ]
)

// delete stuff

const deleteTask = (id) =>{
 setTasks(tasks.filter((task)=>
   task.id!==id
 ))
}

// toggle reminder
const toggleReminder = (id)=>{
  console.log(id)
}
  return (
    <div className="container">
     <Header title="my todo app"/>
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> ) :(
      'no task is available'
    )}

    </div>
  );
}

export default App;
