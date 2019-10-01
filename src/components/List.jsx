import React from "react";

export default function List({ title, exercises }) {
    console.log(exercises);
    return (
        <section>
            <h1>{title}</h1>
            {
                exercises.map(todo => {
                    return (<div>
                        <p>{todo.equipment}</p>
                        <p>{todo.id}</p>
                        <p>{todo.name}</p>
                        <p>{todo.type}</p>
                    </div>)
                })
            }
        </section>
    )
}