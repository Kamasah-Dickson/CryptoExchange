import React, { useState, useEffect, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Decimal from "decimal.js";
import { currencyNameContext } from "../contexts/contexts";

interface exchangeProp {
	userCoins: number;
	setUserCoins: React.Dispatch<React.SetStateAction<number>>;

	userCurrency: string;
	setUserCurrency: React.Dispatch<React.SetStateAction<string>>;

	currencies: {
		btc: {
			value: number;
		};
		usd: {
			value: number;
		};
		eth: {
			value: number;
		};
		ltc: {
			value: number;
		};
		xmr: {
			value: number;
		};
		poof: {
			value: number;
		};
		loom: {
			value: number;
		};
		volt: {
			value: number;
		};
	}[];
	responseCurrencyData: {
		response_currency: string;
		response_coins: number;
	};
	setResponseCurrencyData: React.Dispatch<
		React.SetStateAction<{
			response_currency: string;
			response_coins: number;
		}>
	>;
}

function YouSend({
	currencies,
	userCoins,
	setUserCoins,
	setUserCurrency,
	userCurrency,
	responseCurrencyData,
	setResponseCurrencyData,
}: exchangeProp) {
	const { setcurrencyAddresses } = useContext(currencyNameContext);

	function updateUserOptions(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		if (parseFloat(value) >= 0) {
			setUserCoins(parseFloat(value));
		}
	}

	//fix precition errors leading to zeroes using decimal.js
	const userCoinsDecimal = new Decimal(userCoins).toNumber();
	const userExchangeRate = new Decimal(
		(currencies[0] as any)[userCurrency].value
	).toNumber();

	const responseExchangeRate = new Decimal(
		(currencies[0] as any)[responseCurrencyData.response_currency].value
	).toNumber();

	useEffect(() => {
		setResponseCurrencyData((prev) => ({
			...prev,
			response_coins: parseFloat(
				((userCoinsDecimal / userExchangeRate) * responseExchangeRate).toFixed(
					7
				)
			),
		}));
	}, [
		userCoins,
		userCurrency,
		currencies,
		responseCurrencyData.response_currency,
	]);

	function handleUserAmountChange(userCoins: number) {
		setResponseCurrencyData((prev) => ({
			...prev,
			response_coins: parseFloat(
				((userCoinsDecimal * responseExchangeRate) / userExchangeRate).toFixed(
					7
				)
			),
		}));
		setUserCoins(userCoins);
	}

	//handle userCurrency changes
	function handleCurrency(e: React.ChangeEvent<HTMLSelectElement>) {
		const value = e.target.value;
		setUserCurrency(value);
		handleUserAmountChange(userCoins);
		setcurrencyAddresses((prev) => ({
			...prev,
			refund_Wallet_Address: (currencies[0] as any)[e.target.value].name,
		}));

		// if (
		// 	(fullCurrencies[0] as { [key: string]: number })[userCurrency] ===
		// 	(fullCurrencies[0] as { [key: string]: number })[responseCurrencyData]
		// ) {
		// 	setUserCurrency(responseCurrencyData);
		// 	setResponseCurrencyData(userCurrency);
		// }
	}

	return (
		<div className="flex w-full items-center justify-between gap-[3px]">
			<div className=" relative flex h-[55px] flex-[2] items-center justify-between">
				<div className="absolute pl-[30px] font-light text-[white]">
					You send
				</div>
				<input
					autoComplete="off"
					value={userCoins}
					name="userCoin"
					onChange={(e) => updateUserOptions(e)}
					type="number"
					className=" h-full w-full rounded-l-md bg-[#8aa0c031] px-2
					pl-[110px] text-right text-xl font-semibold text-white  focus:bg-[rgba(70,46,124,0.13)]"
				/>
			</div>
			<select
				onChange={(e) => handleCurrency(e)}
				name="userGet"
				className="h-[55px] flex-1 cursor-pointer rounded-r-md bg-[#210857]  p-1  font-bold uppercase text-white outline-none transition-all hover:bg-[#370b97f3]"
			>
				{Object.keys(currencies[0]).map((currency, index) => {
					return (
						<option className="" key={index} value={currency}>
							{currency}
						</option>
					);
				})}
			</select>
		</div>
	);
}

export default YouSend;
