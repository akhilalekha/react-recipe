import React from "react";
import "./Ingrd.css";

function Ingrd({ image, text, weight }) {
	return (
		<div className="ingrdBox">
			<div className="imageBox">
				<img className="content ingrdImage" src={image} alt="ingredient" />
			</div>
			<p className="content ingrdText">{text}</p>
			<p className="content ingrdWeight">{Math.floor(weight)}g</p>
		</div>
	);
}

export default Ingrd;
