import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
