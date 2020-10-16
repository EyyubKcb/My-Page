import React from 'react'

const Todo = ({text,todos,setTodos,todo}) => {
    const emirhan = document.getElementsByClassName('trash-btn')
    const deleteHandler  = ()=>{
        emirhan.classList.add('fall')
        setTodos(todos.filter((el)=>el.id !== todo.id))
    }
    const completehandler = ()=>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return{
                    ...item,completed:!item.completed
                }   
            }
            return item
        }))
    }
    
    return ( 
        <div className="todo">
            {
                    <>
                    <li className={`todo-item ${todo.completed  ? "completed":"" }`}>{text}</li>
                        <button onClick={completehandler} className="complete-btn">
                            <i className="fas fa-check"></i>
                        </button>
                        <button onClick={deleteHandler} className="trash-btn">
                            <i className="fa fa-trash"></i>
                        </button>
                    </> 
            }
        </div>
    )
}

export default Todo
