import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container">
            <div className="shadow mt-5 p-5">
                <h3 className="text-center text-light bg-dark p-2" id="addTodo">Add A Todo</h3>
                <form onSubmit={submit}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="title" className="form-label">Todos Title</label>
                        <input type="text" value={title} onChange={(e)=>(setTitle(e.target.value))} className="form-control" id="title"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Descreption</label>
                        <input type="text" value={desc} onChange={(e)=>(setDesc(e.target.value))} className="form-control" id="desc"/>
                    </div>
                    <button type="submit" className="btn btn-outline-success btn-sm">Add Todo</button>
                </form>
            </div>
        </div>
    )
}
