import React from 'react';
import Image from 'next/image';
import Html from '../public/Skills/html.png';
import Css from '../public/Skills/css.png';
import Javascript from '../public/Skills/javascript.png';
import ReactImg from '../public/Skills/react.png';
import Tailwind from '../public/Skills/tailwind.png';
import Github from '../public/Skills/github1.png';
import Git from '../public/Skills/git.png';
import NextJS from '../public/Skills/nextjs.png';

function Skills() {
	return (
		<div id='skills' className='w-full lg:h-screen p-2'>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
				<h2 className='py-4'>What I Can Do</h2>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={Html} width={64} height={64} alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={Css} width={64} height={64} alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={Javascript} width={64} height={64} alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Javascript</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={ReactImg} width={64} height={64} alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>React</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={Tailwind} width={64} height={64} alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={NextJS} width={64} height={64} alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>NextJS</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={Github} width={64} height={64} alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Github</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image src={Git} width={64} height={64} alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Git</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
