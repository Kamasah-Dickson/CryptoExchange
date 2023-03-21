import { useContext } from "react";
import CurrencyCard from "./Components/CurrencyCard";
import Header from "./Components/Header";

function App() {
	return (
		<>
			<Header />
			<div className="mt-10 flex flex-col items-center justify-center leading-10 text-white">
				<h1 className="text-center text-4xl font-large md:text-6xl">
					Crypto Exchange
				</h1>
				<ul className="mt-3 flex list-outside list-disc items-center justify-center gap-7 text-sm font-bold uppercase">
					<li>trusted</li>
					<li>fast</li>
					<li>reliable</li>
				</ul>
			</div>
			<CurrencyCard />
		</>
	);
}

export default App;
