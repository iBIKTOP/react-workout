import React from "react";

export default function Exercise({ key, exercise }) {
    console.log(exercise);
    return (
        <section>
            <h1>{key}.{exercise.id}</h1>
        </section>
    )
}