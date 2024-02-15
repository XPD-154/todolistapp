import { useState } from "react"
import Todoitem from "./Todoitem"

//using inline styling
const todolistItemStyle = {color: "blue", fontSize: "20px"};

//component to set todolist items
export default function Todo(){

    //set variable to collect todolist items
    const [todo, setTodo] = useState("");

    //set array to stack todolistd items
    const [todos, setTodos] = useState([]);

    //function to handle what happens on Submit
    function handleSubmit(e){
        //prevents refresh on form submit
        e.preventDefault();

        //show item submitted
        console.log(todo);

        //place todolist items in the array variable
        setTodos([...todos, todo]);

        //clear the input element
        setTodo("")
    }

    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label className="label">Enter a Todo Item</label>
                <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
                <button type="submit" >Add</button>
            </form>
            {/*use inline styling*/}
            <h4 style={todolistItemStyle}>{todos.map(item=><Todoitem key={item} item={item}/>)}</h4>
        </div>
    )
}