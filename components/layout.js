import Link from "next/link";
import Script from "next/script";
import {
  toggle_dark_mode,
  match_system_dark_mode,
} from "../public/static/js/dark_mode_utils";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header id="TOP" className="py-4 px-8">
        <div className="container max-w-3xl mx-auto flex justify-between">
          <Link href="/">
            <a className="font-mono no-underline">~/</a>
          </Link>

          <div className="font-mono my-auto text-accent-1-light dark:text-accent-1-dark">
            <span className="hidden sm:block ">cochaviz</span>{" "}
            {/* <span className="block sm:hidden ">cochaviz</span>{" "} */}
          </div>

          <div className="flex gap-x-5">
            <a href="https://www.github.com/cochaviz"> github </a>
            <a href="https://www.linkedin.com/in/cochaviz"> linkedin </a>
            <button
              id="dark-mode-toggle-light"
              className="hover:border-accent-1-dark border-background-alt-dark bg-background-dark border-2 px-2 hidden dark:block"
              onClick={() => toggle_dark_mode()}
            >
              light mode
            </button>
            <button
              id="dark-mode-toggle-dark"
              className="hover:border-accent-1-light border-background-alt-light bg-background-light border-2 px-2 block dark:hidden"
              onClick={() => toggle_dark_mode()}
            >
              dark mode
            </button>
          </div>
        </div>
      </header>

      <main className="container max-w-2xl">{children}</main>

      <footer className="mt-8 p-4 px-8">
        <div className="container max-w-3xl mx-auto flex justify-between">
          <div>&copy; 2023 - Zohar Cochavi</div>
          <a href="https://github.com/cochaviz/bunkernet">check the source</a>
        </div>
      </footer>
    </div>
  );
}
