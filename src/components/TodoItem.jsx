import styles from "./todoitem.module.css";

export default function TodoItem({item, todoList, setTodoList}){
    function handleDelete (item){
        setTodoList(todoList.filter((todo)=> todo !== item))
    }
    function handelClick (name){
        const NewArray = todoList.map((x)=> x.name === name ? {...x, done : !x.done } : x);
        setTodoList(NewArray)
    }
    const className =  item.done ? styles.completed : "";
    return (
        <div className={styles.item}> 
            <div className = {styles.itemName}>
                <span onClick={()=>handelClick(item.name)}  className={className}>  
                    {item.name}
                </span>
                <span>
                    <button onClick={()=>handleDelete(item)} className = {styles.deleteButton}>x</button>
                </span>    
            </div> 
          
            <hr className={styles.line}/>
        </div>
    )
}
