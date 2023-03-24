import React, {
	useState,
	useRef,
	useCallback,
	useContext,
	useEffect,
} from "react";
import me from "../assets/EgLF6Jmi_4x.jpg";
import { validate } from "multicoin-address-validator/dist/wallet-address-validator";

import { currencyNameContext } from "../contexts/contexts";
interface WalletaddressProp {
	currencyAddresses: {
		user_Wallet_Address: string;
		refund_Wallet_Address: string;
	};
}

export default function EnterWalletAddress({
	currencyAddresses,
}: WalletaddressProp) {
	const { currencyData } = useContext(currencyNameContext);
	const [invalidAddress, setInvalidAddress] = useState(true);

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

	// =====validations=========
	function validateUserAddress() {
		const isValid = validate(
			inputValue.user_wallet_address,
			currencyData.response_currency
		);

		if (isValid) {
			setInvalidAddress(false); // Enable the submit button
		} else {
			setInvalidAddress(true); // Disable the submit button
		}
	}

	useEffect(() => {
		validateUserAddress();
		console.log(invalidAddress);
	}, [inputValue.user_wallet_address, currencyData.response_currency]);

	// =====validations-end=========

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
						"flex-col items-start  border border-white py-2 text-sm bg-transparent"
					)
				)}
				className={`${flexDirection} ${
					inputValue.user_wallet_address !== ""
						? invalidAddress
							? "border border-[crimson] bg-[#63071a]"
							: "border-green-500 bg-green-900"
						: ""
				} mt-4 flex h-[55px] cursor-pointer rounded-lg px-5 active:border-white  active:bg-transparent`}
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
				disabled={invalidAddress}
				type="submit"
				value="Create an exchange"
				className="mx-auto mt-4 block w-full cursor-pointer rounded-md bg-[#370b97] py-5 font-normal text-white transition-all hover:bg-[#370b97c9]
							active:scale-[1.03] disabled:transform-none disabled:cursor-not-allowed disabled:bg-[#370b97c9] disabled:opacity-[0.3]"
			/>
		</div>
	);
}
