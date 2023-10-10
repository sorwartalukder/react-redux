import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosRequest } from "../Services/Actons/TodosAction";

function Todos() {
    const { todos, isLoading, error } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodosRequest())
    }, [])
    return (
        <div>
            <h1>React Redux</h1>
            {isLoading && <h1>Loading...</h1>}
            {error && <p>{error}</p>}
            {todos[0] && <section className="todos">
                {todos.map(todo => <article key={todo.id} className="todo">
                    <p>User id: {todo.userId}</p>
                    <p>Title: {todo.title}</p>
                </article>)}
            </section>
            }
        </div>
    );
}

export default Todos;
