import { useContext } from "react";
import Decimal from "decimal.js";
import { currencyNameContext } from "../contexts/contexts";

interface exchangeProp {
	currencies: {
		btc: {
			value: number;
		};
		usdc: {
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

		loom: {
			value: number;
		};
		vot: {
			value: number;
		};
	}[];
	prevCurrencies: {
		prevUserCurrency: string;
		prevResponseCurrency: string;
	};
	setprevUserCurrency: React.Dispatch<
		React.SetStateAction<{
			prevUserCurrency: string;
			prevResponseCurrency: string;
		}>
	>;
}

function YouGet({
	currencies,
	prevCurrencies,
	setprevUserCurrency,
}: exchangeProp) {
	const { setcurrencyData, currencyData } = useContext(currencyNameContext);

	//fix precition errors leading to zeroes using decimal.js
	const currencyDataDecimal = new Decimal(
		currencyData.response_coins
	).toNumber();

	function handlecurrencyData() {
		const userExchangeRate2 = (currencies[0] as any)[currencyData.userCurrency]
			.value;

		const responseExchangeRate2 = (currencies[0] as any)[
			currencyData.response_currency
		].value;
		const result = parseFloat(
			(
				(currencyDataDecimal * userExchangeRate2) /
				responseExchangeRate2
			).toFixed(7)
		);
		setcurrencyData((prev) => ({
			...prev,
			response_coins: Number(result),
		}));
	}

	function updateResponseOptions(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setcurrencyData((prev) => ({
			...prev,
			[e.target.value]: parseInt(value),
		}));
	}
	//handle currencyData changes
	function handleCurrency(e: React.ChangeEvent<HTMLSelectElement>) {
		handlecurrencyData();
		setcurrencyData((prev) => ({
			...prev,
			response_currency: e.target.value,
		}));
	}

	// =========switch up select options if user tries to make them the same=========
	function handleGetBlur() {
		if (
			currencyData.response_currency !== prevCurrencies.prevResponseCurrency
		) {
			setprevUserCurrency((prev) => ({
				...prev,
				prevResponseCurrency: currencyData.response_currency,
			}));
		}
	}

	function handleGetClick() {
		handleGetBlur();
		if (currencyData.userCurrency === currencyData.response_currency) {
			setcurrencyData((prev) => ({
				...prev,
				userCurrency: prevCurrencies.prevResponseCurrency,
			}));
		}
	}

	return (
		<div className="flex w-full flex-col gap-2">
			<label htmlFor="youGet" className="text-left sm:hidden">
				You Get
			</label>
			<div className="flex items-center justify-between gap-[3px]">
				<div className=" relative flex h-[50px] flex-[2] items-center justify-between">
					<div className="absolute hidden pl-[30px] font-light text-[white] sm:flex">
						You Get
					</div>

					<input
						disabled
						id="youGet"
						name="response_coins"
						value={currencyData.response_coins}
						onChange={(e) => updateResponseOptions(e)}
						inputMode="decimal"
						type="number"
						className="h-full w-full rounded-l-md bg-[#8aa0c031] px-2  text-right text-xl font-semibold outline-1 outline-[#604adbaf] focus:bg-[rgba(70,46,124,0.13)]"
					/>
				</div>
				<select
					value={currencyData.response_currency}
					onChange={(e) => handleCurrency(e)}
					onClick={handleGetClick}
					name="responseCurrencyName"
					id="user_Wallet_Address"
					className="flex-2 h-[50px] cursor-pointer rounded-r-md bg-[#210857] p-1 font-bold uppercase text-white outline-none transition-all hover:bg-[#370b97f3] md:flex-1"
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
export default YouGet;
