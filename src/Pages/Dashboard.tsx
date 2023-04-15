import { useEffect } from "react";
import Dashboard_Header from "../Components/Dashboard_Header";
import Dashboard_Sidebar from "../Components/Dashboard_Sidebar";

function Dashboard() {
	useEffect(() => {
		document.body.classList.add("brown");
	}, []);
	return (
		<div className=" flex w-full">
			<Dashboard_Sidebar />
			<div className="h-screen flex-[11] bg-[#323440] md:flex-[10]">
				<Dashboard_Header />
			</div>
		</div>
	);
}

export default Dashboard;
