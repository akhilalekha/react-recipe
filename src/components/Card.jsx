import React from "react";
import "./Card.css";

function Card({ image, name, calories, time, dietlabels, url }) {
	return (
		<div className="card">
			<img className="recipeImage" src={image} alt="" />
			<div className="recipeDetails">
				<button className="recipeTitle">{name}</button>
				<p className="detailItem one">{time} min</p>
				<p className="detailItem two">{Math.floor(calories)} kcal</p>
				{dietlabels.map(
					(label) =>
						label && (
							<p className="detailItem three" key={label}>
								{label}
							</p>
						)
				)}

				<a
					className="detailItem recipeBtn"
					href={url}
					rel="noopener noreferrer"
					target="_blank"
				>
					Recipe
				</a>
			</div>
		</div>
	);
}

export default Card;
