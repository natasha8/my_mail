import React from "react";

//import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./components/body/Mail";
import EmailList from "./components/body/EmailList";

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<div className="app__body">
					<Sidebar />
					<Switch>
						<Route path="/mail">
							<Mail />
						</Route>
						<Route path="/">
							<EmailList />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
