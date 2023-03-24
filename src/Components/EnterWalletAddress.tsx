import React, {
	useState,
	useRef,
	useCallback,
	useContext,
	useEffect,
} from "react";
import metamaskImg from "../assets/metamask-fox.svg";
import { validate } from "multicoin-address-validator/dist/wallet-address-validator";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { currencyNameContext } from "../contexts/contexts";

declare global {
	interface Window {
		ethereum?: any;
	}
}

export default function EnterWalletAddress() {
	const { currencyData } = useContext(currencyNameContext);
	const [invalidAddress, setInvalidAddress] = useState(true);

	const handleFocus = useRef<HTMLInputElement>(null);

	const [walletInputValue, setwalletInputValue] = useState({
		recipient_wallet_address: "",
	});

	const [flexDirection, setFlexDirection] = useState(
		"flex-row items-center bg-[#80808034]"
	);

	const handleClick = useCallback(() => {
		if (handleFocus.current) {
			handleFocus.current.focus();
		}
	}, []);

	// ====connectWithMetaMask======
	async function ConnectWithMetaMask() {
		if (typeof (window as any).ethereum !== "undefined") {
			try {
				const accounts = await window.ethereum.request({
					method: "eth_requestAccounts",
				});
				const account = accounts[0];
				setwalletInputValue((prev) => ({
					...prev,
					recipient_wallet_address: account,
				}));
				setFlexDirection("flex-col items-start py-2 text-sm");
			} catch (error: any) {
				toast.error(error.message, {
					position: toast.POSITION.BOTTOM_RIGHT,
					toastId: "preventDuplicate-yes",
				});
			}
		} else {
			toast.error("Install the MetaMask extension", {
				position: toast.POSITION.BOTTOM_RIGHT,
				toastId: "preventDuplicate-yes",
			});
		}
	}

	// ====Ending of connectWithMetaMask======

	// =====validations=========
	function validateUserAddress() {
		const isValid = validate(
			walletInputValue.recipient_wallet_address,
			currencyData.response_currency
		);

		if (isValid) {
			setInvalidAddress(false); // Enable the submit button
			console.log("false");
		} else {
			setInvalidAddress(true); // Disable the submit button
			console.log("true");
		}
	}

	useEffect(() => {
		validateUserAddress();
	}, [
		walletInputValue.recipient_wallet_address,
		currencyData.response_currency,
	]);

	// =====validations-end=========

	function handleBlur() {
		if (walletInputValue.recipient_wallet_address && invalidAddress) {
			setFlexDirection(
				"flex-col items-start border border-[crimson] bg-[#63071a] py-2 text-sm"
			);
		} else if (walletInputValue.recipient_wallet_address && !invalidAddress) {
			setFlexDirection(
				"flex-col items-start border border-green-500 bg-green-900 py-2 text-sm"
			);
		}
	}

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setwalletInputValue((prev) => ({
			...prev,
			[event.target.name]: event.target.value.trim(),
		}));

		if (event.target.value.trim() && invalidAddress) {
			setFlexDirection(
				"flex-col items-start border border-[crimson] py-2 text-sm bg-[#63071a]"
			);
		} else {
			setFlexDirection("flex-row items-center bg-[#80808034]");
		}
	}

	return (
		<div className="mt-10">
			<div className="flex items-center justify-between gap-5">
				<h3 className="text-lg font-medium">Enter your wallet address</h3>
				<div className="h-7 w-7 cursor-pointer">
					<ToastContainer autoClose={4500} transition={Zoom} />
					<img
						className="h-full w-full"
						src={metamaskImg}
						alt="metamask"
						onClick={() => ConnectWithMetaMask()}
					/>
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
					walletInputValue.recipient_wallet_address !== ""
						? invalidAddress
							? "border border-[crimson] bg-[#63071a]"
							: "border-green-500 bg-green-900"
						: ""
				} mt-4 flex h-[55px] cursor-pointer rounded-lg px-5 active:border-white  active:bg-transparent`}
			>
				<div className="text-[white]">
					Recipient {currencyData.response_currency} address
				</div>
				<input
					autoComplete="off"
					name="recipient_wallet_address"
					value={walletInputValue.recipient_wallet_address}
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
