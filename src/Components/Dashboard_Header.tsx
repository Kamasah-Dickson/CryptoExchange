import { useContext } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import me from "../assets/EgLF6Jmi_4x.jpg";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { currencyNameContext } from "../contexts/contexts";

function Dashboard_Header() {
	const { hideDashboard, setHideDashboard } = useContext(currencyNameContext);
	return (
		<div className="flex items-center justify-between gap-5 p-3">
			{hideDashboard && (
				<div
					onClick={() => setHideDashboard(false)}
					className="w-fit cursor-pointer rounded-lg p-3 hover:bg-gray-500"
				>
					<TbLayoutSidebarLeftExpand size={20} color="white" />
				</div>
			)}
			<h2 className="text-2xl font-medium text-white md:text-3xl">Dashboard</h2>
			<div className=" hidden cursor-pointer items-center justify-center gap-3 md:flex">
				<div className="h-[40px] w-[40px] overflow-hidden">
					<img className="h-full w-full rounded-lg" src={me} />
				</div>
				<p className="text-sm text-white">UserName</p>
				<MdOutlineKeyboardArrowDown size={20} color="white" />
			</div>
		</div>
	);
}

export default Dashboard_Header;
