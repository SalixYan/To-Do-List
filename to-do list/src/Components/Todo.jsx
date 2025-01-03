import './CSS/Todo.css';
import { useState, useRef, useEffect } from 'react';
import TodoItems from './TodoItems';
const Todo = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = ()=>{
        setTodos([...todos, {no:count, text:inputRef.current.value, display:""}])
        inputRef.current.value = "";
        localStorage.setItem('todos_count', count);
        setCount(count+1);
    }

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem('todos')));
        setCount(JSON.parse(localStorage.getItem('todos_count')));
    },[])
        //[] -> triggered by page reload.

    // use this useeffect when the todos get updated
    useEffect(()=>{
        //set time out to wait on reload.
        setTimeout(()=>{
            console.log(todos);
            // store the information in local storage.
            localStorage.setItem('todos', JSON.stringify(todos));
            // 'todos' is the key name.
            // to store the data in the local storage, we have to convert it into string.
            // JSON.stringify() is a built-in JavaScript function that converts a JavaScript object or value to a JSON string.
            }, 100)
        },[todos]
    )
    // to solve the issue that the data disappeared after refreshing, we need to use another useEffect.
    

    return (
        <div className='todo'>
            <div className="todo-header">
                To-Do List
            </div>
            <div className="todo-add">
                <input className="todo-input" type="text" placeholder="Add Your Task" ref={inputRef}/>
                <div onClick ={()=>{add()}} className="todo-add-btn">
                ADD
                </div>
            </div>
            
            <div className="todo-list">
                {todos.map((item, index)=>{
                    return <TodoItems key={index} no={item.no} display={item.display} text={item.text} setTodos={setTodos}/>
                    })}
            </div>
        </div>
    )
}

export default Todo;