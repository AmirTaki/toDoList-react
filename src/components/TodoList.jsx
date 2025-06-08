import TodoItem from "./TodoItem"
import styles from "./todolist.module.css"
export default function Todolist ({todoList, setTodoList}){
    return (
        <div className={styles.list}>
        {todoList.map((item) =>
            <TodoItem  key = {item} item = {item} todoList = {todoList} setTodoList = {setTodoList}/>)
        }
        </div>
    )
}