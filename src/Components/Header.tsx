import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="sticky top-0 left-0 z-20 w-full border-b-2 border-[#370b9785] bg-[#ffffff10] py-5 backdrop-blur-lg backdrop-saturate-100">
			<div className="my-max flex items-center justify-between">
				<Link to="/" className="text-2xl text-white">
					Logo
				</Link>
				<ul className="flex items-center justify-center gap-7 text-white">
					<Link
						to="/login"
						className="cursor-pointer rounded-sm bg-[#6f33df5e] py-2 px-5 transition-all active:scale-[1.05]"
					>
						Log In
					</Link>
					<Link
						to="/signup"
						className=" cursor-pointer rounded-sm bg-[#5904f5] py-2 px-3 transition-all active:scale-[1.05]"
					>
						Get an account
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default Header;
