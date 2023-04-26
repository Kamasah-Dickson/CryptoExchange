//mobileMenu
// import { RiMenu4Fill } from "react-icons/ri";
import { BsFillGridFill } from "react-icons/bs";
import { IoIosWallet } from "react-icons/io";
import { BiTransfer } from "react-icons/bi";
import { AiFillPieChart } from "react-icons/ai";

export const data = [
	{
		name: "overview",
		icon: <BsFillGridFill size={20} />,
		pathname: "overview",
	},

	{
		name: "transactions",
		icon: <BiTransfer size={20} />,
		pathname: "transactions",
	},
	{
		name: "chart",
		icon: <AiFillPieChart size={20} />,
		pathname: "chart",
	},
	// {
	// 	name: "wallet",
	// 	icon: <IoIosWallet size={20} />,
	// 	pathname: "wallet",
	// },
];
