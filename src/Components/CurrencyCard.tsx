import { useState, useEffect, useContext } from "react";
import YouSend from "./YouSend";
import YouGet from "./YouGet";
import axios from "axios";
import { currencyNameContext } from "../contexts/contexts";
import EnterWalletAddress from "./EnterWalletAddress";
import AdditionalInfo from "./AdditionalInfo";

function CurrencyCard() {
	const { setCurrencyFullname, currencyFullname, currencies, setCurrencies } =
		useContext(currencyNameContext);

	const [userCurrency, setUserCurrency] = useState("btc");
	const [responseCurrency, setResponseCurrency] = useState("eth");

	const [userCoins, setUserCoins] = useState(0.1);
	const [responseCoins, setResponseCoins] = useState(0.0123);
	const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setShowAdditionalDetails(true);
	}

	return (
		<form
			className="my-max2 my-scrollbar my-5 mt-10 max-h-[450px] overflow-x-hidden rounded-3xl bg-white shadow-2xl"
			onSubmit={(e) => handleSubmit(e)}
		>
			<div className="flex flex-col justify-center p-4">
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
					<div className={`${showAdditionalDetails ? "hidden" : "pb-10 pt-5"}`}>
						<input
							disabled={userCoins > 0 ? false : true}
							type="submit"
							value="Exchange"
							className={`${
								showAdditionalDetails
									? "hidden"
									: "mx-auto mt-4 block w-full cursor-pointer rounded-md bg-[#370b97] py-5 font-normal text-white transition-all hover:bg-[#370b97c9] active:scale-[1.06] disabled:transform-none disabled:bg-[#370b97c9] disabled:opacity-[0.4]"
							}`}
						/>
					</div>
					<div
						className={`${
							showAdditionalDetails ? "h-auto" : "h-0 overflow-hidden"
						}`}
					>
						<EnterWalletAddress currencyFullname={currencyFullname} />
						<AdditionalInfo />
					</div>
				</div>
			</div>
		</form>
	);
}

export default CurrencyCard;
