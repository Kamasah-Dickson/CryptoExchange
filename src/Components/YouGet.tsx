import React from "react";
interface exchangeProp {
	currencies: string[];
	amount: number;
	currency: string;
}

function YouGet({ currencies, amount, currency }: exchangeProp) {
	return (
		<div className="flex w-full items-center justify-between gap-1">
			<div className=" relative flex h-[60px] flex-[2] items-center justify-between">
				<div className="absolute pl-[30px] font-small text-[#525151]">
					You Get
				</div>
				<input
					dir="rtl"
					inputMode="decimal"
					type="text"
					className=" h-full w-full rounded-lg bg-[rgb(227,233,240)]  px-2 pl-[110px] outline-1 outline-[#8981b69d]"
				/>
			</div>
			<select name="" id="" className="flex-1">
				{currencies.map((currency) => {
					return <option value="currency">{currency}</option>;
				})}
			</select>
		</div>
	);
}

export default YouGet;
