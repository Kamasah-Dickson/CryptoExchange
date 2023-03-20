import CurrencyCard from "./Components/CurrencyCard";
import Exchange from "./Components/CurrencyCard";
import Header from "./Components/Header";

function App() {
	return (
		<>
			<Header />
			<div className="mt-10 flex flex-col items-center justify-center leading-10 text-white">
				<h1 className="text-center text-4xl font-large md:text-6xl">
					Crypto Exchange
				</h1>
				{/* <p>Your number one trusted friend</p> */}
			</div>
			<CurrencyCard />
		</>
	);
}

export default App;
