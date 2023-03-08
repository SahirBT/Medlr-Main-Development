import Link from "next/link";

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-[#00BFBE]' >
      {text}
    </Link>
  );
};

export default NavItem;