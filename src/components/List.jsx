import React from "react";
import Exercise from "./Exercises";

export default function List({ title, exercises }) {
    console.log(exercises);
    return (
        <section>
            <h1>{title}</h1>
            {
                exercises.map((exercise, index) => 
                    <Exercise key={index} exercise={exercise} />
                )
            }
        </section>
    )
}