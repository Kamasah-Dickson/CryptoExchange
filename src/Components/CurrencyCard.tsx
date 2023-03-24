import { useState, useContext } from "react";
import YouSend from "./YouSend";
import YouGet from "./YouGet";
import { currencyNameContext } from "../contexts/contexts";
import EnterWalletAddress from "./EnterWalletAddress";
import AdditionalInfo from "./AdditionalInfo";
import AnyQuestions from "./AnyQuestions";
import { useNavigate } from "react-router";

function CurrencyCard() {
	const { currencies, currencyData } = useContext(currencyNameContext);

	const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);
	const navigate = useNavigate();

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setShowAdditionalDetails(true);
		showAdditionalDetails && navigate("/exchange");
	}

	return (
		<form
			className="my-max2 my-scrollbar my-5 mt-10 rounded-xl bg-[#180442] text-white shadow-2xl md:rounded-2xl lg:rounded-3xl"
			onSubmit={(e) => handleSubmit(e)}
		>
			<div className="flex flex-col justify-center p-4">
				<h2 className="mt-4 text-center text-2xl font-semibold text-white md:text-3xl">
					Crypto Exchange
				</h2>
				<div className="px-8 md:px-10">
					<div className="mx-auto mt-10">
						<div className="flex flex-col items-center justify-center gap-4">
							<YouSend userCurrency={currencyData.userCurrency} />
							<YouGet currencies={currencies} />
						</div>
					</div>
					<div className={`${showAdditionalDetails ? "hidden" : "pb-10 pt-5"}`}>
						<input
							disabled={currencyData.userCoins > 0 ? false : true}
							type="submit"
							value="Exchange"
							className={`${
								showAdditionalDetails
									? "hidden"
									: "mx-auto mt-4 block w-full cursor-pointer rounded-md bg-[#370b97] py-3 font-normal text-white hover:bg-[#370b97c9] active:scale-[1.03] disabled:transform-none disabled:bg-[#370b97c9] disabled:opacity-[0.4] md:py-5"
							}`}
						/>
					</div>
					<div
						className={`${
							showAdditionalDetails ? "h-auto" : "h-0 overflow-hidden"
						}`}
					>
						<EnterWalletAddress />
						<AdditionalInfo />
					</div>
					<div
						className={`${
							showAdditionalDetails ? "h-auto" : "h-0 overflow-hidden"
						}`}
					>
						<AnyQuestions />
					</div>
				</div>
			</div>
		</form>
	);
}

export default CurrencyCard;
