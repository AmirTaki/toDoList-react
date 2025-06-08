import { useState } from "react";
import styles from "./form.module.css"

export default function Form ({todoList, setTodoList}) {
    // const[todo, setTodo] = useState("")
    const [todo , setTodo] = useState({name : "", done : false});

    function handelSubmit(e) {
        e.preventDefault();
        setTodoList([...todoList ,todo]);
        setTodo({name : "", done : false})
    }
    return (
        <>
            <form className={styles.todoform} onSubmit={handelSubmit}>
                <div className={styles.inputContainer}>
                   <input 
                    className={styles.modernInput}
                    placeholder="Enter todo item..."
                    onChange={(e)=>setTodo({name :e.target.value, done : false})} 
                    type="text" 
                    value = {todo.name} 
                    />
                    <button className={styles.modernButton} type = "submit">Add</button>
                </div>
            </form>
        </>
    )
}