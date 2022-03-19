import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="dark:bg-neutral-900 flex flex-col min-h-screen">
      <header id="TOP" className="bg-neutral-200 dark:bg-black py-4 px-8">
        <div className="container max-w-3xl mx-auto flex justify-between">
          <Link href="/">
            <a className="font-mono no-underline my-auto">~/</a>
          </Link>

          <div className="font-mono">
            <span className="hidden sm:block mx-auto my-auto text-green-600 dark:text-yellow-600">cochaviz@bunkernet.dev</span>{' '}
            <span className="block sm:hidden mx-auto my-auto text-green-600 dark:text-yellow-600">cochaviz</span>{' '}
          </div>

          <div className="flex gap-x-2">
            <a href="https://www.github.com/zoharcochavi"> github </a>
            <a href="https://www.linkedin.com/in/cochaviz"> linkedin </a>
          </div>
        </div>
      </header>

      <main className="container max-w-2xl">{children}</main>

      <footer className="bg-neutral-200 dark:bg-black mt-8 py-4">
        <div className="container mx-auto text-neutral-400 flex justify-center">
          &copy; 2022 - Zohar Cochavi
        </div>
      </footer>
    </div>
  );
}
