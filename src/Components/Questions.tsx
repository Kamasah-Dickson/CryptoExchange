import {
	MdOutlineKeyboardArrowUp,
	MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useState } from "react";

interface questionsProp {
	title: string;
	answer?: JSX.Element;
	arrayOfAnswers?: {
		title: string;
		text: JSX.Element;
	}[];
}

function Questions({ title, answer, arrayOfAnswers }: questionsProp) {
	const [show, setShow] = useState(true);
	return (
		<>
			<div
				className={`my-trans mt-3 ${
					show && "h-[28px] md:h-[35px]"
				} overflow-hidden`}
			>
				<h4
					onClick={() => setShow((prev) => !prev)}
					className={`${
						!show && "text-[#cb7dff]"
					} flex cursor-pointer items-center justify-between gap-3 text-base md:text-lg`}
				>
					{title}

					{show ? (
						<MdOutlineKeyboardArrowDown size={20} className="self-baseline" />
					) : (
						<MdOutlineKeyboardArrowUp size={20} className="self-baseline" />
					)}
				</h4>

				<ul className="flex list-disc flex-col gap-3 pt-2 pl-10">
					{arrayOfAnswers?.map((data, index) => {
						return (
							<li key={index} className="text-sm">
								<span className="text-[#ffffff]">{data.title}</span>
								{data.text}
							</li>
						);
					})}
				</ul>
				{answer}
			</div>
		</>
	);
}

export default Questions;
