import React from "react";
import "./Card.css";
function Popup({ items }) {
	console.log(items);
	return (
		items !== "nothing" && (
			<div className="recipePopup">
				<h3>{items[0].recipe.label}</h3>
				<img src={item.recipe.image} alt="recipe-image" />
				<p className="">{items[0].recipe.totalTime} min</p>
				<p className="">{items[0].recipe.calories} kcal</p>
				<p className="">label</p>
				<a
					className=""
					href={items[0].recipe.url}
					rel="noopener noreferrer"
					target="_blank"
				>
					Recipe
				</a>
			</div>
		)
	);
}

export default Popup;
