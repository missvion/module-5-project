import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./history.js";
import { PrivateRoute } from "./PrivateRoute";
import { useDispatch } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { PublicHomePage } from "./components/PublicHomePage";
import { PublicServicesPage } from "./components/PublicServicesPage";
import { SignUpForm } from "./components/SignUpForm";
import { UserHomePage } from "./components/UserHomePage";
import { EmployeeHomePage } from "./components/EmployeeHomePage";
import { EmployeeSearchPage } from "./components/EmployeeSearchPage";

export default function App() {
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (localStorage.token != null) {
	// 		fetch("http://${BACKEND_HOST}/get_user", {
	// 			headers: {
	// 				Authorization: `Bearer ${localStorage.token}`
	// 			}
	// 		})
	// 			.then(response => response.json())
	// 			.then(response =>
	// 				dispatch({ type: "STORE_CURRENT_USER", payload: response })
	// 			);
	// 	} else {
	// 		console.log("cannot find token");
	// 	}
	// }, []);

	return (
		<div>
			<Router history={history}>
				<Switch>
					<Route exact path='/' component={PublicHomePage} />
					<Route exact path='/services' component={PublicServicesPage} />
					<Route exact path='/signup' component={SignUpForm} />
					<PrivateRoute exact path='/user/home' component={UserHomePage} />
					<PrivateRoute exact path='/employee/home' component={EmployeeHomePage} />
					<PrivateRoute exact path='/search' component={EmployeeSearchPage} />
				</Switch>
			</Router>
		</div>
	);
}
