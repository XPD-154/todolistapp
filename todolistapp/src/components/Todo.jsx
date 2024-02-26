import { useState } from "react"
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

//component to set todolist items
export default function Todo(){

    //set array to stack todolistd items
    const [todos, setTodos] = useState([]);

    //count the total number of completed todos
    const completedTodos = todos.filter((todo)=>todo.done).length;

    //count the total number of todos
    const totalTodos = todos.length

    return(
        <div>

            {/*Form component for collecting the todo list items*/}
            <Form todos={todos} setTodos={setTodos}/>

            {/*Todolist component for the display of todolist items*/}
            <TodoList todos={todos} setTodos={setTodos}/>

            {/*Footer componenet*/}
            <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
        </div>

    )
}