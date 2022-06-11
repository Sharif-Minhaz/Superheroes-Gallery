import React from "react";

const SearchBox = ({ handleSearch, handleSubmit }) => {
	return (
		<form className="d-flex" onSubmit={handleSubmit}>
			<input
				className="form-control me-2"
				type="search"
				placeholder="Search here..."
				aria-label="Search"
				onChange={handleSearch}
				required
			/>
			<button className="btn btn-outline-success" type="submit">
				Search
			</button>
		</form>
	);
};

export default SearchBox;
