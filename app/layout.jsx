import Link from "next/link";
import "./style.css";
import "@unocss/reset/tailwind.css";
import { fetchUsers } from "@/lib/helpers";
import NameProvider from "@/lib/components/NameProvider";

export default async function RootLayout({ children }) {
	const name = await fetchUsers();
	return (
		<html lang="en">
			<body>
				{/* font preload */}
				<div className="hidden">
					<span className="font-DuckCard"></span>
					<span className="font-SvelteCard"></span>
					<span className="font-FishCard"></span>
					<span className="font-number"></span>
				</div>
				<div className="min-h-screen w-screen bg-gradient-to-b from-white to-sky-200 pb-52 dark:bg-sky-900">
					<header>
						<nav className="flex flex items-center justify-center gap-12 bg-slate-100 py-2">
							<Link className="nav-button" href="/">
								Home
							</Link>
							<Link className="nav-button" href="/cards">
								Cards
							</Link>
						</nav>
					</header>
					<main className="flex min-h-screen flex-col items-center md:mb-40 md:mt-20">
						<NameProvider name={name}>{children}</NameProvider>
					</main>
					<footer className="fixed bottom-2 right-2">Copyright ©2023 Ankwallet</footer>
				</div>
			</body>
		</html>
	);
}
