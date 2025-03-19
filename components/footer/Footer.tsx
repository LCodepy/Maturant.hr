import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-gray-900">
      <div className="max-w-6xl">
        <div>
          <Link href="/">
            <Image
              src="/logo_dark.png"
              alt="Logo"
              width={160}
              height={160}
              className="mx-0 mb-4"
            />
          </Link>
          <p className="text-md text-gray-600">
            Online video pripreme za maturu iz matematike i fizike.
          </p>
        </div>

        <div className="mt-8 flex justify-left space-x-4">
          <a href="#" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-red-500">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
      <div className="text-center text-sm mb-4 mt-12 text-gray-600">
        &copy; {new Date().getFullYear()} Maturant.hr. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
