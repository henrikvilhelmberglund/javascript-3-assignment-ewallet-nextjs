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
          className="text-xl hover:bg-blue-100 transition-all bg-blue-200 p-4 rounded-lg text-blue-600"
          href="/cards">
          View your cards
        </Link>
      </div>
    </>
  );
}
