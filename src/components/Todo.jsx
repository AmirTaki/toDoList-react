import { useState } from "react"
import Form from "./Form";
import Todolist from "./TodoList";
import Footer from "./Footer";

export default function Todo(){
    const [todoList , setTodoList] = useState([]);
    const completeToDoList = todoList.filter((item)=> item.done).length
    const totalToDoList = todoList.length
    return(
    <>
        <Form  todoList = {todoList} setTodoList = {setTodoList}/>
        <Todolist todoList = {todoList} setTodoList = {setTodoList}/> 
        <Footer completeToDoList = {completeToDoList} totalToDoList = {totalToDoList} />
    </>
    )
}

