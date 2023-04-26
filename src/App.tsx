import CurrencyCard from "./Components/CurrencyCard";
import Header from "./Components/Header";
import CurrencyContext from "./contexts/contexts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Exchange from "./Pages/Exchange";
import Dashboard from "./Pages/Dashboard";
import Chart from "./Components/Chart";
import Transactions from "./Components/Transactions";
import Wallet from "./Components/Wallet";
import Settings from "./Components/Settings";
import LogUserOut from "./Components/LogUserOut";

function App() {
	return (
		<CurrencyContext>
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<div>
								<Header />
								<main>
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
								</main>
							</div>
						}
					/>
					<Route path="/exchange" element={<Exchange />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/dashboard" element={<Dashboard />}></Route>
					<Route path="/dashboard/overview" element={<Dashboard />} />
					<Route path="/dashboard/chart" element={<Chart />} />
					<Route path="/dashboard/transactions" element={<Transactions />} />
					<Route path="/dashboard/Wallet" element={<Wallet />} />
					<Route path="/dashboard/settings" element={<Settings />} />
					<Route path="/dashboard/logout" element={<LogUserOut />} />
				</Routes>
			</Router>
		</CurrencyContext>
	);
}

export default App;
