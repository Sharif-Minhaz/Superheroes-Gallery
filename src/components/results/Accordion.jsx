import classes from "./accordion.module.css";
import React from "react";

const Accordion = ({ id, name, titleImg, image }) => {
	return (
		<div className="col-md-7 col-12 m-auto mb-3 accordion" id={"accordionExample" + id}>
			<div className="accordion-item">
				<h2 className="accordion-header" id={"headingOne" + id}>
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target={"#collapseOne" + id}
						aria-expanded="true"
						aria-controls={"collapseOne" + id}
					>
						<img className={classes.imageCropper} src={titleImg} alt="title_img" />
						{name}
					</button>
				</h2>
				<div
					id={"collapseOne" + id}
					className="accordion-collapse collapse"
					aria-labelledby={"headingOne" + id}
					data-bs-parent={"#accordionExample" + id}
				>
					<div className="accordion-body">
						<img src={image} alt="superHeroes" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
