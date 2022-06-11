import React from "react";
import Accordion from "./Accordion";

const Results = ({ data }) => {
	if (data === "Hero Not Found") {
		return <p className="lead text-center py-4">{data}. Try Different Keywords.</p>;
	} else if (typeof data === "object" && !Array.isArray(data)) {
		return (
			<Accordion
				id={data.id}
				name={data.name}
				titleImg={data.images.xs}
				image={data.images.sm}
			/>
		);
	}
	return (
		<>
			{data.map((character) => (
				<Accordion
					key={character.id}
					id={character.id}
					name={character.name}
					titleImg={character.images.xs}
					image={character.images.sm}
				/>
			))}
		</>
	);
};

export default Results;
