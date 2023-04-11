import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import closeIcon from "../assets/X.svg";
import {
	FieldErrors,
	UseFormRegister,
	UseFormReset,
	UseFormWatch,
} from "react-hook-form";

type InputTypes = {
	password: string;
	email: string;
};

interface signupInterface {
	setshowSignWithEmail: React.Dispatch<React.SetStateAction<boolean>>;
	showSignWithEmail: boolean;
	register: UseFormRegister<InputTypes>;
	errors: FieldErrors<InputTypes>;
	watch: UseFormWatch<InputTypes>;
	reset: UseFormReset<InputTypes>;
}

function SignupWithEmailAndPass({
	setshowSignWithEmail,
	showSignWithEmail,
	register,
	errors,
	watch,
	reset,
}: signupInterface) {
	const [addEmailBorder, setAddEmailBorder] = useState(false);
	const [addPasswordBorder, setAddPasswordBorder] = useState(false);
	const emailLength = watch("email") || "";
	return (
		<div>
			<p className="mb-10 text-lg font-semibold">
				Please fill the details to Sign up an account
			</p>
			<div className="flex flex-col gap-5">
				<div className="flex flex-col items-start gap-1">
					<label htmlFor="email" className="text-md font-medium text-[#2c2b2b]">
						Email
					</label>
					<div
						onFocus={() => setAddEmailBorder(true)}
						onBlur={() => setAddEmailBorder(false)}
						className={`
						
						${errors.email?.message && "border border-[crimson]"}
						${errors.email?.type === "required" && "border border-[crimson]"}
						${errors.email?.type === "pattern" && "border border-[crimson]"}
						${
							addEmailBorder && "border-2 border-[#2d15b8] outline-[#2d15b8]"
						}  flex w-full cursor-text items-center justify-between overflow-hidden rounded-md border border-[#000000ab] outline-2 `}
					>
						<input
							{...register("email", {
								required: true,
								pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							})}
							className="h-full w-full border-none p-2 outline-none
									placeholder:text-[gray]
									"
							type="email"
							name="email"
							id="email"
							placeholder="kamasahdickson@example.com"
						/>
						{emailLength?.length >= 4 && (
							<img
								onClick={() => reset({ email: "" })}
								src={closeIcon}
								alt="remove all"
								className="mr-2 h-[20px] w-[20px] cursor-pointer"
							/>
						)}
					</div>

					<p className="text-xs text-[crimson]">
						{errors.email?.type === "required" && "Email is required"}
						{errors.email?.message && errors.email.message}
					</p>
					<p className="text-xs text-[crimson]">
						{errors.email?.type === "required" && "Email is required"}
					</p>
					<p className="text-xs text-[crimson]">
						{errors.email?.message && "Email account is already in use"}
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
						${errors.password?.type === "required" && "border-[crimson]"}
						${errors.password?.type === "minLength" && "border-[crimson]"}
						${
							addPasswordBorder && "border-2 border-[#2d15b8] outline-[#2d15b8]"
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
						{errors.password?.type === "required" && "Password is required"}
					</p>
					<p className="text-xs text-[crimson]">
						{errors.password?.type === "minLength" &&
							"Passwords must be at least 6 characters long"}
					</p>
				</div>

				<div>
					<button
						className="mb-7 w-full rounded-xl bg-[#2d15b8] p-3 text-white transition-all hover:bg-[#2d15b8e3] active:scale-[1.07]"
						type="submit"
					>
						Sign up
					</button>
					<button
						className="flex w-full max-w-md items-center justify-center gap-4 rounded-3xl border border-black py-3 transition-all hover:bg-black hover:text-white active:scale-[1.08]"
						type="button"
					>
						<FcGoogle size={20} />
						<p>Sign up with Google</p>
					</button>
				</div>
				{showSignWithEmail ? (
					<p className="lg:text-center">
						Already having account ?{" "}
						<Link className="text-[#2d15b8]" to="/signin">
							Log in
						</Link>
					</p>
				) : (
					<p className="lg:text-center">
						Don't have and account ?{" "}
						<Link
							onClick={() => setshowSignWithEmail(false)}
							className="text-[#2d15b8]"
							to="/signup"
						>
							Sign up
						</Link>
					</p>
				)}
			</div>
		</div>
	);
}

export default SignupWithEmailAndPass;
