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
        </div>
        <div className="w-screen min-h-screen pb-52 bg-gradient-to-b from-white to-sky-200 dark:bg-sky-900">
          <header>
            <nav className="flex flex justify-center gap-12 items-center bg-slate-100 py-2">
              <Link className="nav-button" href="/">
                Home
              </Link>
              <Link className="nav-button" href="/cards">
                Cards
              </Link>
            </nav>
          </header>
          <main className="flex flex-col items-center min-h-screen md:mt-20 md:mb-40">
            <NameProvider name={name}>
              {children}
            </NameProvider>
          </main>
          <footer className="fixed bottom-2 right-2">
            Copyright ©2023 Ankwallet
          </footer>
        </div>
      </body>
    </html>
  );
}
