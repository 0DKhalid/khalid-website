import React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';

const NavContainer = tw.nav`w-full h-16 flex justify-between`;

const LinksContainer = tw.ul`flex items-center w-1/4 justify-between mr-9 mt-9`;

const NavLink = tw(
  Link
)`lg:text-lg text-sm text-white  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-tertiary hover:to-orange px-3 `;

const menuItems = [
  { path: '/courses', label: 'الدورات' },
];

const Navbar = () => {
  return (
    <NavContainer>
      <LinksContainer>
        {menuItems.map((link) => (
          <NavLink key={link.path} to={link.path}>
            {link.label}
          </NavLink>
        ))}
      </LinksContainer>
      <Link  to='/'
       tw='font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-orange ml-9 mt-9'>
        KTech
      </Link>
    </NavContainer>
  );
};

export default Navbar;
