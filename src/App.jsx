import React from 'react';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import data from "./data/workouts.json";

export default function App() {

  const [exercises, setExercises] = React.useState(data);

  return (
    <div>
      <Header title="React-workout" />
      <List exercises={exercises} title="List" />
      <Form title="Form" />
      <p>111</p>
    </div>

  );
}
