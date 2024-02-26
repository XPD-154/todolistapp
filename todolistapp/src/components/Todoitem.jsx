import styles from "./todoitem.module.css"

//component to display todolist item receiving items as props
export default function Todoitem({item, todos, setTodos}){

    //function to handle the delete button
    function handleDelete(item){

        console.log("delete button clicked", item);
        
        //reset the todolist by removing the one that equals item
        setTodos(todos.filter((todo)=>todo!==item));
    }

    function handleClick(name){

        console.log("something has been clicked", name)

        //map through the todo items, find the one that matches the name passed into the function and change its object variables
        setTodos(todos.map((todo)=>todo.name===name?{...todo, done:!todo.done}:todo))

    }
    
    //set style of the an item depending on whether or not its completed
    const doneItem = item.done ? styles.completed : ""

    return(
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={doneItem} onClick={() => handleClick(item.name)}>{item.name}</span>
                <span>
                    <button onClick={() => handleDelete(item)} className={styles.deleteButton}>x</button>
                </span>
            </div>
            <hr className={styles.line}/>
        </div>
    )

}