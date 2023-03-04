import Link from 'next/link';
import { siteTitle } from '@/config/setting';

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto text-center">
      <p>
        {`Copyright ©${currYear} `}
        <Link href="/">{siteTitle()}</Link>
      </p>
    </footer>
  );
}

export default Footer;
