import React, { useState, useEffect, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Decimal from "decimal.js";
import { currencyNameContext } from "../contexts/contexts";

interface exchangeProp {
	userCurrency: string;

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
}

function YouSend({ currencies, userCurrency }: exchangeProp) {
	const { setcurrencyAddresses, setcurrencyData, currencyData } =
		useContext(currencyNameContext);

	function updateUserOptions(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		if (parseFloat(value) >= 0) {
			setcurrencyData((prev) => ({
				...prev,
				userCoins: parseFloat(value),
			}));
		}
	}

	//fix precition errors leading to zeroes using decimal.js
	const userCoinsDecimal = new Decimal(currencyData.userCoins).toNumber();
	const userExchangeRate = new Decimal(
		(currencies[0] as any)[userCurrency].value
	).toNumber();

	const responseExchangeRate = new Decimal(
		(currencies[0] as any)[currencyData.response_currency].value
	).toNumber();

	useEffect(() => {
		setcurrencyData((prev) => ({
			...prev,
			response_coins: parseFloat(
				((userCoinsDecimal / userExchangeRate) * responseExchangeRate).toFixed(
					7
				)
			),
		}));
	}, [
		currencyData.userCoins,
		userCurrency,
		currencies,
		currencyData.response_currency,
	]);

	function handleUserAmountChange(userCoins: number) {
		setcurrencyData((prev) => ({
			...prev,
			response_coins: parseFloat(
				((userCoinsDecimal * responseExchangeRate) / userExchangeRate).toFixed(
					7
				)
			),
		}));
		setcurrencyData((prev) => ({ ...prev, userCoins: userCoins }));
	}

	//handle userCurrency changes
	function handleCurrency(e: React.ChangeEvent<HTMLSelectElement>) {
		const value = e.target.value;
		setcurrencyData((prev) => ({ ...prev, userCurrency: value }));
		handleUserAmountChange(currencyData.userCoins);
		setcurrencyAddresses((prev) => ({
			...prev,
			refund_Wallet_Address: (currencies[0] as any)[e.target.value].name,
		}));

		// if (
		// 	(fullCurrencies[0] as { [key: string]: number })[userCurrency] ===
		// 	(fullCurrencies[0] as { [key: string]: number })[currencyData]
		// ) {
		// 	setUserCurrency(currencyData);
		// 	setcurrencyData(userCurrency);
		// }
	}

	return (
		<div className="flex w-full flex-col gap-2">
			<label htmlFor="youSend" className="text-left sm:hidden">
				You send
			</label>
			<div className="flex w-full items-center justify-between gap-[3px]">
				<div className=" relative flex h-[55px] flex-[2] items-center justify-between md:h-[50px]">
					<div className="absolute hidden pl-[30px] font-light text-[white] sm:flex">
						You send
					</div>
					<input
						id="youSend"
						autoComplete="off"
						value={currencyData.userCoins}
						name="userCoin"
						onChange={(e) => updateUserOptions(e)}
						type="number"
						className=" h-full w-full rounded-l-md bg-[#8aa0c031] px-2
				text-right text-xl font-semibold text-white  focus:bg-[rgba(23,13,46,0.13)]"
					/>
				</div>
				<select
					onChange={(e) => handleCurrency(e)}
					name="userGet"
					className="flex-2 h-[55px] cursor-pointer rounded-r-md bg-[#210857] p-1 font-bold  uppercase  text-white outline-none transition-all hover:bg-[#370b97f3] md:h-[50px] md:flex-1"
				>
					{Object.keys(currencies[0]).map((currency, index) => {
						return (
							<option key={index} value={currency}>
								{currency}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}

export default YouSend;
