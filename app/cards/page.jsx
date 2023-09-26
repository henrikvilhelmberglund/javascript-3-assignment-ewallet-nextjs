"use client";
import { useDispatch, useSelector } from "react-redux";
import Card from "/lib/components/Card";
import { deleteCard, resetCardPreview } from "../../redux/ewalletSlice";
import React, { useContext } from "react";
import Link from "next/link";
import { NameContext } from "@/lib/components/NameProvider";

export default function Index() {
  const { cards } = useSelector((store) => store.ewallet);
  const dispatch = useDispatch();
  const { firstName, lastName } = useContext(NameContext);

  return (
    <>
      <h1 className="text-5xl">Cards</h1>
      <section className="flex flex-col gap-6 items-center">
        <h2>Here you can view your cards.</h2>
        <p>Active card:</p>

        {cards
          ?.filter((card) => card.active === true)
          .map((card, i) => (
            <Card
              {...card}
              firstName={firstName}
              lastName={lastName}
              allCards={false}
              i={i}
              key={i}></Card>
          ))}

        <div className="">
          {cards.length > 3 ? (
            <div className="flex flex-col items-center gap-4">
              <button aria-describedby="explanation" className="btn-red peer">
                Add new card
              </button>
              <div className="peer-hover:!absolute peer-hover:flex peer-focus:!absolute peer-focus:flex top-[60%] bg-white border-red-500 border-1 p-2 rounded-md items-center hidden">
                <p id="explanation" className="text-xl text-red-500">
                  You have too many cards. Please remove a card to add a new
                  card.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <Link
                onClick={() => dispatch(resetCardPreview())}
                href="/addcard"
                className="btn-green">
                Add new card
              </Link>
            </div>
          )}
        </div>
        <p>Inactive cards:</p>

        <div className="relative -top-10 -left-55">
          {cards.map((card, i) => (
            <article className="relative" key={i}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(deleteCard(i));
                }}
                className={`${card.active === true ? "hidden" : ""}
                } i-lucide-x absolute top-[${
                  i * 40 - 10
                }px] z-100 -left-8 w-16 h-16 bg-red-600`}></button>

              <Card
                {...card}
                firstName={firstName}
                lastName={lastName}
                allCards={true}
                i={i}
                key={i}></Card>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
