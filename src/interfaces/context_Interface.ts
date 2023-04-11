import { User } from "firebase/auth";

export interface currencyNameContextProp {
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
	setwalletInputValue: React.Dispatch<
		React.SetStateAction<{
			recipient_wallet_address: string;
		}>
	>;
	setInvalidAddress: React.Dispatch<React.SetStateAction<boolean>>;
	setInvalidAddress2: React.Dispatch<React.SetStateAction<boolean>>;
	setshouldDisable: React.Dispatch<React.SetStateAction<boolean>>;
	setSignedUser: React.Dispatch<React.SetStateAction<User | null>>;

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

	currencyData: {
		response_currency: string;
		userCurrency: string;
		response_coins: number;
		userCoins: number;
	};

	walletInputValue: {
		recipient_wallet_address: string;
	};

	invalidAddress: boolean;
	invalidAddress2: boolean;
	shouldDisable: boolean;
	signedUser: User | null;
}
