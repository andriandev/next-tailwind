import { useState } from 'react';
import Link from 'next/link';
import ActiveLink from '@/components/shared/active-link';
import { siteTitle } from '@/config/setting';
import Icon from '@/components/shared/icons';

function Navbar() {
  const [collapse, setCollapse] = useState(true);

  const NAV_ITEMS = [
    { title: 'Home', icon: 'HomeIcon', link: '/' },
    { title: 'About', icon: 'AboutIcon', link: '/about' },
  ];

  return (
    <header>
      <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-600 bg-gray-900 px-3 py-4 md:py-4 md:pl-8">
        <div className="container mx-auto flex flex-wrap items-center justify-between md:justify-start">
          <Link href="/" className="flex items-center">
            {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          /> */}
            <span className="self-center text-xl font-semibold text-white">
              {siteTitle()}
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center rounded-lg text-sm text-gray-400 focus:outline-none md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setCollapse((prev) => !prev)}
            >
              <span className="sr-only">Open menu</span>
              {collapse ? Icon('ListIcon') : Icon('CloseIcon')}
            </button>
          </div>
          <div
            className={`${
              collapse ? 'hidden ' : ''
            }w-full mt-1 items-center md:order-1 md:ml-16 md:flex md:w-auto`}
            id="navbar-sticky"
          >
            <ul
              className="mt-4 flex flex-col rounded-lg border  border-gray-700 bg-gray-800  md:mt-0 md:flex-row md:space-x-4 md:border-0  md:bg-gray-900 "
              onClick={() => setCollapse((prev) => !prev)}
            >
              {NAV_ITEMS.map((e, i) => (
                <li key={i}>
                  <ActiveLink
                    href={e.link}
                    className="nav-item inline-flex items-center py-2 pl-3 pr-4 md:p-0"
                    aria-current="page"
                    activeClassName="nav-active"
                  >
                    {Icon(e.icon)}
                    {e.title}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
