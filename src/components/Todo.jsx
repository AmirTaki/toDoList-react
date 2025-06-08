import { useState } from "react"

export default function Todo(){
    const[todo, setTodo] = useState("")
    const [todoList , setTodoList] = useState([]);
    function handelSubmit(e) {
        e.preventDefault();
        setTodoList([...todoList ,todo]);
        setTodo("")
    }
    return(
    <>
        <form onSubmit={handelSubmit}>
            <input 
                onChange={(e)=>setTodo(e.target.value)} 
                type="text" 
                value = {todo} 
            />
            <button type = "submit">Add</button>
        </form>
        {todoList}
        {console.log(todoList)}
    </>
    )
}