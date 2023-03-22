import { useState, useEffect, useContext } from "react";
import YouSend from "./YouSend";
import YouGet from "./YouGet";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CurrencyCard() {
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
		// {
		// 	btc: {
		// 		value: 0.123677612,
		// 	},

		// 	usd: {
		// 		value: 1.868767645,
		// 	},
		// 	eth: {
		// 		value: 0.756766234,
		// 	},
		// 	ltc: {
		// 		value: 0.346766736,
		// 	},

		// 	xmr: {
		// 		value: 2.344544523,
		// 	},
		// 	poof: {
		// 		value: 7.53453453,
		// 	},
		// 	loom: {
		// 		value: 0.44533434,
		// 	},
		// 	volt: {
		// 		value: 4.33433554,
		// 	},
		// },
	]);

	console.log(Object.values(currencies));

	const [userCurrency, setUserCurrency] = useState("btc");
	const [responseCurrency, setResponseCurrency] = useState("eth");
	const navigate = useNavigate();

	const [userCoins, setUserCoins] = useState(0.1);
	const [responseCoins, setResponseCoins] = useState(0.0123);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		navigate("/exchange");
	}

	return (
		<form
			className="my-max2 mt-10 overflow-hidden rounded-3xl bg-white shadow-2xl"
			onSubmit={(e) => handleSubmit(e)}
		>
			<div className="my-shadow flex flex-col justify-center p-4">
				{/* ====tab header==== */}
				<h2 className=" text-center text-2xl font-bold text-black md:text-3xl">
					Crypto Exchange
				</h2>
				{/* ==tabs==== */}
				<div className="px-10">
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
					<div className="pb-10 pt-5">
						<input
							disabled={userCoins > 0 ? false : true}
							type="submit"
							value="Exchange"
							className="mx-auto mt-4 block w-full cursor-pointer rounded-md bg-[#370b97] py-5 font-normal text-white transition-all hover:bg-[#370b97c9]
							active:scale-[1.06] disabled:transform-none disabled:bg-[#370b97c9] disabled:opacity-[0.4]"
						/>
					</div>
				</div>
			</div>
		</form>
	);
}

export default CurrencyCard;
