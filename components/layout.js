import Link from 'next/link';

export default function Layout({children}) {
  return (
    <div className="dark:bg-neutral-900 flex flex-col min-h-screen">
      <header className="bg-black sm:mb-8 py-4 px-8 ">
        <div className="container max-w-4xl mx-auto flex justify-between">
          <Link href="/">
            <a className="text-white no-underline my-auto hover:text-green-600">~/</a>
          </Link>

          <span className="hidden sm:block mx-auto my-auto text-yellow-600">cochaviz@bunkernet.dev</span>{' '}
          <span className="block sm:hidden mx-auto my-auto text-yellow-600">cochaviz</span>{' '}

          <div className="flex gap-x-2">
            <a href="https://www.github.com/zoharcochavi"> github </a>
            <a href="https://www.linkedin.com/in/cochaviz"> linkedin </a>
          </div>
        </div>
      </header>

      <main className="container max-w-4xl mx-auto flex-1 sm:px-8">{children}</main>

      <footer className="dark:bg-black mt-8 py-4">
        <div className="container mx-auto text-neutral-500 flex justify-center">
        &copy; 2022 - Zohar Cochavi
        </div>
      </footer>
    </div>
  );
}
