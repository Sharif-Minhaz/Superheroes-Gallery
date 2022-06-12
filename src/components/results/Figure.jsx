import React from "react";

const Figure = ({ image, name }) => {
	return (
		<div className="card superhero-card" title={name} style={{ marginTop: "4px" }}>
			<img src={image} alt="superHeroes" />
			<ul className="list-group list-group-flush">
				<li className="list-group-item text-center text-heading">{name}</li>
			</ul>
		</div>
	);
};

export default Figure;
