import React from "react";

const BasicInfoTable = ({connections, work}) => {
	return (
		<table className="table table-striped table-responsive table-bordered">
			<tbody>
				<tr>
					<th>Group Of Affiliation</th>
					<td>{connections.groupAffiliation}</td>
				</tr>

				<tr>
					<th>Relatives</th>
					<td>{connections.relatives}</td>
				</tr>
				<tr>
					<th>Occupation</th>
					<td>{work.occupation}</td>
				</tr>

				<tr>
					<th>Base</th>
					<td>{work.base}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BasicInfoTable;
