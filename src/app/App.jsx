import React, { Component } from "react";
import "./App.css";
import Navbar from "../components/navbar/Navbar";
import Character, { charCategory } from "./../characters";
import Loading from "../components/Loading";
import Results from "../components/results/Results";
import Footer from "../components/Footer";

const characters = new Character(charCategory.heroes);

class App extends Component {
	state = {
		results: {}, // results.category results.data
		searchTerm: "",
		isLoading: true,
	};

	navbarPosition = React.createRef();

	componentDidMount() {
		this.getCharactersInfo();
	}

	getCharactersInfo = () => {
		this.setState({ isLoading: true });
		characters
			.getInfo()
			.then((data) => {
				this.setState({ results: data, isLoading: false });
			})
			.catch((err) => this.errorHandler(err));
	};

	errorHandler = (err) => {
		console.error(err);
		alert("Something went wrong!");
		this.setState({ isLoading: false });
	};

	handleSearch = (event) => {
		this.setState({ isLoading: true });
		this.setState({ searchTerm: event.target.value, isLoading: false });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		characters
			.search(this.state.searchTerm)
			.then((data) => {
				this.setState({ results: data, isLoading: false, searchTerm: "" });
				characters.setSearchTerm("");
				event.target.reset();
			})
			.catch((err) => this.errorHandler(err));
	};

	handleCategory = (category) => {
		this.setState({ isLoading: true });
		characters
			.changeCategory(category)
			.then((data) => {
				console.log(category);
				console.log(data);
				this.setState({ results: data, isLoading: false });
			})
			.catch((err) => this.errorHandler(err));
	};

	gotoTop = () => {
		window.scroll(0, this.navbarPosition.current.scrollTop);
	};

	render() {
		return (
			<>
				<Navbar
					ref={this.navbarPosition}
					category={this.state.results.category}
					handleSubmit={this.handleSubmit}
					handleSearch={this.handleSearch}
					handleCategory={this.handleCategory}
				/>
				<div className="container-fluid" style={{ marginTop: "19px" }}>
					<div className="row">
						{this.state.isLoading ? (
							<Loading />
						) : (
							<Results data={this.state.results.data} />
						)}
						<div className="col-md-7 col-12 m-auto mt-2 mb-4">
							<button
								className="btn btn-primary me-3"
								onClick={this.getCharactersInfo}
							>
								Load New Characters
							</button>
							<button className="btn btn-secondary" onClick={this.gotoTop}>
								Go to top
							</button>
						</div>
					</div>
				</div>

				<Footer />
			</>
		);
	}
}

export default App;
