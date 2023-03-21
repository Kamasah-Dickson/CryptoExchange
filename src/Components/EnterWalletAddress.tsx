import React, { useState, useRef, useCallback } from "react";
import me from "../assets/EgLF6Jmi_4x.jpg";

export default function EnterWalletAddress() {
	const handleFocus = useRef<HTMLInputElement>(null);
	const [inputValue, setInputValue] = useState("");
	const [flexDirection, setFlexDirection] = useState(
		"flex-row items-center bg-[#80808034] hover:bg-[#8080803b]"
	);
	const handleClick = useCallback(() => {
		if (handleFocus.current) {
			handleFocus.current.focus();
		}
	}, []);

	function handleBlur() {
		if (!inputValue) {
			setFlexDirection(
				"flex-row items-center bg-[#80808034] hover:bg-[#8080803b]"
			);
		} else {
			setFlexDirection(
				"flex-col items-start border border-black py-2 text-sm bg-transparent"
			);
		}
	}

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);

		if (event.target.value) {
			setFlexDirection(
				"flex-col items-start border border-black py-2 text-sm bg-transparent"
			);
		} else {
			setFlexDirection(
				"flex-row items-center bg-[#80808034] hover:bg-[#8080803b]"
			);
		}
	}

	return (
		<form className="mt-10">
			<div className="flex items-center justify-between gap-5">
				<h3 className="text-lg font-semibold">Enter the wallet address</h3>
				<div className="h-5 w-5">
					<img className="h-full w-full" src={me} alt="metamask" />
				</div>
			</div>
			<div
				onClick={() => (
					handleClick(),
					setFlexDirection(
						"flex-col items-start border border-black py-2 text-sm bg-transparent"
					)
				)}
				className={`${flexDirection} mt-4 flex h-[55px] cursor-pointer rounded-lg  px-5`}
			>
				<div className="text-[#00000094]">Recipient Bitcoin address</div>
				<input
					ref={handleFocus}
					onChange={(e) => handleInputChange(e)}
					onBlur={handleBlur}
					className=" h-full w-full flex-1 bg-transparent outline-none"
					type="text"
				/>
			</div>
			<input
				disabled={!inputValue}
				type="submit"
				value="Create an exchange"
				className="mx-auto mt-4 block w-full cursor-pointer rounded-md bg-[#370b97] py-5 font-normal text-white transition-all hover:bg-[#370b97c9]
							active:scale-[1.06] disabled:transform-none disabled:bg-[#370b97c9] disabled:opacity-[0.4]"
			/>
		</form>
	);
}
