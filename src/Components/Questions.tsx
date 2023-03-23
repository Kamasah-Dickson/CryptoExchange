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
	height: string;
}

function Questions({ title, answer, arrayOfAnswers, height }: questionsProp) {
	const [show, setShow] = useState(true);
	return (
		<>
			<div
				className={`my-trans mt-3 ${
					show ? "h-[35px]" : `h-[${height}]`
				} overflow-hidden`}
			>
				<h4
					onClick={() => setShow((prev) => !prev)}
					className={`${
						!show && "text-[#cb7dff]"
					} flex cursor-pointer items-center justify-between text-lg`}
				>
					{title}

					{show ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
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
