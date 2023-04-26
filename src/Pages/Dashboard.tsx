import { useEffect, useState } from "react";
import Dashboard_Header from "../Components/Dashboard_Header";
import Dashboard_Sidebar from "../Components/Dashboard_Sidebar";
import Table from "../Components/Table";
import { useLocation } from "react-router-dom";
import Chart from "../Components/Chart";
import Transactions from "../Components/Transactions";
import Wallet from "../Components/Wallet";

function Dashboard() {
	const { pathname } = useLocation();

	useEffect(() => {
		document.body.classList.add("brown");
	}, []);
	return (
		<div className=" flex w-full">
			<Dashboard_Sidebar />
			<div className="h-screen flex-[11] bg-[#323440] md:flex-[10]">
				<Dashboard_Header />
				<div className="p-3">
					<Table />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
