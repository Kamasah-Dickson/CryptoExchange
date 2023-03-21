import { useEffect } from "react";
import Decimal from "decimal.js";

interface exchangeProp {
	currencies: string[];
	responseCoins: number;
	setResponseCoins: React.Dispatch<React.SetStateAction<number>>;
	setResponseCurrency: React.Dispatch<React.SetStateAction<string>>;
	fullCurrencies: {
		btc: number;
		usd: number;
		eth: number;
		ltc: number;
		xmr: number;
		poof: number;
		loom: number;
		volt: number;
	}[];
	userCurrency: string;
	responseCurrency: string;
}

function YouGet({
	currencies,
	setResponseCoins,
	responseCoins,
	setResponseCurrency,
	fullCurrencies,
	userCurrency,
	responseCurrency,
}: exchangeProp) {
	function updateResponseOptions(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setResponseCoins(Number(value));
	}

	//fix precition errors leading to zeroes using decimal.js
	const responseCoinsDecimal = new Decimal(responseCoins);
	const userExchangeRate2 = new Decimal(
		(fullCurrencies[0] as { [key: string]: number })[userCurrency]
	);

	const responseExchangeRate2 = new Decimal(
		(fullCurrencies[0] as { [key: string]: number })[responseCurrency]
	);

	function handleResponseCurrency(responseCoins: number) {
		const result = parseFloat(
			(
				(new Decimal(responseCoins).toNumber() * userExchangeRate2.toNumber()) /
				responseExchangeRate2.toNumber()
			).toFixed(7)
		);
		setResponseCoins(result);
	}

	//handle responseCurrency changes
	function handleCurrency(e: React.ChangeEvent<HTMLSelectElement>) {
		const value = e.target.value;
		setResponseCurrency(value);
		handleResponseCurrency(responseCoins);
	}

	// console.log(responseCurrency);

	return (
		<div className="flex w-full items-center justify-between gap-[3px]">
			<div className=" relative flex h-[60px] flex-[2] items-center justify-between">
				<div className="absolute pl-[30px] font-small text-[#525151]">
					You Get
				</div>

				<input
					disabled
					value={responseCoins}
					onChange={(e) => updateResponseOptions(e)}
					inputMode="decimal"
					type="number"
					className="h-full w-full rounded-l-md bg-[#8aa0c031] px-2  pl-[110px] text-right text-2xl font-semibold outline-1 outline-[#604adbaf] focus:bg-[rgba(70,46,124,0.13)]"
				/>
			</div>
			<select
				onChange={(e) => handleCurrency(e)}
				name="responseCoins"
				id="responseCoins"
				className="h-[60px] flex-1 cursor-pointer rounded-r-md bg-[#8aa0c059] p-1 font-bold uppercase text-black outline-none transition-all hover:bg-[#370b97] hover:text-white"
			>
				{currencies.map((currency, index) => {
					return (
						<option key={index} value={currency}>
							{currency}
						</option>
					);
				})}
			</select>
		</div>
	);
}

export default YouGet;
