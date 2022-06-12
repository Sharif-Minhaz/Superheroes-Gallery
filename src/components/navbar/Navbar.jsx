import React from "react";
import SearchBox from "./SearchBox";
import { charCategory } from "../../characters";

const Navbar = ({ handleSubmit, handleSearch, handleCategory }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top nav-box-shadow">
			<div className="container-fluid col-md-7 col-12">
				<a className="navbar-brand me-4" href="#">
					<img src="/images/brand.png" height={40} alt="logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 category-list">
						<li className="nav-item me-3">
							<span
								className="text-uppercase"
								onClick={() => handleCategory(charCategory.heroes)}
							>
								Heroes
							</span>
						</li>
						<li className="nav-item">
							<span
								className="text-uppercase"
								onClick={() => handleCategory(charCategory.villains)}
							>
								Villains
							</span>
						</li>
					</ul>
					{/* ==============search box component============== */}
					<SearchBox handleSubmit={handleSubmit} handleSearch={handleSearch} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
