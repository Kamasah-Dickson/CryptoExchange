import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Decimal from "decimal.js";

interface exchangeProp {
	currencies: string[];
	userCoins: number;
	setUserCoins: React.Dispatch<React.SetStateAction<number>>;
	setResponseCoins: React.Dispatch<React.SetStateAction<number>>;
	userCurrency: string;
	responseCurrency: string;
	setUserCurrency: React.Dispatch<React.SetStateAction<string>>;
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
	setResponseCurrency: React.Dispatch<React.SetStateAction<string>>;
	responseCoins: number;
}

function YouSend({
	currencies,
	userCoins,
	setUserCoins,
	setUserCurrency,
	setResponseCoins,
	userCurrency,
	responseCurrency,
	fullCurrencies,
	setResponseCurrency,
	responseCoins,
}: exchangeProp) {
	const [showInput, setShowInput] = useState(false);

	function updateUserOptions(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setUserCoins(Number(value));

		// if (
		// 	(fullCurrencies[0] as { [key: string]: number })[userCurrency] ===
		// 	(fullCurrencies[0] as { [key: string]: number })[responseCurrency]
		// ) {
		// 	setUserCurrency(responseCurrency);
		// 	setResponseCurrency(userCurrency);
		// }
	}

	//fix precition errors leading to zeroes using decimal.js
	const userCoinsDecimal = new Decimal(userCoins);
	const userExchangeRate = new Decimal(
		(fullCurrencies[0] as { [key: string]: number })[userCurrency]
	);

	const responseExchangeRate = new Decimal(
		(fullCurrencies[0] as { [key: string]: number })[responseCurrency]
	);

	useEffect(() => {
		setResponseCoins(
			parseFloat(
				(
					(userCoinsDecimal.toNumber() / userExchangeRate.toNumber()) *
					responseExchangeRate.toNumber()
				).toFixed(5)
			)
		);
	}, [userCoins, userCurrency]);

	function handleUserAmountChange(userCoins: number) {
		setResponseCoins(
			parseFloat(
				(
					(userCoinsDecimal.toNumber() * responseExchangeRate.toNumber()) /
					userExchangeRate.toNumber()
				).toFixed(5)
			)
		);
		setUserCoins(userCoins);
	}

	//handle userCurrency changes
	function handleCurrency(e: React.ChangeEvent<HTMLSelectElement>) {
		const value = e.target.value;
		setUserCurrency(value);
		handleUserAmountChange(userCoins);
	}

	return (
		<div className="flex w-full items-center justify-between gap-1">
			{showInput ? (
				<div className=" flex w-full items-center justify-center">
					<input
						type="text"
						placeholder="Enter a cryptocurrency"
						className="w-full"
					/>
					<AiOutlineClose
						size={22}
						onClick={() => setShowInput(false)}
						className="cursor-pointer"
					/>
				</div>
			) : (
				<>
					<div className=" relative flex h-[55px] flex-[2] items-center justify-between">
						<div className="absolute pl-[30px] font-small text-[#525151]">
							You send
						</div>
						<input
							autoComplete="off"
							value={userCoins}
							name="userCoin"
							onChange={(e) => updateUserOptions(e)}
							dir="rtl"
							inputMode="decimal"
							type="number"
							step="0.0001"
							className=" h-full w-full rounded-l-md
					bg-[#8aa0c03f] px-2 pl-[110px] text-2xl outline-1 outline-[#604adbaf] focus:bg-[rgba(70,46,124,0.13)]"
						/>
					</div>
					<select
						// onClick={() => setShowInput(true)}
						onChange={(e) => handleCurrency(e)}
						name="userGet"
						className="h-[55px] flex-1 cursor-pointer rounded-r-md bg-[#8aa0c063]  p-1  font-bold uppercase text-black outline-none transition-all hover:bg-[#370b97] hover:text-white"
					>
						{currencies.map((currency, index) => {
							return (
								<option className="" key={index} value={currency}>
									{currency}
								</option>
							);
						})}
					</select>
				</>
			)}
		</div>
	);
}

export default YouSend;
