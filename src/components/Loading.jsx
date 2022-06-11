import React from "react";

function Loading(props) {
	return (
		<div className="d-flex align-items-center col-md-7 col-12 m-auto my-3">
			<strong>Loading...</strong>
			<div
				className="spinner-border text-danger ms-auto"
				role="status"
				aria-hidden="true"
			></div>
		</div>
	);
}

export default Loading;
