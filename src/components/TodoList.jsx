import TodoItem from "./TodoItem"
export default function Todolist ({todoList}){
    return (
        <>
        {todoList.map((item) => <TodoItem key = {item} item = {item} />)}
        </>
    )
}