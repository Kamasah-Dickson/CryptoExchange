import { useState } from "react";
import Exchange from "./Exchange";
import YouGet from "./YouGet";

function CurrencyCard() {
	const [currencies, setCurrencies] = useState(["btc", "eth", "ltc"]);
	const [activeTab, setActiveTab] = useState(1);
	return (
		<form className=" my-max2 mt-10 overflow-hidden rounded-3xl bg-white shadow-2xl ">
			<div className="justify-cente flex flex-col">
				{/* ====tab header==== */}
				<div className=" flex items-center justify-between bg-transparent">
					<div
						onClick={() => setActiveTab(2)}
						className={`skewed-border ${
							activeTab === 1 && "active"
						} flex-1 cursor-pointer p-5 `}
					>
						<h2
							className={`${
								activeTab === 1 ? "skew-x-[15deg]" : ""
							} text-center text-[15px] font-normal`}
						>
							Crypto Exchange
						</h2>
					</div>
					<div
						onClick={() => setActiveTab(1)}
						className={`skewed-border ${
							activeTab === 2 && "active2"
						} flex-1 cursor-pointer p-5 `}
					>
						<h2
							className={`${
								activeTab === 2 ? "skew-x-[-15deg]" : ""
							} text-center  text-[15px] font-normal `}
						>
							Buy/Sell Crypto
						</h2>
					</div>
				</div>
				{/* ==tabs==== */}
				<div className="px-10">
					<div className="mx-auto mt-10">
						{activeTab === 2 ? (
							<div className="flex flex-col items-center justify-center gap-7">
								<Exchange currencies={currencies} amount={1} currency={"USD"} />
								<YouGet currencies={currencies} amount={1} currency={"USD"} />
							</div>
						) : (
							<div></div>
						)}
					</div>
					<div className="pb-10 pt-5">
						<input
							type="submit"
							value="Exchange"
							className="mx-auto mt-4 block w-full cursor-pointer rounded-md bg-[#370b97] py-5 font-normal text-white transition-all hover:bg-[#370b97c9] active:scale-[1.06]"
						/>
					</div>
				</div>
			</div>
		</form>
	);
}

export default CurrencyCard;
