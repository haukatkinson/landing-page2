import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Cards } from "./cards";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<Jumbotron />
		<Cards />
		</>
	);
};

export default Home;
