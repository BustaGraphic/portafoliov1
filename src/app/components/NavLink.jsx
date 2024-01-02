import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="tabname"

      >
      {title}
    </Link>
  );
};

export default NavLink;