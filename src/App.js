import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Pages/Main";
import NavigationBar from "./Components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import AccidentInfo from "./Pages/AccidentInfo";

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/accidentInfo" element={<AccidentInfo />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
