import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { currencyNameContext } from "../contexts/contexts";
import { useNavigate } from "react-router";
import Header from "../Components/Header";
import { MdHelp, MdOutlinePendingActions } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import QRCode from "react-qr-code";
import Deposit_step from "../Components/Deposit_step";
import Confirming_step from "../Components/Confirming_step";
import Exchanging_step from "../Components/Exchanging_step";
import Sending_step from "../Components/Sending_step";
import Exchange_Questions from "../Components/Exchange_Questions";

function Exchange() {
	const { walletInputValue, currencyData } = useContext(currencyNameContext);
	const [uniqeID, setUniqueID] = useState("");
	const [isCopied, setIsCopied] = useState(false);
	const [steps, setSteps] = useState(1);
	const [depositAddress, setDepositAddress] = useState("randomDepositAddress");
	const navigate = useNavigate();

	useEffect(() => {
		if (!walletInputValue.recipient_wallet_address) {
			navigate("/");
		}
	}, [navigate]);

	useEffect(() => {
		setUniqueID(uuidv4().slice(0, 15));
	}, []);

	function handleCopy() {
		navigator.clipboard.writeText(depositAddress);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 1000);
	}

	return (
		<div>
			<Header />
			<div className="my-max3 my-5 mt-10 border border-[#370b979f] bg-[#ffffff] p-5 shadow-sm shadow-black md:p-16">
				<div className=" mb-7 flex items-center justify-between gap-5 rounded-2xl border-2 border-[#07031173] p-3 md:rounded-xl">
					<h2 className="text-[11px] font-bold sm:text-base">
						Exchange ID:{" "}
						<span className="text-[11px] font-medium text-gray-600 sm:text-base md:text-sm">
							{uniqeID}
						</span>
					</h2>
					<div className="flex items-center justify-center gap-2">
						<MdHelp size={20} />
						<p className="text-[12px] md:font-semibold">Need help?</p>
					</div>
				</div>
				<div>
					<div className="rounded-t-2xl bg-[#05051f] py-4 md:bg-transparent">
						<h3 className="mb-10 text-center text-xl font-medium text-white md:text-2xl md:font-bold md:text-black">
							Awaiting Your Deposit
						</h3>
						<div className="mx-auto max-w-xl">
							<div className="flex items-center justify-center md:justify-start">
								<p className=" hidden w-1/4 text-base font-medium text-black md:flex">
									Send deposit:
								</p>
								<p className="text-2xl font-bold text-white md:text-2xl md:text-black">
									<span>{currencyData.userCoins}</span>
									<span>{currencyData.userCurrency.toUpperCase()}</span>
								</p>
							</div>
							<div className="mt-5 flex flex-wrap items-center justify-between">
								<p className=" hidden w-1/4  text-base font-medium text-black md:flex">
									Deposit address:
								</p>
								<div className="flex w-full flex-1 items-start justify-between gap-3 rounded-md border border-[#04030859] p-3 text-xl font-bold">
									<QRCode
										className="hidden md:flex"
										value={depositAddress}
										size={95}
									/>
									<div className="flex w-full flex-1 items-center justify-between gap-4 rounded-xl bg-[blue] p-2 md:bg-transparent">
										<span className="text-base font-normal text-white md:text-gray-600">
											{depositAddress}
										</span>
										<div className="relative">
											<div
												className="cursor-pointer rounded-lg bg-gray-300 p-2 hover:bg-[#464545f8] hover:text-white active:scale-[1.04]"
												onClick={handleCopy}
											>
												<FiCopy size={20} />
											</div>
											{isCopied && (
												<div className="absolute left-1/2 bottom-12 mb-1 -translate-x-1/2 transform">
													<div className="relative rounded-md bg-[#464545f8] px-2 py-1 text-sm font-medium text-white shadow-lg">
														Copied!
														<span className="absolute top-full left-1/2 -mt-1 h-4 w-4 -translate-x-1/2 transform overflow-hidden">
															<svg
																className="absolute inset-0 h-full w-full rotate-180 text-[#464545f8]"
																viewBox="0 0 12 12"
																fill="none"
															>
																<path
																	d="M6 0L12 12H0L6 0Z"
																	fill="currentColor"
																/>
															</svg>
														</span>
													</div>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className=" mx-auto mt-5 flex w-full max-w-[590px] items-start gap-3 md:justify-between md:gap-7">
						<div
							className={`flex items-center justify-center gap-3 md:flex-col`}
						>
							<div
								className={` ${
									steps !== 1 ? "bg-[#01012773] " : "bg-[#110c24]"
								} w-fit rounded-full  p-2 text-white`}
							>
								<MdOutlinePendingActions size={20} />
							</div>
							<p
								className={`${
									steps === 1
										? "flex flex-col"
										: "hidden w-full text-center text-base"
								}`}
							>
								<span className="text-sm md:hidden">Status:</span>
								<span className="text-sm">Pending deposit</span>
							</p>
						</div>
						<div
							className={`flex ${
								steps === 1 && "ml-auto"
							} items-center justify-center gap-3 md:flex-col`}
						>
							<div
								className={` ${
									steps !== 2 ? "bg-[#01012773]" : "bg-[#110c24]"
								} w-fit rounded-full  p-2 text-white`}
							>
								<MdOutlinePendingActions size={20} />
							</div>
							<p
								className={`${
									steps === 2
										? "flex flex-col"
										: "hidden w-full text-center text-base"
								}`}
							>
								<span className="text-sm md:hidden">Status:</span>
								<span className="text-sm">Pending deposit</span>
							</p>
						</div>
						<div
							className={`${
								steps === 2 && "ml-auto"
							} flex items-center justify-center gap-3 md:flex-col`}
						>
							<div
								className={` ${
									steps !== 3 ? "bg-[#01012773]" : "bg-[#110c24]"
								} w-fit rounded-full  p-2 text-white`}
							>
								<MdOutlinePendingActions size={20} />
							</div>
							<p
								className={`${
									steps === 3
										? "flex flex-col"
										: "hidden w-full text-center text-base"
								}`}
							>
								<span className="text-sm md:hidden">Status:</span>
								<span className="text-sm">Pending deposit</span>
							</p>
						</div>
						<div
							className={` ${
								steps === 3 && "ml-auto"
							} flex items-center justify-center gap-3 md:flex-col`}
						>
							<div
								className={` ${
									steps !== 4 ? "bg-[#01012773]" : "bg-[#110c24]"
								} w-fit rounded-full  p-2 text-white`}
							>
								<MdOutlinePendingActions size={20} />
							</div>
							<p
								className={`${
									steps === 4
										? "flex flex-col"
										: "hidden w-full text-center text-base"
								}`}
							>
								<span className="text-sm md:hidden">Status:</span>
								Pending deposit
							</p>
						</div>
					</div>
					<div className="my-max2 mt-16">
						<h1 className="mt-7 mb-5 text-xl font-bold">Operation details</h1>
						<div className="w-full border-2  border-[#3e188ff1] bg-[#6620fd3f] p-4">
							{steps === 1 ? (
								<Deposit_step />
							) : steps === 2 ? (
								<Confirming_step />
							) : steps === 3 ? (
								<Exchanging_step />
							) : (
								<Sending_step />
							)}
						</div>
					</div>
					<div className="mt-24">
						<Exchange_Questions />
					</div>
					{/* <p>{walletInputValue.recipient_wallet_address}</p> */}
				</div>
			</div>
		</div>
	);
}

export default Exchange;
