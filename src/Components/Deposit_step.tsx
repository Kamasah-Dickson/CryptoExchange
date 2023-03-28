import { useContext } from "react";
import { currencyNameContext } from "../contexts/contexts";

function Deposit_step() {
	const { currencyData, walletInputValue } = useContext(currencyNameContext);
	return (
		<div>
			<p className="mb-5 flex items-center justify-between text-lg font-medium">
				You get:{" "}
				<span className="text-xl font-bold">
					{currencyData.response_coins}{" "}
					{currencyData.response_currency.toUpperCase()}
				</span>
			</p>
			<p className="flex w-full flex-wrap items-center justify-between text-lg font-medium">
				<p> Recipient address:</p>{" "}
				<span className="my-wrap text-sm font-semibold text-gray-700">
					{walletInputValue.recipient_wallet_address}
				</span>
			</p>
		</div>
	);
}

export default Deposit_step;
