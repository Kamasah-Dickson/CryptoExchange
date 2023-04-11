import React from "react";
import { ActionCodeSettings, User } from "firebase/auth";

type verifyTypes = {
	theNewUser: User | null;
	sendEmailVerification: (
		user: User,
		actionCodeSettings?: ActionCodeSettings | null | undefined
	) => Promise<void>;
};

function VerifyEmail({ theNewUser, sendEmailVerification }: verifyTypes) {
	return (
		<div className="mx-auto mt-20 flex w-full max-w-md flex-col items-center justify-center bg-white p-5 text-black shadow-md shadow-black">
			<p className="text-center text-lg font-semibold">
				Please verify your email address to signin
			</p>
			{theNewUser && (
				<button
					className="mt-5 bg-[#1c056d] py-3 px-5 text-white active:scale-[1.07]"
					onClick={() => sendEmailVerification(theNewUser)}
				>
					Resend Verification Email
				</button>
			)}
		</div>
	);
}

export default VerifyEmail;
