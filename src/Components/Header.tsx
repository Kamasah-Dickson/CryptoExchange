import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast, ToastContainer } from "react-toastify";

function Header() {
	const [loggedIn, setLoggedIn] = useState(false);
	function deterMineUserLoggedIn() {
		onAuthStateChanged(auth, (signedUser) => {
			if (signedUser) {
				setLoggedIn(true);
			} else {
				setLoggedIn(false);
			}
		});
	}

	useEffect(() => {
		deterMineUserLoggedIn();
	}, []);

	function handleSignOut() {
		try {
			auth.signOut();
			toast.done("Successfully signed out");
		} catch (error: any) {
			console.log(error.message);
			toast.error("An error occured try again");
		}
	}

	return (
		<div className="sticky top-0 left-0 z-20 w-full border-b-2 border-[#370b9785] bg-[#ffffff10] py-4 backdrop-blur-lg backdrop-saturate-100 md:py-5">
			<div className="my-max flex items-center justify-between">
				<Link to="/" className="text-2xl text-white">
					Logo
				</Link>

				{loggedIn ? (
					<ul className="flex items-center justify-center gap-7 text-white">
						<Link
							className="text-sm font-semibold uppercase text-white transition-all hover:text-[#bcbcbd] active:scale-[1.07]"
							to="/dashboard/overview"
						>
							Dashboard
						</Link>
						<Link
							className="text-sm font-semibold uppercase text-white transition-all hover:text-[#bcbcbd] active:scale-[1.07]"
							to="/"
						>
							Faq
						</Link>
						<p
							onClick={() => handleSignOut()}
							className="cursor-pointer rounded-sm bg-[#6f33df5e] py-2 px-5 text-sm transition-all hover:bg-[#6f33dfc9] active:scale-[1.05] md:text-base"
						>
							Log out
						</p>
						<ToastContainer limit={2} />
					</ul>
				) : (
					<ul className="flex items-center justify-center gap-7 text-white">
						<Link
							to="/signin"
							className="cursor-pointer rounded-sm bg-[#6f33df5e] py-2 px-5 text-sm transition-all active:scale-[1.05] md:text-base"
						>
							Log In
						</Link>
						<Link
							to="/signup"
							className="cursor-pointer rounded-sm bg-[#5904f5] py-2 px-3 text-sm transition-all active:scale-[1.05] md:text-base"
						>
							Get an account
						</Link>
					</ul>
				)}
			</div>
		</div>
	);
}

export default Header;
