import React from "react";

const PowerStatsTable = ({ powerStats }) => {
	return (
		<table className="table table-striped table-responsive table-bordered">
			<tbody>
				{powerStats.hasOwnProperty("combat") && (
					<tr>
						<th>Combat</th>
						<td>{powerStats.combat}</td>
					</tr>
				)}
				<tr>
					<th>Intelligence</th>
					<td>{powerStats.intelligence}</td>
				</tr>
				<tr>
					<th>Durability</th>
					<td>{powerStats.durability}</td>
				</tr>
				<tr>
					<th>Power</th>
					<td>{powerStats.power}</td>
				</tr>
				<tr>
					<th>Speed</th>
					<td>{powerStats.speed}</td>
				</tr>
				<tr>
					<th>Strength</th>
					<td>{powerStats.strength}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default PowerStatsTable;
