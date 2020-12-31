import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Card from "./Card";
// import Popup from "./Popup";
const keys = require("../config/keys");

function App() {
	const [items, setItems] = useState([]);
	const [input, setInput] = useState("");
	const [query, setQuery] = useState("chicken");
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		let URI = `https://api.edamam.com/search?q=${query}&app_id=${keys.appID}&app_key=${keys.appKey}`;
		const getRecipes = async () => {
			const response = await fetch(URI);
			const data = await response.json();
			console.log({ data });
			setItems(data.hits);
			setLoaded(true);
		};
		console.log("test");
		getRecipes();
	}, [query]);

	function handleChange(e) {
		setInput(e.target.value);
	}

	function getSearch(e) {
		e.preventDefault();
		setQuery(input);
		setInput("");
	}
	return (
		<div className="App">
			<h1>Recipe app</h1>
			<form className="searchForm" onSubmit={getSearch}>
				<label htmlFor="searchString"></label>
				<input
					id="searchString"
					type="search"
					value={input}
					placeholder="Search for a recipe"
					onChange={handleChange}
				/>
			</form>
			<button className="searchBtn" type="submit" onClick={getSearch}>
				Search
			</button>
			{/* <Popup items={loaded ? items : "nothing"} /> */}
			<div className="cardContainer">
				{items.map((item) => (
					<Card
						key={uuidv4()}
						image={item.recipe.image}
						name={item.recipe.label}
						calories={item.recipe.calories}
						time={item.recipe.totalTime}
						dietlabels={item.recipe.dietLabels}
						url={item.recipe.url}
						ingredients={item.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
