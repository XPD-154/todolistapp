import Todoitem from "./Todoitem"
import styles from "./todolist.module.css"

//create a variable for inline styling
const todolistItemStyle = {color: "blue", fontSize: "20px"};

//component for displaying todolist items receiving the state variable array as a props
export default function TodoList({todos, setTodos}){

    //create a duplicate of the todolist and sort it out based on the items that are done
    const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))

    return(

        //looping through the array received as props to display items on the list
        //Also contains the Todoitem component to receive items from todos array
        <h4 className={styles.list}>{sortedTodos.map(item=> <Todoitem key={item.name} item={item} todos={todos} setTodos={setTodos} />)}</h4>
    );
}