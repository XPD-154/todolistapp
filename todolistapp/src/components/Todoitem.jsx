import styles from "./todoitem.module.css"

//component to display todolist item receiving items as props
export default function Todoitem({item, todos, setTodos}){

    //function to handle the delete button
    function handleDelete(item){

        console.log("delete button clicked", item);
        
        //reset the todolist by removing the one that equals item
        setTodos(todos.filter((todo)=>todo!==item));
    }
    
    return(
        <div className={styles.item}>
            <div className={styles.itemName}>
                {item}
                <span>
                    <button onClick={() => handleDelete(item)} className={styles.deleteButton}>x</button>
                </span>
            </div>
            <hr className={styles.line}/>
        </div>
    )

}