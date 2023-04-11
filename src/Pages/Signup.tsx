import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import SignupWithEmailAndPass from "../Components/SignupWithEmailAndPass";
import { SubmitHandler, useForm } from "react-hook-form";
import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
type InputTypes = {
	password: string;
	email: string;
};

function Signup() {
	const navigate = useNavigate();
	const [showSignWithEmail, setshowSignWithEmail] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		reset,
		setError,
		formState: { errors },
	} = useForm<InputTypes>({
		defaultValues: {
			password: "",
			email: "",
		},
	});

	const [waitForVerification, setWaitForVerification] = useState(false);
	const [theNewUser, setTheNewUser] = useState<User | null>(null);
	const [isVerified, setIsVerified] = useState(false);
	type newUserDataType = {
		email: string;
		password: string;
	};

	async function createNewUserWithEmailAndPassword(data: newUserDataType) {
		try {
			const newUser = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			);

			setWaitForVerification(true);

			const newUserCredentials = newUser.user;
			setTheNewUser(newUserCredentials);
			sendEmailVerification(newUserCredentials);

			if (newUserCredentials.emailVerified) {
				setIsVerified(true);
			} else {
				setWaitForVerification(true);
			}
		} catch (error: any) {
			console.log(error.message);
			if (error.code === "auth/email-already-in-use") {
				setError("email", { type: "manual", message: "Email already in use" });
			}
		}
	}

	const formSubmit: SubmitHandler<InputTypes> = (data) => {
		// console.log(data.email, data.password);
		createNewUserWithEmailAndPassword(data);
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((theNewUser) => {
			if (theNewUser) {
				setIsVerified(theNewUser.emailVerified); //user has verified the account
			}
		});

		return unsubscribe;
	}, []);

	useEffect(() => {
		if (isVerified) {
			navigate("/");
		}
		setIsVerified(false);
	}, [isVerified]);

	return (
		<>
			{waitForVerification ? (
				<div>
					<p>Please verify your email address to access this feature</p>
					{theNewUser && (
						<button onClick={() => sendEmailVerification(theNewUser)}>
							Resend Verification Email
						</button>
					)}
				</div>
			) : (
				<div className="my-5 mx-auto grid max-w-2xl items-center p-2 lg:my-0 lg:h-screen  lg:max-w-full lg:p-5">
					<form
						onSubmit={handleSubmit(formSubmit)}
						className=" mx-auto flex w-full  flex-col overflow-hidden rounded-lg shadow-lg shadow-[#2f207548] lg:max-w-5xl lg:flex-row"
					>
						<div className="order-2 flex-[1.5] bg-white p-7 md:flex-[2] lg:order-1 lg:p-20">
							{showSignWithEmail ? (
								<SignupWithEmailAndPass
									setshowSignWithEmail={setshowSignWithEmail}
									showSignWithEmail={showSignWithEmail}
									register={register}
									errors={errors}
									watch={watch}
									reset={reset}
								/>
							) : (
								<>
									<div className="flex items-center justify-between">
										<h1 className="text-3xl font-bold md:text-4xl">
											Join us today
										</h1>
										<p>logo</p>
									</div>
									<div className="mt-10 flex flex-col items-center gap-5">
										<button
											className="flex w-full max-w-md items-center justify-center gap-4 rounded-3xl border border-black py-3 transition-all hover:bg-black hover:text-white active:scale-[1.08]"
											type="button"
										>
											<FcGoogle size={20} />
											<p>Sign up with Google</p>
										</button>
										<button
											className="flex w-full max-w-md items-center justify-center gap-4 rounded-3xl bg-[#2d15b8] py-3 text-[white] transition-all hover:bg-[#2d15b8dc] active:scale-[1.08]"
											type="button"
										>
											<BsFacebook color="white" size={20} />
											<p>Sign up with Facebook</p>
										</button>
									</div>
									<div className="mt-8 flex items-center justify-center text-center">
										<hr className="h-[2px] flex-1 bg-[#00000031]" />

										<p className="my-before px-2">OR</p>
										<hr className="h-[2px] flex-1 bg-[#00000031]" />
									</div>
									<button
										onClick={() => setshowSignWithEmail(true)}
										className="mx-auto mt-5 block w-full max-w-md rounded-3xl bg-black py-4 text-white transition-all hover:bg-[#000000d5] active:scale-[1.08]"
										type="button"
									>
										Sign up with phone or email
									</button>
									<p className="mt-7 font-normal text-[#39393b]">
										By signing up you agree to the{" "}
										<Link
											to="#"
											className="font-semibold text-[black] underline"
										>
											Terms of service and Privacy Policy
										</Link>
									</p>
									<div className="mt-10">
										<h2 className="text-center font-semibold text-[#000000d2] lg:text-left">
											Already have an account?
										</h2>
										<Link to="/signin">
											<button
												className="mx-auto mt-3 block w-full max-w-md rounded-3xl border border-black py-3 px-10 font-semibold text-black transition-all hover:bg-[#2d15b8] hover:text-white active:scale-[1.07]"
												type="button"
											>
												Sign in
											</button>
										</Link>
									</div>
								</>
							)}
						</div>
						<div className="my-img order-1 h-[500px] w-full overflow-hidden object-cover  lg:order-2 lg:h-auto lg:flex-[4] "></div>
					</form>
				</div>
			)}
		</>
	);
}

export default Signup;
