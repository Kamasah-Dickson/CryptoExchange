import { useState, createContext, ReactNode } from "react";

interface childProp {
	children: ReactNode;
}

interface currencyNameContextProp {
	setcurrencyAddresses: React.Dispatch<
		React.SetStateAction<{
			user_Wallet_Address: string;
			refund_Wallet_Address: string;
		}>
	>;

	currencies: {
		btc: {
			value: number;
			name: string;
		};
		usd: {
			value: number;
			name: string;
		};
		eth: {
			value: number;
			name: string;
		};
		ltc: {
			value: number;
			name: string;
		};
		xmr: {
			value: number;
			name: string;
		};
		poof: {
			value: number;
			name: string;
		};
		loom: {
			value: number;
			name: string;
		};
		volt: {
			value: number;
			name: string;
		};
	}[];

	setCurrencies: React.Dispatch<
		React.SetStateAction<
			{
				btc: {
					value: number;
					name: string;
				};
				usd: {
					value: number;
					name: string;
				};
				eth: {
					value: number;
					name: string;
				};
				ltc: {
					value: number;
					name: string;
				};
				xmr: {
					value: number;
					name: string;
				};
				poof: {
					value: number;
					name: string;
				};
				loom: {
					value: number;
					name: string;
				};
				volt: {
					value: number;
					name: string;
				};
			}[]
		>
	>;
	setResponseCurrencyData: React.Dispatch<
		React.SetStateAction<{
			response_currency: string;
			response_coins: number;
		}>
	>;

	responseCurrencyData: {
		response_currency: string;
		response_coins: number;
	};

	currencyAddresses: {
		user_Wallet_Address: string;
		refund_Wallet_Address: string;
	};
}

export const currencyNameContext = createContext<currencyNameContextProp>({
	currencyAddresses: {
		user_Wallet_Address: "bitcoin",
		refund_Wallet_Address: "bitcoin",
	},
	setcurrencyAddresses: () => {},
	setCurrencies: () => {},
	currencies: [
		{
			btc: {
				value: 0.123677612,
				name: "bitcoin",
			},
			usd: {
				value: 1.868767645,
				name: "usd",
			},
			eth: {
				value: 0.756766234,
				name: "etherium",
			},
			ltc: {
				value: 0.346766736,
				name: "litecoin",
			},
			xmr: {
				value: 2.344544523,
				name: "xmr",
			},
			poof: {
				value: 7.53453453,
				name: "poof",
			},
			loom: {
				value: 0.44533434,
				name: "loom",
			},
			volt: {
				value: 4.33433554,
				name: "volt",
			},
		},
	],
	setResponseCurrencyData: () => {},
	responseCurrencyData: {
		response_currency: "eth",
		response_coins: 0.0123,
	},
});

// const [currencyStat]

function CurrencyContext({ children }: childProp) {
	const [currencyAddresses, setcurrencyAddresses] = useState({
		user_Wallet_Address: "bitcoin",
		refund_Wallet_Address: "bitcoin",
	});

	const [currencies, setCurrencies] = useState([
		{
			btc: {
				value: 0.123677612,
				name: "bitcoin",
			},
			usd: {
				value: 1.868767645,
				name: "usd",
			},
			eth: {
				value: 0.756766234,
				name: "etherium",
			},
			ltc: {
				value: 0.346766736,
				name: "litecoin",
			},
			xmr: {
				value: 2.344544523,
				name: "xmr",
			},
			poof: {
				value: 7.53453453,
				name: "poof",
			},
			loom: {
				value: 0.44533434,
				name: "loom",
			},
			volt: {
				value: 4.33433554,
				name: "volt",
			},
		},
	]);

	const [responseCurrencyData, setResponseCurrencyData] = useState({
		response_currency: "eth",
		response_coins: 0.0123,
	});

	return (
		<currencyNameContext.Provider
			value={{
				currencyAddresses,
				setcurrencyAddresses,
				currencies,
				setCurrencies,
				responseCurrencyData,
				setResponseCurrencyData,
			}}
		>
			{children}
		</currencyNameContext.Provider>
	);
}

export default CurrencyContext;
