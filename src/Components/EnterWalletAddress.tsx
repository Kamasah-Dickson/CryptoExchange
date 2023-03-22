import React, { useState, useRef, useCallback } from "react";
import me from "../assets/EgLF6Jmi_4x.jpg";

interface WalletaddressProp {
	currencyAddresses: {
		user_Wallet_Address: string;
		refund_Wallet_Address: string;
	};
}

export default function EnterWalletAddress({
	currencyAddresses,
}: WalletaddressProp) {
	const handleFocus = useRef<HTMLInputElement>(null);
	const [inputValue, setInputValue] = useState({
		user_wallet_address: "",
	});
	const [flexDirection, setFlexDirection] = useState(
		"flex-row items-center bg-[#80808034] hover:bg-[#8080803b]"
	);
	const handleClick = useCallback(() => {
		if (handleFocus.current) {
			handleFocus.current.focus();
		}
	}, []);

	function handleBlur() {
		if (!inputValue.user_wallet_address) {
			setFlexDirection(
				"flex-row items-center bg-[#80808034] hover:bg-[#8080803b]"
			);
		} else {
			setFlexDirection(
				"flex-col items-start border border-white py-2 text-sm bg-transparent"
			);
		}
	}

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setInputValue((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));

		if (event.target.value) {
			setFlexDirection(
				"flex-col items-start border border-white py-2 text-sm bg-transparent"
			);
		} else {
			setFlexDirection(
				"flex-row items-center bg-[#80808034] hover:bg-[#8080803b]"
			);
		}
	}

	return (
		<div className="mt-10">
			<div className="flex items-center justify-between gap-5">
				<h3 className="text-lg font-medium">Enter your wallet address</h3>
				<div className="h-5 w-5">
					<img className="h-full w-full" src={me} alt="metamask" />
				</div>
			</div>
			<div
				onClick={() => (
					handleClick(),
					setFlexDirection(
						"flex-col items-start border border-white py-2 text-sm bg-transparent"
					)
				)}
				className={`${flexDirection} mt-4 flex h-[55px] cursor-pointer rounded-lg  px-5`}
			>
				<div className="text-[white]">
					Recipient {currencyAddresses.user_Wallet_Address} address
				</div>
				<input
					name="user_wallet_address"
					value={inputValue.user_wallet_address}
					ref={handleFocus}
					onChange={(e) => handleInputChange(e)}
					onBlur={handleBlur}
					className=" h-full w-full flex-1 bg-transparent outline-none"
					type="text"
				/>
			</div>
			<input
				disabled={!inputValue.user_wallet_address}
				type="submit"
				value="Create an exchange"
				className="mx-auto mt-4 block w-full cursor-pointer rounded-md bg-[#370b97] py-5 font-normal text-white transition-all hover:bg-[#370b97c9]
							active:scale-[1.03] disabled:transform-none disabled:bg-[#370b97c9] disabled:opacity-[0.3]"
			/>
		</div>
	);
}
