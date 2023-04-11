import Dashboard_Sidebar from "./Dashboard_Sidebar";
import Dashboard_Header from "./Dashboard_Header";

function Transactions() {
	return (
		<div className=" flex w-full">
			<Dashboard_Sidebar />
			<div className="flex-[10] bg-[#323440]">
				<Dashboard_Header />
			</div>
		</div>
	);
}

export default Transactions;
