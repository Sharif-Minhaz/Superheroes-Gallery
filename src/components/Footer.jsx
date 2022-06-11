import React from "react";

const Footer = (props) => {
	return (
		<footer className="mt-auto">
			<div className="text-center p-3 bg-secondary text-white">
				© 2022 Copyright:
				<a
					className="text-decoration-none"
					style={{ color: "#e3e6ff" }}
					href="https://github.com/Sharif-Minhaz"
				>
					{" "}
					Sharif Md. Minhaz
				</a>
			</div>
		</footer>
	);
};

export default Footer;
