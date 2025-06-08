import { useState } from "react";

export default function Form ({todoList, setTodoList}) {
    const[todo, setTodo] = useState("")
    function handelSubmit(e) {
        e.preventDefault();
        setTodoList([...todoList ,todo]);
        setTodo("")
    }
    return (
        <>
            <form onSubmit={handelSubmit}>
                <input 
                    onChange={(e)=>setTodo(e.target.value)} 
                    type="text" 
                    value = {todo} 
                />
                <button type = "submit">Add</button>
            </form>
        </>
    )
}