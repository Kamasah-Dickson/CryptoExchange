// import loginImage from "../assets/choong-deng-xiang-rVHIqG9tTOE-unsplash.jpg";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="my-5 mx-auto grid max-w-2xl p-2  lg:max-w-full lg:p-5">
			<div className="mt-0 flex flex-col items-center justify-center leading-10 text-white">
				<h1 className="mb-7 text-center text-4xl font-large md:text-6xl">
					Crypto Exchange
				</h1>
			</div>

			<form className="mx-auto flex w-full  flex-col bg-white shadow-lg shadow-[#2f207548] lg:max-w-5xl lg:flex-row lg:rounded-xl">
				<div className=" my-img h-[500px] w-full  overflow-hidden object-cover lg:h-full lg:flex-[3.5] lg:rounded-tl-xl lg:rounded-bl-xl">
					{/* <img src={loginImage} className="h-full w-full" /> */}
				</div>
				<div className="flex-[1.5] p-7 md:flex-[2] lg:p-20">
					<div className="flex items-center justify-between">
						<h1 className="text-3xl font-bold md:text-4xl">Join us today</h1>
						<p>logo</p>
					</div>
					<div className="mt-10 flex flex-col items-center gap-5">
						<button
							className="flex w-full max-w-md items-center justify-center gap-4 rounded-3xl border border-black py-3 transition-all hover:bg-black hover:text-white"
							type="button"
						>
							<FcGoogle size={20} />
							<p>Sign up with Google</p>
						</button>
						<button
							className="flex w-full max-w-md items-center justify-center gap-4 rounded-3xl border border-black py-3 transition-all hover:bg-black hover:text-white"
							type="button"
						>
							<div className=" flex h-[23px] w-[23px] items-center  justify-center rounded-full bg-[#000000c7]">
								<AiOutlineApple color="white" size={17} />
							</div>
							<p>Sign up with Apple</p>
						</button>
					</div>
					<div className="mt-8 flex items-center justify-center text-center">
						<hr className="h-[2px] flex-1 bg-[#00000031]" />

						<p className="my-before px-2">OR</p>
						<hr className="h-[2px] flex-1 bg-[#00000031]" />
					</div>
					<button
						className="mx-auto mt-5 block w-full max-w-md rounded-3xl bg-black py-4 text-white transition-all hover:bg-[#000000d5]"
						type="button"
					>
						Sign up with phone or email
					</button>
					<p className="mt-5">
						By signing up you agree to the{" "}
						<Link to="#" className="underline">
							Terms of service and{" "}
							<Link
								to="#"
								className="
							underline"
							>
								Privacy Policy
							</Link>
						</Link>
					</p>
					<div className="mt-10">
						<h2 className="font-bold text-black">Already have an account?</h2>
						<button
							className="mt-3 w-full rounded-3xl border border-black py-3 px-10 font-semibold text-black transition-all hover:bg-[#2d15b8] hover:text-white"
							type="button"
						>
							Log in
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Login;
