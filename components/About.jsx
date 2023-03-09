import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/about.jpg';

function About() {
	return (
		<div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
					<h2 className='py-4'>Who I Am</h2>
					<p className='py-2 text-gray-600'>
						I’m a self taught developer/programmer that is passionate about technology and
						learning. My emphasis has been front-end, but I am learning the back-end as
						well. I come from a strong background in management and working with teams to
						achieve results.
					</p>
					<p className='py-2 text-gray-600'>
						My coding journey began in 2020 when I was furloughed from my job due to
						Covid-19. With my newfound time, I committed to learning new skills. I started
						with the fundamentals of HTML, CSS, and Javascript using Visual Studio Code.
					</p>
					<p className='py-2 text-gray-600'>
						Over time, I learned React, Nextjs, Git, and some Redux. I gained exposure to
						Python, SQL, .Net Core, C#, Azure, Visual Studio, and various styling
						languages and frameworks including Tailwind CSS. I also spent time learning
						data structures and algorithms
					</p>
					<p className='py-2 text-gray-600'>
						While I have been a hobbyist in tech over the past couple of years, I am
						looking to transition into tech professionally. My goal is to earn an entry
						level developer/software engineer position to work on projects in a team
						environment.
					</p>
				</div>
				<div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-150'>
					<Image src={AboutImg} className='rounded-xl' alt='/' />
				</div>
			</div>
		</div>
	);
}

export default About;
