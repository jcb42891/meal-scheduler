import React, { useState, useEffect } from "react";
const App = () => {
  let [meals, setMeals] = useState(null);

  useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => setMeals(data));
  }, []);

  return (
    <div>
      <h1>Welcome to the meal planner!</h1>

      <h3>Here are the meals we have so far:</h3>
      <ul>{meals && meals.map((m) => <li>{m.name}</li>)}</ul>
    </div>
  );
};
export default App;
