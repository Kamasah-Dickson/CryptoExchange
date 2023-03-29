import Questions from "./Questions";

function Exchange_Questions() {
	return (
		<div className="mt-10 pb-8">
			<h3 className="mb-7 text-2xl md:text-3xl">Have any questions?</h3>
			<Questions
				title="I sent a deposit, what’s next?"
				answer={
					<p className="text-sm font-normal text-[#2b2b33]">
						Now all you have to do is wait. Please, no need to worry if you have
						already sent the funds and still see the same “Awaiting your
						deposit” status. As soon as the transaction is confirmed in the
						network, we’ll get your deposit, the exchange process will begin and
						the status will change.
					</p>
				}
			/>
			<Questions
				title="How long does it take to exchange coins?"
				answer={
					<p className="text-sm font-normal text-[#2b2b33]">
						The coin exchange time usually varies from 5 to 60 minutes. There
						are rare occasions when more time is needed. The processing speed
						depends on how long it takes for a block to be included in the
						network. Most operations proceed in just a few minutes.
					</p>
				}
			/>
			<Questions
				title="What happens if I close the exchange page?"
				answer={
					<p className="text-sm font-normal text-[#2b2b33]">
						If you want to check the status of your exchange and view the
						transaction history, we recommend you sign up and get a customer
						account. Even though this is not recommended, You can easily close
						the exchange page and all the information will be in your account.
						Otherwise, please, save your Exchange ID before closing the exchange
						page. It will help you to track the exchange.
					</p>
				}
			/>
		</div>
	);
}

export default Exchange_Questions;
