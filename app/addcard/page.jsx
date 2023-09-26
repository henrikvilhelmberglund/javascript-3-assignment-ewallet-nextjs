"use client";

import { useContext, useState } from "react";
import {
  createCard,
  resetCardPreview,
  updateCardPreview,
} from "../../redux/ewalletSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "/lib/components/Card";
import { NameContext } from "@/lib/components/NameProvider";
import { useRouter } from "next/navigation";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { firstName, lastName } = useContext(NameContext);
  const { cardPreview } = useSelector((store) => store.ewallet);
  const { cards } = useSelector((store) => store.ewallet);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function checkIfValid(e) {
    let inputAcceptable = /^\d+$/.test(e.target.value);
    if (!inputAcceptable && e.target.value) {
      let savedPos = e.target.selectionStart;
      e.target.value = e.target.value.replaceAll(/[^0-9]+/g, "");
      e.target.selectionStart = savedPos-1;
      e.target.selectionEnd = savedPos-1;
      setError("Only numbers are allowed.");
      return;
    } else if (inputAcceptable) {
      setError("");
    }
  }

  return (
    <>
      <h1 className="text-5xl">Add card</h1>
      <Card {...cardPreview} allCards={false} />

      <form
        onChange={(e) => {
          // TODO DRY
          const number1 = document.querySelector("#number-1").value;
          const number2 = document.querySelector("#number-2").value;
          const number3 = document.querySelector("#number-3").value;
          const number4 = document.querySelector("#number-4").value;
          const vendor = document.querySelector("#vendor").value;
          const ccv = document.querySelector("#ccv").value;
          const month = document.querySelector("#month").value;
          const year = document.querySelector("#year").value;
          const validThru = `${month}/${year}`;
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
          const number1 = document.querySelector("#number-1").value;
          const number2 = document.querySelector("#number-2").value;
          const number3 = document.querySelector("#number-3").value;
          const number4 = document.querySelector("#number-4").value;
          const vendor = document.querySelector("#vendor").value;
          const ccv = document.querySelector("#ccv").value;
          const month = document.querySelector("#month").value;
          const year = document.querySelector("#year").value;
          const validThru = `${month}/${year}`;
          const number = number1 + number2 + number3 + number4;
          const active = false;

          if (cards.length > 3) {
            setMessage("You have too many cards. Remove a card and try again.");
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
        className="mt-12 p-4 bg-white rounded-md flex flex-col gap-3"
        action="">
        <div className="flex gap-1 relative">
          <p className="absolute -top-7 text-red-500 left-0">{error}</p>
          {Array.from({ length: 4 }).map((_, i) => (
            <input
              key={i}
              onChange={(e) => {
                checkIfValid(e);
                if (i === 3) return;
                if (e.target.value.length === 4) {
                  document.querySelector(`#number-${i + 2}`).focus();
                }
              }}
              className="p-2 rounded w-[4rem] text-center"
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

        <div className="gap-2 flex">
          <input
            className="p-2 w-32 rounded bg-slate-300"
            disabled
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
          />
          <input
            className="p-2 w-32 flex-1 rounded bg-slate-300"
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
          <select className="inline p-2 w-14" id="month" name="month">
            {Array.from({ length: 12 }).map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select className="inline p-2 w-20" id="year" name="year">
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
            checkIfValid(e);
          }}
        />
        <div className="mt-8"></div>
        <button className="btn-blue">Submit</button>
        {message ? (
          <p className="absolute top-[97%] text-5xl text-white  text-center mx-auto bg-green-500 rounded-lg p-2">
            {message}
          </p>
        ) : null}
      </form>
    </>
  );
}
