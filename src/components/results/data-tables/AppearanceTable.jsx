import React from "react";

const AppearanceTable = ({ appearance }) => {
	return (
		<table className="table table-striped table-responsive table-bordered">
			<tbody>
				<tr>
					<th>Eye Color</th>
					<td>{appearance.eyeColor}</td>
				</tr>
				<tr>
					<th>Gender</th>
					<td>{appearance.gender}</td>
				</tr>
				<tr>
					<th>Hair Color</th>
					<td>{appearance.hairColor}</td>
				</tr>
				<tr>
					<th>Height</th>
					<td>
						{!appearance.height.includes("-")
							? appearance.height[0] + " ft, " + appearance.height[1]
							: "Unknown"}
					</td>
				</tr>
				<tr>
					<th>Race</th>
					<td>{appearance.race ? appearance.race : "Unknown"}</td>
				</tr>
				<tr>
					<th>Weight</th>
					<td>
						{!appearance.weight.includes("- lb")
							? appearance.weight[0] + " ft, " + appearance.weight[1]
							: "Unknown"}
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default AppearanceTable;
