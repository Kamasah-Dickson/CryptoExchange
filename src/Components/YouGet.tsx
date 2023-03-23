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
}

function YouGet({ currencies }: exchangeProp) {
	const { setcurrencyData, currencyData } = useContext(currencyNameContext);
	function updateResponseOptions(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setcurrencyData((prev) => ({
			...prev,
			[e.target.value]: parseInt(value),
		}));
	}

	const { setcurrencyAddresses } = useContext(currencyNameContext);

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

	//handle currencyData changes
	function handleCurrency(e: React.ChangeEvent<HTMLSelectElement>) {
		handlecurrencyData();
		setcurrencyData((prev) => ({
			...prev,
			response_currency: e.target.value,
		}));

		setcurrencyAddresses((prev) => ({
			...prev,
			user_Wallet_Address: (currencies[0] as any)[e.target.value].name,
		}));
	}

	return (
		<div className="flex w-full flex-col gap-2">
			<label htmlFor="youGet" className="text-left sm:hidden">
				You send
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
