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
		usdc: {
			value: number;
			name: string;
		};
		eth: {
			value: number;
			name: string;
		};
		xrp: {
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

		loom: {
			value: number;
			name: string;
		};
		vot: {
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
				usdc: {
					value: number;
					name: string;
				};
				eth: {
					value: number;
					name: string;
				};
				xrp: {
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

				loom: {
					value: number;
					name: string;
				};
				vot: {
					value: number;
					name: string;
				};
			}[]
		>
	>;
	setcurrencyData: React.Dispatch<
		React.SetStateAction<{
			response_currency: string;
			userCurrency: string;
			response_coins: number;
			userCoins: number;
		}>
	>;

	currencyData: {
		response_currency: string;
		userCurrency: string;
		response_coins: number;
		userCoins: number;
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
	setcurrencyData: () => {},
	currencyData: {
		response_currency: "eth",
		userCurrency: "btc",
		response_coins: 0.0123,
		userCoins: 0.1,
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

	return (
		<currencyNameContext.Provider
			value={{
				currencyAddresses,
				setcurrencyAddresses,
				currencies,
				setCurrencies,
				currencyData,
				setcurrencyData,
			}}
		>
			{children}
		</currencyNameContext.Provider>
	);
}

export default CurrencyContext;
