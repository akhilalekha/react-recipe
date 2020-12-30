import React from "react";
import "./Card.css";

function Card({ image, name, calories }) {
	return (
		<div className="card">
			<img className="recipeImage" src={image} alt="" />
			<div className="recipeDetails">
				<h4>{name}</h4>
				<p>{Math.floor(calories)} kcal</p>
			</div>
		</div>
	);
}

export default Card;
