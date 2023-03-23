import {
	MdOutlineKeyboardArrowUp,
	MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useState } from "react";
import Questions from "./Questions";
import { Link } from "react-router-dom";

function AnyQuestions() {
	const MultipleAnswers = [
		{
			title: "The spelling of the address.",
			text: (
				<p className="text-[#b4b4b4]">
					Make sure that the address contains all the necessary characters,
					suffixes, and prefixes (dots, dashes).,
				</p>
			),
		},
		{
			title: "Extra spaces.",
			text: (
				<p className="text-[#b4b4b4]">
					Make sure all address characters have been copied. Сheck if there are
					no spaces at the beginning and the end of the address.,
				</p>
			),
		},
		{
			title: "Incorrect blockchain.",
			text: (
				<p className="text-[#b4b4b4]">
					Make sure that the network of the selected coin matches the network
					your address belongs to.,
				</p>
			),
		},
		{
			title: "Some other issues.",
			text: (
				<p>
					Feel free to contact our support team which via email{" "}
					<span className="text-[#a985fd]">(support@simpleswap.io)</span> or
					live chat.
				</p>
			),
		},
	];

	return (
		<div className="mt-10 pb-3 text-2xl">
			<h3 className="mb-7 text-3xl">Have any questions?</h3>
			<Questions
				height="180px"
				title="What is the recipient's address and where do I get it?"
				answer={
					<p className="text-sm font-normal text-[#eae3fc]">
						You can find your cryptocurrency address in the crypto wallet that
						you use to keep your coins and tokens. It contains letters and
						numbers that looks like an alphanumeric string. Cryptocurrencies are
						based on different blockchains and have their own unique address
						formats. It’s necessary to provide your crypto wallet address, and
						we’ll send your coins there. Otherwise, you can check a list of
						recommended wallets provided on the official site of the coin you
						are interested in.
					</p>
				}
			/>
			<Questions
				height="350px"
				title="Why is my recipient address shown as invalid?"
				arrayOfAnswers={MultipleAnswers}
			/>
			<Questions
				height="180px"
				title="How do I get cashback for the exchange?"
				answer={
					<p className="text-sm font-normal text-[#eae3fc]">
						Log in to your account and receive cashback for every exchange. If
						you don’t have a customer account you are welcome to{" "}
						<Link className="cursor-pointer text-[#a985fd]" to={"/login"}>
							sign up!{" "}
						</Link>
						Don’t forget to log in to your account every time before creating
						the exchange as this is the only way to get crypto cashback. Please,
						read about different types of cashback subscriptions and find the{" "}
						<Link className="cursor-pointer text-[#a985fd]" to={"/login"}>
							terms and conditions
						</Link>{" "}
						of our Loyalty Program here.
					</p>
				}
			/>
		</div>
	);
}

export default AnyQuestions;
