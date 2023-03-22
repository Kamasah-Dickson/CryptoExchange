import { useContext } from "react";
import Decimal from "decimal.js";
import { currencyNameContext } from "../contexts/contexts";

interface exchangeProp {
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
	userCurrency: string;
	setResponseCurrencyData: React.Dispatch<
		React.SetStateAction<{
			response_currency: string;
			response_coins: number;
		}>
	>;

	responseCurrencyData: {
		response_currency: string;
		response_coins: number;
	};
}

function YouGet({
	currencies,
	userCurrency,
	setResponseCurrencyData,
	responseCurrencyData,
}: exchangeProp) {
	function updateResponseOptions(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setResponseCurrencyData((prev) => ({
			...prev,
			response_coins: Number(value),
		}));
	}

	const { setCurrencyFullname } = useContext(currencyNameContext);

	//fix precition errors leading to zeroes using decimal.js
	const responseCurrencyDataDecimal = new Decimal(
		responseCurrencyData.response_coins
	).toNumber();
	const userExchangeRate2 = (currencies[0] as any)[userCurrency];

	const responseExchangeRate2 = (currencies[0] as any)[
		responseCurrencyData.response_currency
	];

	function handleresponseCurrencyData(responseCurrencyData: number) {
		const result = parseFloat(
			(
				(responseCurrencyData * userExchangeRate2) /
				responseExchangeRate2
			).toFixed(7)
		);
		setResponseCurrencyData((prev) => ({
			...prev,
			response_coins: Number(result),
		}));
	}

	//handle responseCurrencyData changes
	function handleCurrency(e: React.ChangeEvent<HTMLSelectElement>) {
		setResponseCurrencyData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
		setCurrencyFullname((currencies[0] as any)[e.target.name].name);

		handleresponseCurrencyData(responseCurrencyData.response_coins);
	}

	return (
		<div className="flex w-full items-center justify-between gap-[3px]">
			<div className=" relative flex h-[55px] flex-[2] items-center justify-between">
				<div className="absolute pl-[30px] font-light text-[white]">
					You Get
				</div>

				<input
					disabled
					name="responseCurrencyData"
					value={responseCurrencyData.response_coins}
					onChange={(e) => updateResponseOptions(e)}
					inputMode="decimal"
					type="number"
					className="h-full w-full rounded-l-md bg-[#8aa0c031] px-2  pl-[110px] text-right text-xl font-semibold outline-1 outline-[#604adbaf] focus:bg-[rgba(70,46,124,0.13)]"
				/>
			</div>
			<select
				// value={}
				onChange={(e) => handleCurrency(e)}
				name="responseCurrencyData"
				id="responseCurrencyData"
				className="h-[55px] flex-1 cursor-pointer rounded-r-md bg-[#210857] p-1 font-bold uppercase text-white outline-none transition-all hover:bg-[#370b97f3]"
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
	);
}
export default YouGet;
