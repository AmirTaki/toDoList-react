import TodoItem from "./TodoItem"
import styles from "./todolist.module.css"
export default function Todolist ({todoList, setTodoList}){
    const listSorted = todoList.slice().sort((a, b)=> Number(a.done) - Number(b.done))
    return (
        <div className={styles.list}>
        {listSorted.map((item) =>
            <TodoItem  
                key = {item.name} 
                item = {item} 
                todoList = {todoList} 
                setTodoList = {setTodoList}
            />
        )
        }
        </div>
    )
}




/*  Sort in js
const list = [1,-345 ,324, 4,52, 4634, 5]
list.sort((a, b)=> a-b )
console.log(list)
*/