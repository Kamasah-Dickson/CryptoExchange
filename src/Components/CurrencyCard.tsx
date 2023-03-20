import { useState } from "react";
import Exchange from "./Exchange";

function CurrencyCard() {
	const [currencies, setCurrencies] = useState(["hello"]);
	const [activeTab, setActiveTab] = useState(1);
	return (
		<form className=" my-max2 mt-20 overflow-hidden  rounded-3xl bg-[white] shadow-2xl ">
			<div>
				{/* ====tab header==== */}
				<div className=" flex items-center justify-between">
					<div
						onClick={() => setActiveTab(2)}
						className={`skewed-border ${
							activeTab === 1 && "active"
						} flex-1 cursor-pointer p-4 text-center text-xl font-normal`}
					>
						<h2 className={activeTab === 1 ? "skew-x-[15deg]" : ""}>
							Crypto Exchange
						</h2>
					</div>
					<div
						onClick={() => setActiveTab(1)}
						className={`skewed-border ${
							activeTab === 2 && "active2"
						} flex-1 cursor-pointer p-4 text-center  text-xl font-normal`}
					>
						<h2 className={activeTab === 2 ? "skew-x-[-15deg]" : ""}>
							Buy/Sell Crypto
						</h2>
					</div>
				</div>
				{/* ==tabs==== */}

				<div className="mx-auto mt-10 max-w-[600px]">
					{activeTab === 2 ? (
						<div className="flex flex-col items-center justify-center gap-10">
							<Exchange currencies={currencies} amount={1} currency={"USD"} />
						</div>
					) : (
						<div></div>
					)}
				</div>
				<div className="py-10 px-4">
					<input
						type="submit"
						value="Exchange"
						className="font-largeYYYYYY mx-auto mt-4 block w-full max-w-[600px] cursor-pointer rounded-md bg-[#370b97c9] py-5 font-small text-white transition-all hover:bg-[#370b97] active:scale-[1.06]"
					/>
				</div>
			</div>
		</form>
	);
}

export default CurrencyCard;
