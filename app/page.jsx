import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
	return (
		<>
			<h1 className="text-4xl">E-Wallet</h1>
			<h2 className="text-2xl">
				Welcome to your E-Wallet! Click the link below to view your cards.
			</h2>
			<div className="mt-12">
				<Link
					className="rounded-lg bg-blue-200 p-4 text-xl text-blue-600 transition-all hover:bg-blue-100"
					href="/cards"
				>
					View your cards
				</Link>
			</div>
		</>
	);
}
