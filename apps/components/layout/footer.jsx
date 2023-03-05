import Link from 'next/link';
import { siteTitle } from '@/config/setting';

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex w-full justify-center border-t bg-slate-100 py-4">
      <div className="container">
        <p className="text-center">
          {`Copyright ©${currYear} `}
          <Link href="/">{siteTitle()}</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
