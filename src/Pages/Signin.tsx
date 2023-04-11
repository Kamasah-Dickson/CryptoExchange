import { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import closeIcon from "../assets/X.svg";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast, ToastContainer } from "react-toastify";
import { currencyNameContext } from "../contexts/contexts";

type SigninType = {
	email: string;
	password: string;
	checkbox: boolean;
};

type newUserDataType = {
	email: string;
	password: string;
};

function Signin() {
	const [addEmailBorder, setAddEmailBorder] = useState(false);
	const [addPasswordBorder, setAddPasswordBorder] = useState(false);
	const { setSignedUser } = useContext(currencyNameContext);
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		reset,
		watch,
		formState: { errors },
	} = useForm<SigninType>();

	const emailValue = watch("email");

	function formSubmit(data: SigninType) {
		signInWithPasswordAndmail(data);
	}

	async function signInWithPasswordAndmail(data: newUserDataType) {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				data.email,
				data.password
			);

			const UserCredentials = user.user;

			if (UserCredentials) {
				setSignedUser(UserCredentials);
				navigate("/");
			}
		} catch (error: any) {
			console.log(error.message);
			if (error.code === "auth/network-request-failed") {
				toast.error("Check your internet connection and try again");
			}
		}
	}

	return (
		<div className="my-5 mx-auto grid max-w-2xl items-center p-2 lg:my-0 lg:h-screen lg:max-w-full lg:p-5">
			<form
				onSubmit={handleSubmit(formSubmit)}
				className=" mx-auto flex w-full  flex-col gap-5 overflow-hidden rounded-lg  bg-white p-7 shadow-lg shadow-[#2f207548] lg:max-w-5xl lg:flex-row lg:rounded-xl"
			>
				<div className=" flex-[1.5] p-3 md:flex-[2] lg:p-16">
					<p className="mb-10 text-lg font-semibold">
						Please fill the details to log in to access your account
					</p>
					<div className="flex flex-col gap-5">
						<div className="flex flex-col items-start gap-1">
							<label
								htmlFor="email"
								className="text-md font-medium text-[#2c2b2b]"
							>
								Email
							</label>
							<div
								onFocus={() => setAddEmailBorder(true)}
								onBlur={() => setAddEmailBorder(false)}
								className={`
								${errors.email?.type === "required" && "border border-[crimson]"}
								${errors.email?.type === "pattern" && "border border-[crimson]"}

								${
									addEmailBorder &&
									"border-2 border-[#2d15b8] outline-[#2d15b8]"
								} flex w-full cursor-text items-center justify-between overflow-hidden rounded-md border border-[#000000ab] outline-2 `}
							>
								<input
									{...register("email", {
										required: true,
										pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									})}
									className="h-full w-full border-none p-2 outline-none
									 placeholder:text-[#808080b0]
								"
									type="email"
									name="email"
									id="SigninEmail"
									placeholder="kamasahdickson19@example.com"
								/>
								{emailValue?.length >= 4 && (
									<img
										onClick={() => reset({ email: "" })}
										src={closeIcon}
										alt="remove all"
										className="mr-2 h-[20px] w-[20px] cursor-pointer"
									/>
								)}
							</div>
							<p className="text-xs text-[crimson]">
								{errors.email?.type === "required" &&
									"Please your email is required"}
							</p>
							<p className="text-xs text-[crimson]">
								{errors.email?.type === "pattern" && "Please check your email"}
							</p>
						</div>
						<div className="flex flex-col items-start gap-1">
							<label className="text-md text-[#2c2b2b]" htmlFor="password">
								Password
							</label>
							<div
								onClick={() => setAddPasswordBorder(true)}
								onBlur={() => setAddPasswordBorder(false)}
								className={`
								${errors.password?.type === "required" && "border border-[crimson]"}
								${errors.password?.type === "minLength" && "border border-[crimson]"}
								${
									addPasswordBorder &&
									"border-2 border-[#2d15b8] outline-[#2d15b8]"
								}  flex w-full cursor-text items-center justify-between overflow-hidden rounded-md border border-[#000000ab] outline-2`}
							>
								<input
									{...register("password", { required: true, minLength: 6 })}
									className="h-full w-full border-none p-2 outline-none
									 placeholder:text-[gray]
								"
									type="password"
									name="password"
									id="password"
								/>
							</div>
							<p className="text-xs text-[crimson]">
								{errors.password?.type === "required" &&
									"Password cannot be blank"}
							</p>
							<p className="text-xs text-[crimson]">
								{errors.password?.type === "minLength" &&
									"Passwords must be at least 6 characters long"}
							</p>
						</div>
						<div className="flex w-full items-center justify-between">
							<div className="flex items-center justify-center gap-2">
								<input
									{...register("checkbox", { required: false })}
									type="checkbox"
									name="checkbox"
									id="myCheckbox"
								/>
								<label className="text-base" htmlFor="myCheckbox">
									Remember me
								</label>
							</div>
							<Link className="font-medium text-[#2d15b8]" to="#">
								Forgot password?
							</Link>
						</div>
						<div>
							<button
								className="mb-7 w-full rounded-xl bg-[#2d15b8] p-3 text-white transition-all hover:bg-[#2d15b8e3] active:scale-[1.07]"
								type="submit"
							>
								Sign in
							</button>
							<ToastContainer limit={3} />

							<button
								className="align-center mx-auto flex w-full max-w-md items-center justify-center gap-3 rounded-xl border border-black py-3 transition-all hover:bg-black hover:text-white active:scale-[1.08]"
								type="button"
							>
								<FcGoogle size={25} />
								<p>Sign in with Google</p>
							</button>
						</div>
						<p className="lg:text-center">
							Don't have and account ?{" "}
							<Link className="text-[#2d15b8]" to="/signup">
								Sign up
							</Link>
						</p>
					</div>
				</div>
				<div className="my-img2 hidden h-[600px] w-full overflow-hidden object-cover lg:flex lg:flex-[3] "></div>
			</form>
		</div>
	);
}

export default Signin;
