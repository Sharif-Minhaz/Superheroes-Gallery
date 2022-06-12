import React from "react";
import Accordion from "./Accordion";

const Results = ({ data }) => {
	if (data === "Hero Not Found") {
		return (
			<p className="lead text-center py-4">Superhero Not Found. Try Different Keywords.</p>
		);
	} else if (typeof data === "object" && !Array.isArray(data)) {
		return (
			<Accordion
				id={data.id}
				name={data.name}
				titleImg={data.images.sm}
				image={data.images.sm}
				appearance={data.appearance}
				biography={data.biography}
				connections={data.connections}
				powerStats={data.powerstats}
				work={data.work}
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
					titleImg={character.images.sm}
					image={character.images.sm}
					appearance={character.appearance}
					biography={character.biography}
					connections={character.connections}
					powerStats={character.powerstats}
					work={character.work}
				/>
			))}
		</>
	);
};

export default Results;
