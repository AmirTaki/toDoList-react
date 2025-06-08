import { useState } from "react";
import styles from "./form.module.css"

export default function Form ({todoList, setTodoList}) {
    const[todo, setTodo] = useState("")
    function handelSubmit(e) {
        e.preventDefault();
        setTodoList([...todoList ,todo]);
        setTodo("")
    }
    return (
        <>
            <form className={styles.todoform} onSubmit={handelSubmit}>
                <div className={styles.inputContainer}>
                   <input 
                    className={styles.modernInput}
                    placeholder="Enter todo item..."
                    onChange={(e)=>setTodo(e.target.value)} 
                    type="text" 
                    value = {todo} 
                    />
                    <button className={styles.modernButton} type = "submit">Add</button>
                </div>
            </form>
        </>
    )
}