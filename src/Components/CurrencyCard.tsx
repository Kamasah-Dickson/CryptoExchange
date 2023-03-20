import { useState, useEffect } from "react";
import YouSend from "./YouSend";
import YouGet from "./YouGet";

import axios from "axios";

function CurrencyCard() {
	const [currencies, setCurrencies] = useState([
		{
			btc: 0.12312,
			usd: 0.53245,
			eth: 0.75234,
			ltc: 0.3436,
			xmr: 2.34523,
			poof: 7.53453,
			loom: 0.43434,
			volt: 4.33554,
		},
	]);

	const [userCurrency, setUserCurrency] = useState("btc");
	const [responseCurrency, setResponseCurrency] = useState("eth");

	const [activeTab, setActiveTab] = useState(2);
	const [userCoins, setUserCoins] = useState(0.2);
	const [responseCoins, setResponseCoins] = useState(0.0123);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<form
			className=" my-max2 mt-10 overflow-hidden rounded-3xl bg-white shadow-2xl"
			onSubmit={(e) => handleSubmit(e)}
		>
			<div className="justify-cente flex flex-col">
				{/* ====tab header==== */}
				<div className=" flex items-center justify-between bg-transparent">
					<div
						onClick={() => setActiveTab(2)}
						className={`skewed-border ${
							activeTab === 1 && "active"
						} flex-1 cursor-pointer p-5 `}
					>
						<h2
							className={`${
								activeTab === 1 ? "skew-x-[15deg]" : ""
							} text-center text-[15px] font-medium`}
						>
							Crypto Exchange
						</h2>
					</div>
					<div
						onClick={() => setActiveTab(1)}
						className={`skewed-border ${
							activeTab === 2 && "active2"
						} flex-1 cursor-pointer p-5 `}
					>
						<h2
							className={`${
								activeTab === 2 ? "skew-x-[-15deg]" : ""
							} text-center  text-[15px] font-medium `}
						>
							Buy/Sell Crypto
						</h2>
					</div>
				</div>
				{/* ==tabs==== */}
				<div className="px-10">
					<div className="mx-auto mt-10">
						{activeTab === 2 ? (
							<div className="flex flex-col items-center justify-center gap-7">
								<YouSend
									userCurrency={userCurrency}
									responseCurrency={responseCurrency}
									currencies={Object.keys(currencies[0])}
									setUserCurrency={setUserCurrency}
									setResponseCurrency={setResponseCurrency}
									responseCoins={responseCoins}
									fullCurrencies={currencies}
									userCoins={userCoins}
									setUserCoins={setUserCoins}
									setResponseCoins={setResponseCoins}
								/>
								<YouGet
									responseCoins={responseCoins}
									currencies={Object.keys(currencies[0])}
									setResponseCoins={setResponseCoins}
									setResponseCurrency={setResponseCurrency}
									fullCurrencies={currencies}
									userCurrency={userCurrency}
									responseCurrency={responseCurrency}
									userCoins={userCoins}
									setUserCoins={setUserCoins}
								/>
							</div>
						) : (
							<div></div>
						)}
					</div>
					<div className="pb-10 pt-5">
						<input
							type="submit"
							value="Exchange"
							className="mx-auto mt-4 block w-full cursor-pointer rounded-md bg-[#370b97] py-5 font-normal text-white transition-all hover:bg-[#370b97c9] active:scale-[1.06]"
						/>
					</div>
				</div>
			</div>
		</form>
	);
}

export default CurrencyCard;
