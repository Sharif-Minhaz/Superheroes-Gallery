import React from "react";
import Figure from "./Figure";
import AppearanceTable from "./data-tables/AppearanceTable";
import BiographyTable from "./data-tables/BiographyTable";
import PowerStatsTable from "./data-tables/PowerStatsTable";
import BasicInfoTable from "./data-tables/BasicInfoTable";

const Accordion = ({
	id,
	name,
	titleImg,
	image,
	appearance,
	biography,
	connections,
	powerStats,
	work,
}) => {
	const searchQuery = "https://www.google.com/search?q=" + name + "+superhero";
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
						<img className="image-cropper" src={titleImg} alt="title_img" />
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
						{/* Figure component */}
						<div className="row">
							<div className="col-xl-3 col-md-5 col-12">
								<Figure image={image} name={name} />
							</div>
							<div className="col-xl-9 col-md-7 col-12">
								<h3 className="font-monospace mb-3">Appearance</h3>
								<AppearanceTable appearance={appearance} />
							</div>
							<div className="col-12">
								<h3 className="font-monospace mt-3">More Details</h3>
								<hr />
								<p>
									<strong>Note:</strong> We are only providing basic and short set
									of details about <strong>{name}</strong>. If you need more and
									deeper information about <strong>{name}</strong> please
									<a
										className="text-decoration-none"
										href={searchQuery}
										target="_blank"
									>
										{" "}
										visit
									</a>{" "}
									&amp; find suitable link from there or keep reading with us.
								</p>
							</div>
							<div className="col-12">
								<h3 className="font-monospace my-3">Biography</h3>
								<BiographyTable biography={biography} />
							</div>
							<div className="col-12">
								<h3 className="font-monospace my-3">Basic Information</h3>
								<BasicInfoTable work={work} connections={connections} />
							</div>
							<div className="col-12">
								<h3 className="font-monospace my-3">Power Stats</h3>
								<PowerStatsTable powerStats={powerStats} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
