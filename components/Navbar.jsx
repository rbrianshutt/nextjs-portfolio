import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from 'next/router';
import NavLogo from '../public/navLogo.png';

function Navbar() {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#ecf0f3');
	const [linkColor, setLinkColor] = useState('#1f2937');
	const [position, setPosition] = useState('fixed');
	const router = useRouter();

	useEffect(() => {
		if (router.asPath === '/hulu' || router.asPath === '/weather') {
			setNavBg('transparent');
			setLinkColor('#ecf0f3');
		} else {
			setNavBg('#ecf0f3');
			setLinkColor('#1f2937');
		}
	}, [router]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-150'
					: 'fixed w-full h-20 z-[100]'
			}
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Link href='/'>
					<Image
						src={NavLogo}
						alt='/'
						width='70'
						height='25'
						className='cursor-pointer'
					/>
				</Link>
				<div>
					<ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
						<li className='ml-10 text-sm uppercase hover:border-b'>
							<Link href='/'>Home</Link>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b'>
							<Link href='/#about'>About</Link>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b'>
							<Link href='/#skills'>Skills</Link>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b'>
							<Link href='/#projects'>Projects</Link>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b'>
							<Link href='/#contact'>Contact</Link>
						</li>
					</ul>
					{/* Hamburger Icon */}
					<div
						style={{ color: `${linkColor}` }}
						onClick={handleNav}
						className='md:hidden'
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			{/* Mobile Menu */}
			{/* Overlay */}
			<div
				className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
			>
				{/* Side Drawer Menu */}
				<div
					className={
						nav
							? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Link href='/'>
								<Image
									src={NavLogo}
									alt='/'
									width='70'
									height='25'
									className='cursor-pointer'
								/>
							</Link>
							<div
								onClick={handleNav}
								className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-2'>
							<p className='w-[85%] md:w-[90%] py-2'>
								Let's build something legendary together
							</p>
						</div>
					</div>
					<div className='py-2 flex flex-col'>
						<ul className='uppercase'>
							<Link href='/'>
								<li onClick={() => setNav(!nav)} className='py-2 text-sm'>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li onClick={() => setNav(!nav)} className='py-2 text-sm'>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li onClick={() => setNav(!nav)} className='py-2 text-sm'>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li onClick={() => setNav(!nav)} className='py-2 text-sm'>
									Projects
								</li>
							</Link>
							<Link href='/#contact'>
								<li onClick={() => setNav(!nav)} className='py-2 text-sm'>
									Contact
								</li>
							</Link>
						</ul>
						<div className='pt-16'>
							<p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
							<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
									<Link href='https://www.linkedin.com/in/brian-shutt-28bb16177/'>
										<FaLinkedinIn />
									</Link>
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
									<Link href='https://github.com/rbrianshutt'>
										<FaGithub />
									</Link>
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
									<Link href='mailto:richardbrianshutt@gmail.com'>
										<AiOutlineMail />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
