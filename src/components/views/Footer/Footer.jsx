import './Footer.css';
import React from 'react';
import Logo from '../../reusable-components/Logo';

const FooterLink = ({ href, text, target }) => (
  <a href={href} target={target} rel="noopener noreferrer" className="text-gray-300 transition-colors duration-300 hover:underline hover:text-blue-500">
    {text}
  </a>
);

const FooterSection = ({ title, links }) => (
  <div>
    <p className="font-semibold text-gray-200">{title}</p>
    <nav>
      <ul className="text-lg space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <FooterLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const sections = [
    {
      title: "Quick Links",
      links: [
        { href: "/", text: "Home" },
        { href: "/about", text: "Who We Are" },
      ],
    },
    {
      title: "Industries",
      links: [
        { href: "/services/cybersecurity", text: "Cyber Security Solutions" },
        { href: "/services/softwaresolutions", text: "Software Engineering" },
      ],
    },
    {
      title: "Blog",
      links: [
        { href: "http://blog.fisa.pro/", text: "Our Cyber Blog" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { href: "+355(0)68 2055 559", text: "+355(0)68 2055 559" },
        { href: "mailto:info@first.al", text: "info@first.al" },
      ],
    },
  ];

  return (
    <footer className="footer__bg">
      <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-3xl font-bold leading-tight text-center text-white md:text-4xl">FIRST</h1>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 " />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sections.map((section, index) => (
            <FooterSection key={index} {...section} />
          ))}
        </div>

        <hr className="my-6 border-gray-200 md:my-10 " />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <a href="/">
            <Logo />
          </a>
          <p className="mt-4 text-sm text-gray-200 sm:mt-0 ">© Copyright FIRST {currentYear}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
