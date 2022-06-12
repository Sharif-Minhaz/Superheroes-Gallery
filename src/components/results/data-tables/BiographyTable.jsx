import React from "react";

const BiographyTable = ({ biography }) => {
	return (
		<table className="table table-striped table-responsive table-bordered">
			<tbody>
				<tr>
					<th>Full Name</th>
					<td>{biography.fullName}</td>
				</tr>
				<tr>
					<th>Aliases</th>
					<td>{biography.aliases.join(", ")}</td>
				</tr>
				<tr>
					<th>Alignment</th>
					<td>{biography.alignment}</td>
				</tr>
				<tr>
					<th>Alter Egos</th>
					<td>{biography.alterEgos}</td>
				</tr>
				<tr>
					<th>First Appearance</th>
					<td>{biography.firstAppearance}</td>
				</tr>
				<tr>
					<th>Place Of Birth</th>
					<td>{biography.placeOfBirth}</td>
				</tr>
				<tr>
					<th>Publisher</th>
					<td>{biography.publisher}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BiographyTable;
