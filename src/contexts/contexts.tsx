import { useState, createContext, ReactNode } from "react";

interface childProp {
	children: ReactNode;
}

interface currencyNameContextProp {
	currencyFullname: null | string;
	setCurrencyFullname: React.Dispatch<React.SetStateAction<string>>;
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
}
export const currencyNameContext = createContext<currencyNameContextProp>({
	currencyFullname: "bitcoin",
	setCurrencyFullname: () => {},
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
});

// const [currencyStat]

function CurrencyContext({ children }: childProp) {
	const [currencyFullname, setCurrencyFullname] = useState<string>("bitcoin");
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
	return (
		<currencyNameContext.Provider
			value={{
				currencyFullname,
				setCurrencyFullname,
				currencies,
				setCurrencies,
			}}
		>
			{children}
		</currencyNameContext.Provider>
	);
}

export default CurrencyContext;
