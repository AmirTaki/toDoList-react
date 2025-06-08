import styles from "./footer.module.css"

export default function Footer({completeToDoList, totalToDoList}){
    return (
    <div className={styles.footer}>
        <span className = {styles.item}>Completed Todos : {completeToDoList}</span>
        <span className = {styles.item}>Total Todos : {totalToDoList}</span>
    </div>
    )
}