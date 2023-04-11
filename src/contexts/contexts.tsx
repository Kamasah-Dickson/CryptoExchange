import { useState, createContext, ReactNode } from "react";
import { User } from "firebase/auth";
import { currencyNameContextProp } from "../interfaces/context_Interface";
interface childProp {
	children: ReactNode;
}

export const currencyNameContext = createContext<currencyNameContextProp>({
	setCurrencies: () => {},
	setcurrencyData: () => {},
	setwalletInputValue: () => {},
	setInvalidAddress: () => {},
	setInvalidAddress2: () => {},
	setshouldDisable: () => {},
	currencies: [
		{
			btc: {
				value: 0.123677612,
				name: "bitcoin",
			},
			usdc: {
				value: 1.868767645,
				name: "usdcc",
			},
			eth: {
				value: 0.756766234,
				name: "etherium",
			},
			xrp: {
				value: 0.726766234,
				name: "ripple",
			},
			ltc: {
				value: 0.346766736,
				name: "litecoin",
			},
			xmr: {
				value: 2.344544523,
				name: "xmr",
			},

			loom: {
				value: 0.44533434,
				name: "loom",
			},
			vot: {
				value: 4.33433554,
				name: "vot",
			},
		},
	],
	currencyData: {
		response_currency: "eth",
		userCurrency: "btc",
		response_coins: 0.0123,
		userCoins: 0.1,
	},
	shouldDisable: true,
	invalidAddress: true,
	invalidAddress2: true,
	walletInputValue: {
		recipient_wallet_address: "",
	},
	setSignedUser: () => {},
	signedUser: null,
});

function CurrencyContext({ children }: childProp) {
	const [currencies, setCurrencies] = useState([
		{
			btc: {
				value: 0.123677612,
				name: "bitcoin",
			},
			usdc: {
				value: 1.868767645,
				name: "usdc",
			},
			eth: {
				value: 0.756766234,
				name: "etherium",
			},
			xrp: {
				value: 0.726766234,
				name: "ripple",
			},
			ltc: {
				value: 0.343487833,
				name: "litecoin",
			},
			xmr: {
				value: 2.34454452,
				name: "xmr",
			},

			loom: {
				value: 0.44533434,
				name: "loom",
			},
			vot: {
				value: 4.33433554,
				name: "vot",
			},
		},
	]);

	const [currencyData, setcurrencyData] = useState({
		response_currency: "eth",
		userCurrency: "btc",
		response_coins: 0.0123,
		userCoins: 0.1,
	});

	const [walletInputValue, setwalletInputValue] = useState({
		recipient_wallet_address: "",
	});

	const [invalidAddress, setInvalidAddress] = useState(true);
	const [invalidAddress2, setInvalidAddress2] = useState(true);
	const [shouldDisable, setshouldDisable] = useState(true);
	const [signedUser, setSignedUser] = useState<User | null>(null);

	return (
		<currencyNameContext.Provider
			value={{
				currencies,
				setCurrencies,
				currencyData,
				setcurrencyData,
				walletInputValue,
				setwalletInputValue,
				invalidAddress,
				setInvalidAddress,
				invalidAddress2,
				setInvalidAddress2,
				setshouldDisable,
				shouldDisable,
				setSignedUser,
				signedUser,
			}}
		>
			{children}
		</currencyNameContext.Provider>
	);
}

export default CurrencyContext;
