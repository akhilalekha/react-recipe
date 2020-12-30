import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
const keys = require("../config/keys");

function App() {
	const [items, setItems] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");

	let URI = `https://api.edamam.com/search?q=${query}&app_id=${keys.appID}&app_key=${keys.appKey}`;

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(URI);
		const data = await response.json();
		console.log(data);
		setItems(data.hits);
	};

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	};
	return (
		<div className="App">
			<h1>Recipe app</h1>
			<form className="searchForm" onSubmit={getSearch}>
				<label htmlFor="searchString">Enter your search here: </label>
				<input
					id="searchString"
					type="search"
					value={search}
					onChange={handleChange}
				/>
				<button type="submit">Search</button>
			</form>
			<div className="cardContainer">
				{items.map((item) => (
					<Card
						key={item.recipe.label}
						image={item.recipe.image}
						name={item.recipe.label}
						calories={item.recipe.calories}
					/>
				))}
				{/* <Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card /> */}
			</div>
		</div>
	);
}

export default App;
