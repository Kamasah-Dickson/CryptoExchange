import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useState, useRef, useCallback, useReducer, useContext } from "react";
import { currencyNameContext } from "../contexts/contexts";

const initialState = {
	flexDirection: "flex-row items-center bg-[#80808034] hover:bg-[#8080803b]",
	flexDirection2: "flex-row items-center bg-[#80808034] hover:bg-[#8080803b]",
	email: "",
	wallet_address: "",
};

type actionType = {
	type: string;
	value: string;
};

function reducer(
	state: typeof initialState,
	action: actionType
): typeof initialState {
	switch (action.type) {
		case "flex-direction":
			return {
				...state,
				flexDirection: action.value,
			};
		case "flex-direction2":
			return {
				...state,
				flexDirection2: action.value,
			};
		case "walletInput":
			return {
				...state,
				wallet_address: action.value,
			};
		case "email":
			return {
				...state,
				email: action.value,
			};

		default:
			return state;
	}
}

function AdditionalInfo() {
	const [showInfo, setShowInfo] = useState(false);
	const [reducerState, dispatch] = useReducer(reducer, initialState);
	const handleFocus = useRef<HTMLInputElement>(null);
	const handleFocus2 = useRef<HTMLInputElement>(null);
	const { currencyAddresses } = useContext(currencyNameContext);
	const handleClick = useCallback(() => {
		if (handleFocus.current) {
			handleFocus.current.focus();
		}
	}, []);

	const handleClick2 = useCallback(() => {
		if (handleFocus2.current) {
			handleFocus2.current.focus();
		}
	}, []);

	function handleBlur() {
		if (!reducerState.wallet_address) {
			dispatch({
				type: "flex-direction",
				value: "flex-row items-center bg-[#80808034] hover:bg-[#8080803b]",
			});
		} else {
			dispatch({
				type: "flex-direction",
				value:
					"flex-col items-start border border-white py-2 text-sm bg-transparent",
			});
		}
	}

	function handleBlur2() {
		if (!reducerState.email) {
			dispatch({
				type: "flex-direction2",
				value: "flex-row items-center bg-[#80808034] hover:bg-[#8080803b]",
			});
		} else {
			dispatch({
				type: "flex-direction2",
				value:
					"flex-col items-start border border-white py-2 text-sm bg-transparent",
			});
		}
	}

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		dispatch({ type: "walletInput", value: event.target.value });

		if (event.target.value) {
			dispatch({
				type: "flex-direction",
				value:
					"flex-col items-start border border-white py-2 text-sm bg-transparent",
			});
		} else {
			dispatch({
				type: "flex-direction",
				value: "flex-row items-center bg-[#80808034] hover:bg-[#8080803b]",
			});
		}
	}
	function handleInputChange2(event: React.ChangeEvent<HTMLInputElement>) {
		dispatch({ type: "email", value: event.target.value });

		if (event.target.value) {
			dispatch({
				type: "flex-direction2",
				value:
					"flex-col items-start border border-white py-2 text-sm bg-transparent",
			});
		} else {
			dispatch({
				type: "flex-direction2",
				value: "flex-row items-center bg-[#80808034] hover:bg-[#8080803b]",
			});
		}
	}

	return (
		<div className="mt-10">
			<h3
				className="flex cursor-pointer items-center justify-center"
				onClick={() => setShowInfo((prev) => !prev)}
			>
				Additional Information
				{showInfo ? (
					<MdOutlineKeyboardArrowUp size={20} />
				) : (
					<MdOutlineKeyboardArrowDown size={20} />
				)}
			</h3>

			<div
				className={`mt-5 transition-all ${
					showInfo ? "h-[180px]" : "h-[0px]"
				} flex flex-col gap-6 overflow-hidden`}
			>
				<div className="flex items-center justify-center gap-5">
					<div className="flex-1">
						<h3 className="font-medium text-white">
							Enter your refund Address
						</h3>
						<p className="text-sm text-[grey]">
							We recommend adding your wallet address for a refund.
						</p>
					</div>
					<div
						onClick={() => (
							handleClick(),
							dispatch({
								type: "flex-direction",
								value:
									"flex-col items-start border border-white py-2 text-sm bg-transparent",
							})
						)}
						className={`${reducerState.flexDirection} mt-4 flex h-[55px] flex-1 cursor-pointer rounded-lg  px-5`}
					>
						<div className="text-[white]">
							Recipient {currencyAddresses.refund_Wallet_Address} address
						</div>
						<input
							name="wallet_address"
							ref={handleFocus}
							onChange={(e) => handleInputChange(e)}
							onBlur={handleBlur}
							className=" h-full w-full flex-1 bg-transparent outline-none"
							type="text"
						/>
					</div>
				</div>
				<div className="flex items-center justify-center gap-5">
					<div className="flex-1">
						<h3 className="font-medium text-white">Add your Email</h3>
						<p className="text-sm text-[grey]">
							Add your email to get notifications about this exchange.
						</p>
					</div>

					<div
						onClick={() => (
							handleClick2(),
							dispatch({
								type: "flex-direction2",
								value:
									"flex-col items-start border border-white py-2 text-sm bg-transparent",
							})
						)}
						className={`${reducerState.flexDirection2} mt-4 flex h-[55px] flex-1 cursor-pointer rounded-lg  px-5`}
					>
						<div className="text-[white]">Enter your Email address</div>
						<input
							name="email"
							ref={handleFocus2}
							onChange={(e) => handleInputChange2(e)}
							onBlur={handleBlur2}
							className=" h-full w-full flex-1 bg-transparent outline-none"
							type="text"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdditionalInfo;
