import classes from "./navbar.module.css";
import React from "react";
import SearchBox from "./SearchBox";

const Navbar = ({ handleSubmit, handleSearch }) => {
	return (
		<nav
			className={
				"navbar navbar-expand-lg navbar-light bg-light fixed-top " + classes.navBoxShadow
			}
		>
			<div className="container-fluid col-md-7 col-12">
				<a className="navbar-brand" href="#">
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
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item me-2">
							<button>Heroes</button>
						</li>
						<li className="nav-item">
							<button>Villains</button>
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
