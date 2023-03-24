import { useContext, useEffect } from "react";
import { currencyNameContext } from "../contexts/contexts";
import { useNavigate } from "react-router";

function Exchange() {
	const { walletInputValue } = useContext(currencyNameContext);
	const navigate = useNavigate();
	useEffect(() => {
		walletInputValue.recipient_wallet_address === "" && navigate("/");
	}, []);

	return (
		<div className="text-white">
			Exchange
			<p>{walletInputValue.recipient_wallet_address}</p>
		</div>
	);
}

export default Exchange;
