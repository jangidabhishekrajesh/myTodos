import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
   
    return (
        <div className="container">
            <div className="shadow mt-5 p-5">
                <h3 className="text-center text-light bg-dark p-2" id="todosList">My Todos</h3>
                {props.todos.length===0? "No Todos to display!":
                 props.todos.map((todo)=>{
                    console.log(todo.sno);
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                        )   
                })
                }
            </div>
        </div>
    )
}
