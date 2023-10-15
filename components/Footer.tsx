import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            width={188}
            height={18}
            alt="Logo"
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            carhub 2023 <br /> All rights reserved &copy;
          </p>
          <div className="footer__links">
            {footerLinks.map((link) => (
              <div key={link.title} className="footer__link">
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map((item) => (
                  <Link key={item.title} href={item.url}>
                    <a className="text-gray-500">{item.title}</a>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
            <p>@2023 carHub. All rights reserved</p>
            <div className="footer__copyrights-link">
              <Link href="/">
                <a className="text-gray-500">Privacy Policy</a>
              </Link>
              <Link href="/">
                <a className="text-gray-500">Terms of use</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
