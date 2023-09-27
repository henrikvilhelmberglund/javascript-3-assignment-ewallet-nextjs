"use client";

import { useContext, useState } from "react";
import { createCard, resetCardPreview, updateCardPreview } from "../../redux/ewalletSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "/lib/components/Card";
import { NameContext } from "@/lib/components/NameProvider";
import { useRouter } from "next/navigation";
import { checkIfValid, getFormValues } from "@/lib/helpers";

export default function Index() {
	const dispatch = useDispatch();
	const router = useRouter();

	const { firstName, lastName } = useContext(NameContext);
	const { cardPreview } = useSelector((store) => store.ewallet);
	const { cards } = useSelector((store) => store.ewallet);

	const [error, setError] = useState("");
	const [message, setMessage] = useState("");

	return (
		<>
			<h1 className="text-5xl">Add card</h1>
			<Card {...cardPreview} allCards={false} />

			<form
				onChange={(e) => {
					const { number1, number2, number3, number4, vendor, ccv, validThru } = getFormValues();
					const number =
						number1.padEnd(4, "*") +
						number2.padEnd(4, "*") +
						number3.padEnd(4, "*") +
						number4.padEnd(4, "*");
					const active = true;
					dispatch(
						updateCardPreview({
							number,
							firstName,
							lastName,
							vendor,
							validThru,
							ccv,
							active,
						})
					);
				}}
				onSubmit={(e) => {
					e.preventDefault();
					const { number1, number2, number3, number4, vendor, ccv, validThru } = getFormValues();
					const number = number1 + number2 + number3 + number4;
					const active = false;

					if (cards.length > 3) {
						setError("You have too many cards. Remove a card and try again.");
						return;
					}

					dispatch(
						createCard({
							number,
							firstName,
							lastName,
							vendor,
							validThru,
							ccv,
							active,
						})
					);
					setMessage("Success! Navigating to cards...");
					setTimeout(() => {
						setMessage("");
						router.push("/cards");
					}, 1500);
				}}
				className="mt-12 flex flex-col gap-3 rounded-md bg-white p-4"
				action=""
			>
				<div className="relative flex gap-1">
					<p className="absolute -top-7 left-0 text-xl text-red-500">{error}</p>
					{Array.from({ length: 4 }).map((_, i) => (
						<input
							key={i}
							onChange={(e) => {
								checkIfValid(e, setError);
								if (i === 3) return;
								if (e.target.value.length === 4) {
									document.querySelector(`#number-${i + 2}`).focus();
								}
							}}
							className="w-[4rem] rounded p-2 text-center"
							required
							type="text"
							placeholder="0000"
							minLength="4"
							maxLength="4"
							name="number"
							id={`number-${i + 1}`}
						/>
					))}
				</div>

				<div className="flex gap-2">
					<input
						className="w-32 rounded bg-slate-300 p-2"
						disabled
						type="text"
						name="firstName"
						id="firstName"
						value={firstName}
					/>
					<input
						className="w-32 flex-1 rounded bg-slate-300 p-2"
						disabled
						type="text"
						name="lastName"
						id="lastName"
						value={lastName}
					/>
				</div>
				<select className="p-2" id="vendor" name="vendor">
					<option value="DuckCard">DuckCard</option>
					<option value="FishCard">FishCard</option>
					<option value="SvelteCard">SvelteCard</option>
				</select>
				<div>
					<span className="inline">Valid thru: </span>
					<select className="inline w-14 p-2" id="month" name="month">
						{Array.from({ length: 12 }).map((_, i) => (
							<option key={i} value={i + 1}>
								{i + 1}
							</option>
						))}
					</select>
					<select className="inline w-20 p-2" id="year" name="year">
						{Array.from({ length: 10 }).map((_, i) => (
							<option key={i} value={2024 + i}>
								{2024 + i}
							</option>
						))}
					</select>
				</div>
				<input
					type="text"
					id="ccv"
					placeholder="ccv"
					className="w-14"
					minLength="3"
					maxLength="3"
					required
					onChange={(e) => {
						checkIfValid(e, setError);
					}}
				/>
				<div className="mt-8"></div>
				<button className="btn-blue">Submit</button>
				{message ? (
					<div className="flex justify-center">
						<p className="fixed top-[50%] rounded-lg bg-green-500 p-2 text-center text-5xl text-white">
							{message}
						</p>
					</div>
				) : null}
			</form>
		</>
	);
}
