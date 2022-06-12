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

	componentDidMount() {
		characters
			.getInfo()
			.then((data) => {
				this.setState({ results: data, isLoading: false });
			})
			.catch((err) => this.errorHandler(err));
	}

	errorHandler = (err) => {
		console.error(err);
		alert("Something went wrong!");
		this.setState({ isLoading: false });
	};

	handleSearch = (event) => {
		this.setState({ searchTerm: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		characters
			.search(this.state.searchTerm)
			.then((data) => {
				this.setState({ results: data, isLoading: false });
			})
			.catch((err) => this.errorHandler(err));
	};

	handleCategory = (category) => {
		characters
			.changeCategory(category)
			.then((data) => {
				this.setState({ results: data, isLoading: false });
			})
			.catch((err) => this.errorHandler(err));
	};

	render() {
		console.log(this.state.results.data);
		return (
			<>
				<Navbar
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
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default App;
