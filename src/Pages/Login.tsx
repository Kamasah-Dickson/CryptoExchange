import Header from "../Components/Header";
import { useContext } from "react";
import { currencyNameContext } from "../contexts/contexts";
function Login() {
	// const { currencyData } = useContext(currencyNameContext);
	return (
		<>
			<Header />
			<div className="mt-10 flex flex-col items-center justify-center leading-10 text-white">
				<h1 className="text-6xl font-large">Crypto Exchange</h1>
				<p>Your number one trusted friend</p>
				<p>Login</p>
			</div>
		</>
	);
}

export default Login;
