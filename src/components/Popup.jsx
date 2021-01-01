import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Popup.css";
import Ingrd from "./Ingrd";
function Popup({ image, name, calories, time, dietlabels, url, ingredients }) {
	console.log(ingredients);
	return (
		<div className="recipePopup">
			<img className="Popup image" src={image} alt="recipe" />
			<div className="Popup content">
				<h3>{name}</h3>
				<div className="popupDetails">
					<p className="popupDetail One">{time} min</p>
					<p className="popupDetail two">{Math.floor(calories)} kcal</p>
					<p className="popupDetail three">
						{dietlabels.map(
							(label) =>
								label && (
									<p className="detailItem three" key={label}>
										{label}
									</p>
								)
						)}
					</p>
				</div>

				<p>Ingredients</p>
				{ingredients.map((item) => (
					<Ingrd
						key={uuidv4()}
						text={item.text}
						image={item.image}
						weight={item.weight}
					/>
				))}
				<a
					className="popupBtn"
					href={url}
					rel="noopener noreferrer"
					target="_blank"
				>
					See full recipe
				</a>
			</div>
		</div>
	);
}

export default Popup;
