import { useState } from "react"
import styles from "./form.module.css"

//component for App form receiving a state variable as props
export default function Form({todos, setTodos}){

    //set variable to collect todolist items (variable converted to an object)
    const [todo, setTodo] = useState({name:"", done:false});

    //function to handle what happens on Submit
    function handleSubmit(e){
        //prevents refresh on form submit
        e.preventDefault();

        //show item submitted
        //console.log(todo);

        //place and stack todolist items in the array variable
        setTodos([...todos, todo]);

        //clear the input element
        setTodo({name:"", done:false})
    }

    return(
        <form className={styles.todoForm} onSubmit={(e)=>handleSubmit(e)}>

            <div className={styles.inputContainer}>

                {/*input to collect and display value of what is typed*/}
                <input className={styles.modernInput} type="text" onChange={(e) => setTodo({name:e.target.value, done:false})} value={todo.name} placeholder="Enter a Todo Item"/>

                <button className={styles.modernButton} type="submit" >Add</button>
            </div>
        </form>
    )
}