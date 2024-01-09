import { useState, useReducer, useRef } from 'react'
import './App.css'

let todo = [{
  task : "Morning walk",
  visibility : false
}]

function reducer(array, action){
  switch (action.type) {
    case 'Add':
      return[...array, {task: action.ta, visibility:true}]
      
    case 'Toggle':
      return array.map((item,index)=>{
        if(action.index === index){
          return {...item , visibility : !item.visibility};
        }else{
          return item
        }
      })
  
    default:
      return array;
      break;
  }
}

function App() {

  let [theArray, dispatch] = useReducer(reducer,todo);
  let [inpTask, setInpTask] = useState('')
  let refre = useRef(null)


  function handleChange(e){
    setInpTask(e.target.value);
  }

  function handleTask(){
    dispatch({type:'Add', ta : inpTask })
  }

  function handleToggle(index){
    dispatch({type:'Toggle', index})
  }

  function handleThis(){
    refre.current.focus();

  }

  return (
    <div className='cd'>
      <div className='divone'>
      <input type="text" onChange={(e) => handleChange(e)} ref ={refre} />
      <button onClick={handleTask}>Add Task</button>
      </div>
      {
        theArray.map((item,index) =>{
          return(
            <div className='divdiv' key={index}>
              <p>{(item.visibility) ? item.task : "The content is hidden"}</p>
              <button onClick={()=> handleToggle(index)}>Toggle</button>
            </div>
          )
        })
      }  
      <button onClick={handleThis}>Get to Wriring</button>
    </div> 
  )
}

export default App