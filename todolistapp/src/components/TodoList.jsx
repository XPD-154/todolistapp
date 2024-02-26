import Todoitem from "./Todoitem"
import styles from "./todolist.module.css"

//create a variable for inline styling
const todolistItemStyle = {color: "blue", fontSize: "20px"};

//component for displaying todolist items receiving the state variable array as a props
export default function TodoList({todos, setTodos}){
    return(

        //looping through the array received as props to display items on the list
        //Also contains the Todoitem component to receive items from todos array
        <h4 className={styles.list}>{todos.map(item=> <Todoitem key={item.name} item={item} todos={todos} setTodos={setTodos} />)}</h4>
    );
}