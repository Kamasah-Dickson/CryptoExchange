interface exchangeProp {
	currencies: string[];
	amount: number;
	currency: string;
}

function YouGet({ currencies, amount, currency }: exchangeProp) {
	return (
		<div className="flex w-full items-center justify-between gap-1">
			<div className=" relative flex h-[55px] flex-[2] items-center justify-between">
				<div className="absolute pl-[30px] font-small text-[#525151]">
					You Get
				</div>

				<input
					dir="rtl"
					inputMode="decimal"
					type="text"
					className=" h-full w-full rounded-l-md  bg-[#8aa0c03f] px-2 pl-[110px] text-2xl outline-1 outline-[#604adbaf] focus:bg-[rgba(70,46,124,0.13)]"
				/>
			</div>
			<select
				name="userOption"
				id=""
				className="h-[55px] flex-1 cursor-pointer rounded-r-md bg-[#8aa0c063] p-1 font-bold uppercase text-black outline-none transition-all hover:bg-[#370b97] hover:text-white"
			>
				{currencies.map((currency, index) => {
					return (
						<option key={index} value="currency">
							{currency}
						</option>
					);
				})}
			</select>
		</div>
	);
}

export default YouGet;
