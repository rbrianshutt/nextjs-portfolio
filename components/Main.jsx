import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

function Main() {
	return (
		<div id='home' className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-widest text-gray-600'>
						WELCOME TO MY PORTFOLIO
					</p>
					<h1 className='py-4 text-gray-700'>
						<span className='text-[#5651e5]'>Richard Brian Shutt</span>
					</h1>
					<h1 className='py-2 text-gray-700'>Developer/Software Engineer</h1>
					<p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
						I’m focused on building responsive front-end web applications integrating
						back-end technologies.
					</p>
					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<Link href='https://www.linkedin.com/in/brian-shutt-28bb16177/'>
								<FaLinkedinIn />
							</Link>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<Link href='https://github.com/rbrianshutt'>
								<FaGithub />
							</Link>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<Link href='mailto:richardbrianshutt@gmail.com'>
								<AiOutlineMail />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
