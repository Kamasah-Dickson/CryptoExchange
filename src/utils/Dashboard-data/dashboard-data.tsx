//mobileMenu
import { RiMenu4Fill } from "react-icons/ri";
import { BsFillGridFill } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { IoIosWallet, IoMdNotificationsOutline } from "react-icons/io";
import { BiTransfer } from "react-icons/bi";

export const data = [
	{
		name: "overview",
		icon: <BsFillGridFill size={20} />,
		pathname: "overview",
	},
	{
		name: "chart",
		icon: <AiFillPieChart size={20} />,
		pathname: "chart",
	},
	{
		name: "transactions",
		icon: <BiTransfer size={20} />,
		pathname: "transactions",
	},
	{
		name: "wallet",
		icon: <IoIosWallet size={20} />,
		pathname: "wallet",
	},
];
