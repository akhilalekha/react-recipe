import React, { useEffect, useState } from "react";
import "./App.css";
const keys = require("../config/keys");

function App() {
	let URI = `https://api.edamam.com/search?q=chicken&app_id=${keys.appID}&app_key=${keys.appKey}`;
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		console.log("effect");
		// getRecipes();
	}, []);

	const getRecipes = async () => {
		const response = await fetch(URI);
		const data = await response.json();
		console.log(data);
		setRecipes(data.hits);
	};
	return (
		<div className="App">
			<h1>Recipe app</h1>
			<form className="searchForm">
				<label htmlFor="searchString">Enter your search here: </label>
				<input id="searchString" type="search" />
				<button type="submit">Search</button>
			</form>
		</div>
	);
}

export default App;
