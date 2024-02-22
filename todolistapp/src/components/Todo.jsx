import { useState } from "react"
import Form from "./Form";
import TodoList from "./TodoList";

//component to set todolist items
export default function Todo(){

    //set array to stack todolistd items
    const [todos, setTodos] = useState([]);

    return(
        <div>

            {/*Form component for collecting the todo list items*/}
            <Form todos={todos} setTodos={setTodos}/>

            {/*Todolist component for the display of todolist items*/}
            <TodoList todos={todos} setTodos={setTodos}/>

        </div>
    )
}