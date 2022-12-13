import React from 'react';
import huluClone from '../public/Projects/hulu-clone2.png';
import weatherApp from '../public/Projects/weather-app.png';
import ProjectItem from '/components/ProjectItem';

function Projects() {
	return (
		<div id='projects' className='w-full'>
			<div className='max-w-[1240px] mx-auto px-2 py-16'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
				<h2 className='py-4'>What I've Built</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem title='Hulu-Clone' backgroundImg={huluClone} projectUrl='/hulu' />
					<ProjectItem
						title='Weather App'
						backgroundImg={weatherApp}
						projectUrl='/weather'
					/>
				</div>
			</div>
		</div>
	);
}

export default Projects;
