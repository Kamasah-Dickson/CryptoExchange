import React, { useContext } from "react";
import { useState, useEffect } from "react";
import YouSend from "../Components/YouSend";
import YouGet from "../Components/YouGet";

import EnterWalletAddress from "../Components/EnterWalletAddress";
import Header from "../Components/Header";
import { VerifyWalletProvider } from "../context/contexts";

function Exchange() {
	const [currencies, setCurrencies] = useState([
		{
			btc: 0.123677612,
			usd: 1.868767645,
			eth: 0.756766234,
			ltc: 0.346766736,
			xmr: 2.344544523,
			poof: 7.53453453,
			loom: 0.44533434,
			volt: 4.33433554,
		},
	]);

	const [userCurrency, setUserCurrency] = useState("btc");
	const [responseCurrency, setResponseCurrency] = useState("eth");

	const [activeTab, setActiveTab] = useState(2);
	const [userCoins, setUserCoins] = useState(0.1);
	const [responseCoins, setResponseCoins] = useState(0.0123);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}
	return (
		<>
			<Header />
			<div className="my-max mx-auto mt-5 bg-[#ffffffa4] p-10">
				<form
					onSubmit={(e) => handleSubmit(e)}
					className=" my-max2 mt-10 overflow-hidden rounded-3xl bg-white shadow-2xl"
				>
					<div className="justify-cente flex flex-col">
						{/* ====tab header==== */}
						<div className="py-2 text-center">
							<h2 className="text-xl md:text-2xl">Crypto Exchange</h2>
						</div>
						{/* ==tabs==== */}
						<div className="px-10 pb-10">
							<div className="mx-auto mt-10">
								<div className="flex flex-col items-center justify-center gap-7">
									<YouSend
										userCurrency={userCurrency}
										responseCurrency={responseCurrency}
										currencies={Object.keys(currencies[0])}
										setUserCurrency={setUserCurrency}
										responseCoins={responseCoins}
										fullCurrencies={currencies}
										userCoins={userCoins}
										setUserCoins={setUserCoins}
										setResponseCoins={setResponseCoins}
										setResponseCurrency={setResponseCurrency}
									/>
									<YouGet
										responseCoins={responseCoins}
										currencies={Object.keys(currencies[0])}
										setResponseCoins={setResponseCoins}
										setResponseCurrency={setResponseCurrency}
										fullCurrencies={currencies}
										userCurrency={userCurrency}
										responseCurrency={responseCurrency}
									/>
								</div>
							</div>
							<EnterWalletAddress />
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default Exchange;
