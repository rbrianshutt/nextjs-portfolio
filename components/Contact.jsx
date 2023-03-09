import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/contact.jpg';
function Contact() {
	return (
		<div id='contact' className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
				<h2 className='py-4'>Get In Touch</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/*left*/}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full'>
							<h2 className='py-2'>Richard Brian Shutt</h2>
							<div>
								<Image
									src={ContactImg}
									alt='/'
									className='rounded-xl hover:scale-105 ease-in duration-150'
								/>
							</div>
						</div>
					</div>
					{/*Right*/}
					<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
						<h2 className='py-4 text-center'>Contact</h2>
						<h3 className='text-2xl p-2'>Email:</h3>
						<p className='font-bold p-2'>richardbrianshutt@gmail.com</p>
						<h3 className='text-2xl p-2'>Phone:</h3>
						<p className='font-bold p-2'>636-577-6982</p>
						<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
								<Link href='https://www.linkedin.com/in/brian-shutt-28bb16177/'>
									<FaLinkedinIn />
								</Link>
							</div>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
								<Link href='https://github.com/rbrianshutt'>
									<FaGithub />
								</Link>
							</div>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
								<Link href='mailto:richardbrianshutt@gmail.com'>
									<AiOutlineMail />
								</Link>
							</div>
						</div>
					</div>
					{/* <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Name</label>
										<input
											type='text'
											className='border-2 rounded-lg p-3 flex border-gray-300'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Phone Number</label>
										<input
											type='text'
											className='border-2 rounded-lg p-3 flex border-gray-300'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>E-mail</label>
									<input
										type='email'
										className='border-2 rounded-lg p-3 flex border-gray-300'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Subject</label>
									<input
										type='text'
										className='border-2 rounded-lg p-3 flex border-gray-300'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Message</label>
									<textarea
										className='border-2 rounded-lg p-3 flex border-gray-300'
										rows='10'
									></textarea>
								</div>
								<button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
							</form>
						</div>
					</div> */}
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
							<HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Contact;
