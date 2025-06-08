import { useState } from "react"
import Form from "./Form";
import Todolist from "./TodoList";

export default function Todo(){
    const [todoList , setTodoList] = useState([]);
    return(
    <>
        <Form  todoList = {todoList} setTodoList = {setTodoList}/>
        <Todolist todoList = {todoList} />        
    </>
    )
}