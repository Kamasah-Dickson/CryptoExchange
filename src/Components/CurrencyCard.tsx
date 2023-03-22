import { useState, useEffect, useContext } from "react";
import YouSend from "./YouSend";
import YouGet from "./YouGet";
import axios from "axios";
import { currencyNameContext } from "../contexts/contexts";
import EnterWalletAddress from "./EnterWalletAddress";
import AdditionalInfo from "./AdditionalInfo";

function CurrencyCard() {
	const { currencyFullname, currencies } = useContext(currencyNameContext);
	const [userCurrency, setUserCurrency] = useState("btc");
	const [responseCurrencyData, setResponseCurrencyData] = useState({
		response_currency: "eth",
		response_coins: 0.0123,
	});
	const [userCoins, setUserCoins] = useState(0.1);
	const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setShowAdditionalDetails(true);
	}

	return (
		<form
			className="my-max2 my-scrollbar my-5 mt-10 max-h-[400px] overflow-x-hidden rounded-3xl bg-[#180442] text-white shadow-2xl"
			onSubmit={(e) => handleSubmit(e)}
		>
			<div className="flex flex-col justify-center p-4">
				{/* ====tab header==== */}
				<h2 className="mt-4 text-center text-2xl font-semibold text-white md:text-3xl">
					Crypto Exchange
				</h2>
				{/* ==tabs==== */}
				<div className="px-10">
					<div className="mx-auto mt-10">
						<div className="flex flex-col items-center justify-center gap-7">
							<YouSend
								userCurrency={userCurrency}
								responseCurrencyData={responseCurrencyData}
								currencies={currencies}
								setUserCurrency={setUserCurrency}
								userCoins={userCoins}
								setUserCoins={setUserCoins}
								setResponseCurrencyData={setResponseCurrencyData}
							/>
							<YouGet
								responseCurrencyData={responseCurrencyData}
								setResponseCurrencyData={setResponseCurrencyData}
								currencies={currencies}
								userCurrency={userCurrency}
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
									: "mx-auto mt-4 block w-full cursor-pointer rounded-md bg-[#370b97] py-5 font-normal text-white hover:bg-[#370b97c9] active:scale-[1.03] disabled:transform-none disabled:bg-[#370b97c9] disabled:opacity-[0.4]"
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
