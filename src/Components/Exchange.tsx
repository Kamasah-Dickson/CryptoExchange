import React, { useContext } from "react";
import { useState, useEffect } from "react";
import YouSend from "./YouSend";
import YouGet from "./YouGet";

import EnterWalletAddress from "./EnterWalletAddress";
import Header from "./Header";
import AdditionalInfo from "./AdditionalInfo";

function Exchange() {
	const [currencies, setCurrencies] = useState([
		{
			btc: {
				value: 0.123677612,
				name: "bitcoin",
			},

			usd: {
				value: 1.868767645,
				name: "usd",
			},
			eth: {
				value: 0.756766234,
				name: "etherium",
			},
			ltc: {
				value: 0.346766736,
				name: "litecoin",
			},

			xmr: {
				value: 2.344544523,
				name: "xmr",
			},
			poof: {
				value: 7.53453453,
				name: "poof",
			},
			loom: {
				value: 0.44533434,
				name: "loom",
			},
			volt: {
				value: 4.33433554,
				name: "volt",
			},
		},
	]);

	const [userCurrency, setUserCurrency] = useState("btc");
	const [responseCurrency, setResponseCurrency] = useState("eth");

	const [userCoins, setUserCoins] = useState(0.1);
	const [responseCoins, setResponseCoins] = useState(0.0123);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}
	return (
		<>
			<Header />
			<div className="mx-auto my-5 ">
				<form
					onSubmit={(e) => handleSubmit(e)}
					className=" my-max2 my-scrollbar mt-10  overflow-y-scroll rounded-2xl  bg-white shadow-2xl"
				>
					<div className="flex flex-col justify-center">
						<div className="px-10 pb-10">
							<div className="mx-auto mt-10">
								<div className="flex flex-col items-center justify-center gap-7">
									<YouSend
										userCurrency={userCurrency}
										responseCurrency={responseCurrency}
										currencies={currencies}
										setUserCurrency={setUserCurrency}
										responseCoins={responseCoins}
										userCoins={userCoins}
										setUserCoins={setUserCoins}
										setResponseCoins={setResponseCoins}
										setResponseCurrency={setResponseCurrency}
									/>
									<YouGet
										responseCoins={responseCoins}
										setResponseCoins={setResponseCoins}
										setResponseCurrency={setResponseCurrency}
										currencies={currencies}
										userCurrency={userCurrency}
										responseCurrency={responseCurrency}
									/>
								</div>
							</div>
							<EnterWalletAddress />
							<AdditionalInfo />
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default Exchange;
