import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-scroll';

import { FaXmark, FaBars } from 'react-icons/fa6';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	}

	useEffect(() => {
		const hendleScroll = () => {
			if (window.scrollY > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};
		window.addEventListener('scroll', hendleScroll);

		return () => {
			window.addEventListener('scroll', hendleScroll);
		}
	})

	const navItems = [
		{link: "Home", path: "home"},
		{link: "Service", path: "service"},
		{link: "About", path: "about"},
		{link: "Product", path: "product"},
		{link: "Testimonial", path: "testimonial"},
		{link: "FAQ", path: "faq"},
	];

	return (
		<>
			<header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
				<nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>

					<div className='flex justify-between items-center text-base gap-8'>
						<a className='text-2xl font-semibold flex items-center space-x-3' href="/">
							<img className='w-10 inline-block items-center' src={logo} alt="Imagem do logo" />
							<span className='text-[#263238]'>Nexcent</span>
						</a>

						<ul className='md:flex space-x-12 hidden'>
							{
								navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>)
							}
						</ul>

						<div className='space-x-12 hidden lg:flex items-center'>
							<a className='hidden lg:flex items-center text-brandPrimary hover:text-gray900' href="">
								Login
							</a>

							<button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey'>
								Sign up
							</button>
						</div>

						<div className='md:hidden'>
							<button
							onClick={toggleMenu}
							className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
								{
									isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)
								}
							</button>
						</div>

					</div>

					<div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden" }`}>
						{
							navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-brandPrimary first:font-medium'>{link}</Link>)
						}
					</div>

				</nav>
			</header>
		</>
	)
}
