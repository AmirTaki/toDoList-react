import styles from "./todoitem.module.css";

export default function TodoItem({item, todoList, setTodoList}){
    function handleDelete (item){
        setTodoList(todoList.filter((todo)=> todo !== item))
    }
    return (
        <div className={styles.item}> 
            <div className = {styles.itemName}>
                {item}
                <span>
                    <button onClick={()=>handleDelete(item)} className = {styles.deleteButton}>x</button>
                </span>    
            </div> 
          
            <hr className={styles.line}/>
        </div>
    )
}