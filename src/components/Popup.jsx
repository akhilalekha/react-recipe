import React from "react";
import "./Popup.css";
function Popup({ items }) {
	// console.log(items);
	return (
		items !== "null" && (
			<div className="recipePopup">
				<img className="Popup image" src={items[0].recipe.image} alt="recipe" />
				<div className="Popup content">
					<h3>{items[0].recipe.label}</h3>
					<p className="popupDetail One">{items[0].recipe.totalTime} min</p>
					<p className="popupDetail two">{items[0].recipe.calories} kcal</p>
					<p className="popupDetail three">label</p>
					<a
						className="popupBtn"
						href={items[0].recipe.url}
						rel="noopener noreferrer"
						target="_blank"
					>
						See full recipe
					</a>
				</div>
			</div>
		)
	);
}

export default Popup;
