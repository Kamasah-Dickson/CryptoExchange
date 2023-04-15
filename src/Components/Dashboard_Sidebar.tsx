import { useContext } from "react";
import { data } from "../utils/Dashboard-data/dashboard-data";
import { Link } from "react-router-dom";
import { TbSettingsFilled, TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { CgLogOut } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { currencyNameContext } from "../contexts/contexts";

function Dashboard_Sidebar() {
	const location = useLocation();
	const { hideDashboard, setHideDashboard } = useContext(currencyNameContext);

	return (
		<div
			className={`${
				hideDashboard
					? " absolute -translate-x-full"
					: " relative z-20 translate-x-0 "
			}   h-screen flex-[1] bg-[#1c1e28] transition-transform md:flex-[3] xl:flex-[2]`}
		>
			<h1 className="hidden p-3 px-4 pt-3 text-center text-xl text-white md:flex">
				Lorem logo
			</h1>

			<ul className="flex h-[90%] flex-col justify-between p-3 px-4 ">
				<div>
					<p
						onClick={() => setHideDashboard(true)}
						className="
						flex w-fit cursor-pointer items-center justify-start gap-2 rounded-lg p-3 text-[#74777e] transition-all hover:bg-gray-500 hover:text-white"
					>
						<TbLayoutSidebarLeftCollapse size={20} />
					</p>
					{data.map((data) => {
						return (
							<Link to={`/dashboard/${data.pathname}`} key={data.name}>
								<li
									className={`${
										location.pathname === `/dashboard/${data.pathname}`
											? "bg-[#5160f9] text-white"
											: "text-[#74777e]"
									} my-3 flex items-center justify-start gap-2 rounded-lg p-3 transition-all hover:bg-[#5160f9] hover:text-white`}
								>
									{data.icon}
									<p className=" text-md hidden font-medium capitalize md:flex">
										{data.name}
									</p>
								</li>
							</Link>
						);
					})}
				</div>
				<div>
					<li
						className={`
						${
							location.pathname === "/dashboard/logout"
								? "bg-[#5160f9] text-white"
								: "text-[#74777e]"
						}
						flex cursor-pointer items-center justify-start gap-2 rounded-lg p-3 text-[#74777e] transition-all hover:bg-[#5160f9] hover:text-white`}
					>
						<CgLogOut size={20} />
						<p className=" text-md hidden font-medium capitalize md:flex">
							Logout
						</p>
					</li>
				</div>
			</ul>
		</div>
	);
}

export default Dashboard_Sidebar;
