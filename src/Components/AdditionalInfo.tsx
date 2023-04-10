import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import {
	useState,
	useRef,
	useCallback,
	useReducer,
	useContext,
	useEffect,
} from "react";
import { currencyNameContext } from "../contexts/contexts";
import { validate } from "multicoin-address-validator/dist/wallet-address-validator";

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
	const [reducerState, dispatch] = useReducer(reducer, initialState);
	const handleFocus = useRef<HTMLInputElement>(null);
	const handleFocus2 = useRef<HTMLInputElement>(null);
	const {
		walletInputValue,
		setInvalidAddress,
		currencyData,
		invalidAddress2,
		setInvalidAddress2,
		showAdditionalDetails,
		setshowAdditionalDetails,
	} = useContext(currencyNameContext);
	const [validEmail, setValidEmail] = useState(false);
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

	useEffect(() => {
		validateUserAddress();
	}, [reducerState.wallet_address, currencyData.userCurrency]);

	function validateUserAddress() {
		const isValid = validate(
			reducerState.wallet_address,
			currencyData.userCurrency
		);

		if (isValid) {
			setInvalidAddress2(false);
			setInvalidAddress(false);
		} else if (reducerState.wallet_address === "") {
			setInvalidAddress(false);
		} else {
			setInvalidAddress2(true);
			setInvalidAddress(true);
		}
	}

	function handleBlur() {
		if (reducerState.wallet_address !== "" && invalidAddress2) {
			dispatch({
				type: "flex-direction",
				value: "flex-col items-start bg-[#63071a] border py-2 text-sm",
			});
		} else if (reducerState.wallet_address && !invalidAddress2) {
			dispatch({
				type: "flex-direction",
				value:
					"flex-col items-start border border-green-500 bg-green-900 py-2 text-sm",
			});
		} else if (!reducerState.wallet_address) {
			dispatch({
				type: "flex-direction",
				value: "flex-row items-center bg-[#80808034] hover:bg-[#8080803b]",
			});
		}
	}
	function handleBlur2() {
		if (reducerState.email) {
			if (validEmail) {
				dispatch({
					type: "flex-direction2",
					value:
						"flex-col items-start bg-green-900 text-sm py-2 hover:bg-green-800",
				});
			} else if (!validEmail) {
				dispatch({
					type: "flex-direction2",
					value:
						"flex-col items-start bg-[#63071a] border border-[crimson] text-sm py-2 hover:bg-red-[#63071a]",
				});
			}
		} else {
			dispatch({
				type: "flex-direction2",
				value: "flex-row items-center bg-[#80808034] hover:bg-[#8080803b]",
			});
		}
	}

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		dispatch({ type: "walletInput", value: event.target.value });

		if (event.target.value) {
			validateUserAddress();
			dispatch({
				type: "flex-direction",
				value: "flex-col items-start border py-2 text-sm bg-transparent",
			});
		} else {
			dispatch({
				type: "flex-direction",
				value: "flex-row items-center bg-[#80808034] hover:bg-[#8080803b]",
			});
		}
	}

	function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
		dispatch({ type: "email", value: event.target.value });

		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (event.target.value) {
			const isValid = regex.test(event.target.value);
			setValidEmail(isValid);
			dispatch({
				type: "flex-direction2",
				value: "flex-col items-start border py-2 text-sm bg-transparent",
			});
			if (walletInputValue.recipient_wallet_address === "") {
				setInvalidAddress(true);
			}
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
				onClick={() => setshowAdditionalDetails((prev) => !prev)}
			>
				Additional Information
				{showAdditionalDetails ? (
					<MdOutlineKeyboardArrowUp size={20} />
				) : (
					<MdOutlineKeyboardArrowDown size={20} />
				)}
			</h3>

			<div>
				<div
					className={`mt-10 transition-all ${
						showAdditionalDetails ? "h-[350px] md:h-[180px]" : "h-[0px]"
					} flex flex-col gap-6 overflow-hidden`}
				>
					<div className="flex flex-col items-center justify-center gap-5 md:flex-row">
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
										"flex-col items-start border  py-2 text-sm bg-transparent",
								})
							)}
							className={`${reducerState.flexDirection}
							
							${
								reducerState.wallet_address === ""
									? "border-white"
									: invalidAddress2
									? "border-[crimson]"
									: "border-green-500 bg-green-900"
							} mt-4 flex h-[55px] flex-1  cursor-pointer rounded-lg px-5`}
						>
							<div className="text-[white]">
								Recipient {currencyData.userCurrency} address
							</div>
							<input
								value={reducerState.wallet_address}
								autoComplete="off"
								name="wallet_address"
								ref={handleFocus}
								onChange={(e) => handleInputChange(e)}
								onBlur={handleBlur}
								className=" h-[55px] w-full flex-1 bg-transparent outline-none"
								type="text"
							/>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center gap-5 md:flex-row">
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
										"flex-col items-start border py-2 text-sm bg-transparent",
								})
							)}
							className={`${reducerState.flexDirection2} ${
								validEmail
									? "border border-green-500"
									: reducerState.email === ""
									? null
									: "border-[crimson]"
							} mt-4 flex h-[55px] flex-1 cursor-pointer rounded-lg  px-5`}
						>
							<div className="text-[white]">Enter your Email address</div>
							<input
								value={reducerState.email}
								name="email"
								autoComplete="off"
								ref={handleFocus2}
								onChange={(e) => handleEmail(e)}
								onBlur={handleBlur2}
								className=" h-[55px] w-full flex-1 bg-transparent outline-none active:bg-transparent"
								type="email"
							/>
						</div>
					</div>
				</div>
				{reducerState.email === ""
					? null
					: !validEmail && (
							<p className="text-right text-sm text-[crimson]">
								something wrong with the email address
							</p>
					  )}
			</div>
		</div>
	);
}

export default AdditionalInfo;
