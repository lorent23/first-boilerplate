import React, {useEffect, useState} from 'react';
import "./Navbar.css";
import Logo from '../../reusable-components/Logo';
import {Link} from 'react-router-dom';

export default function Navbar() {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [scrollNav, setScrollNav] = useState(true);
    const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    const handleIconClick = () => {
        setMenuOpen(!isMenuOpen);
    };
    const toggleServicesDropdown = () => {
        setServicesDropdownOpen(!isServicesDropdownOpen)
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingUp = prevScrollPos > currentScrollPos;

            setScrollNav(isScrollingUp || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (

        <nav
            className={`md:fixed z-50 w-full top-0 left-0 right-0 flex-shrink-0 py-4 cursor-pointer font-semibold text-base leading-4 font-sans uppercase mr-4 transition-colors duration-300 ${
            scrollNav
                ? 'bg-black'
                : ''}`}>
            <div className="flex justify-end">
                {/* Logo */}
                <svg
                    onClick={handleIconClick}
                    className="hamburger mx-4 my-4 w-12 h-12 animate-pulse"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"></path>
                </svg>
            </div>

            {/* Big Menu */}
            <div
                className={`${scrollNav
                    ? ''
                    : 'hidden'} mx-4 my-4`}>
                <div
                    className="big-menu flex flex-col justify-between px-6 mx-auto md:flex-row md:items-center sm:flex items-end sm:flex-row sm:justify-end container">
                    <Logo/>
                    <ul
                        className={`grid-flow-col gap-4 mx-auto mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-2 lg:gap-12 w-full md:flex md:items-center md:justify-between md:w-auto flex flex-col items-end sm:flex-row sm:justify-end ${
                        isMenuOpen
                            ? 'block'
                            : 'hidden'}`}
                        data-cy="navbar-menu">
                        <li>
                            <Link to="/" className="py-4 text-base md:text-xl font-semibold">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="https://cybersecurity-see.com/" className="py-4 text-base md:text-xl font-normal">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="py-4 text-base md:text-xl font-normal"
                                onClick={toggleServicesDropdown}>
                                Services
                            </Link>
                            {
                                isServicesDropdownOpen && (
                                    <ul
                                        className="dropdown-menu dropdown-menu absolute bg-white border border-gray-300 shadow-md py-2 px-4 rounded-lg mt-2 z-10">
                                        <ul
                                            className="dropdown-menu sm:w-40 md:w-48 lg:w-56 xl:w-64 bg-opacity-60"
                                            onMouseLeave={() => setServicesDropdownOpen(false)}>
                                            <li>
                                                <Link
                                                    to="/services/cybersecurity"
                                                    onClick={handleLinkClick}
                                                    className="block py-2 text-black hover:bg-gray-100">
                                                    Cybersecurity Solutions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/services/softwaresolutions"
                                                    onClick={handleLinkClick}
                                                    className="block py-2 text-black hover:bg-gray-100">
                                                    Software Engineering Solutions
                                                </Link>
                                            </li>
                                            {/* Add more service items as needed */}
                                        </ul>
                                    </ul>
                                )
                            }
                        </li>
                        <li>
                            <Link to="/about" className="py-4 text-base md:text-xl font-normal">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/partners" className="py-4 text-base md:text-xl font-normal">
                                Partners
                            </Link>
                        </li>
                    </ul>
                    <div className="absolute flex justify-end md:static top-2 right-4">
                        <div className="flex">
                            <Link
                                to="/contact-us"
                                className="flex items-center justify-center p-2 uppercase text-red-500 hover:text-white text-2xl">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hamburger Menu */}
            <div
                className="container flex justify-between items-center px-6 mx-auto md:flex-row sm:flex-row">
                {
                    isMenuOpen && (
                        <ul
                            className="grid-flow-col gap-4 mx-auto mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-2 lg:gap-12 w-full md:flex md:items-center md:justify-between md:w-auto flex flex-col items-end sm:flex-row sm:justify-end"
                            data-cy="navbar-menu">
                            <div className="flex items-center">
                                <Logo/>
                            </div>

                            <li>
                                <Link
                                    to="/"
                                    className="py-4 text-base md:text-xl font-semibold"
                                    onClick={handleLinkClick}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://cybersecurity-see.com/"
                                    className="py-4 text-base md:text-xl font-normal"
                                    onClick={handleLinkClick}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/cybersecurity"
                                    className="py-4 text-base md:text-xl font-normal"
                                    onClick={handleLinkClick}>
                                    Cybersecurity Solutions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/softwaresolutions"
                                    className="py-4 text-base md:text-xl font-normal"
                                    onClick={handleLinkClick}>
                                    Software Solutions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/partners"
                                    className="py-4 text-base md:text-xl font-normal"
                                    onClick={handleLinkClick}>
                                    Partners
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact-us"
                                    className="flex items-center justify-center p-2 uppercase text-red-500 hover:text-white text-2xl"
                                    onClick={handleLinkClick}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    )
                }
            </div>
        </nav>

    );
}
