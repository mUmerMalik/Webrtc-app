import React from 'react';
import { XIcon } from '@heroicons/react/outline';

const Banner = () => {
	return (
		<div className='relative bg-red-900 rounded-lg'>
			<img
				className='absolute top-0 left-0'
				src='assets/images/BannerDollarIcon.png'
				alt=''
			/>
			<div className='inline-grid items-center px-5 pt-12 pb-3 mx-auto md:py-2 md:pl-12 md:pr-4 md:grid-cols-2 grid-col'>
				<div className='flex items-center justify-center xl:pr-16 lg:pr-10 lg:justify-start'>
					<p className='inline mx-auto ml-4 text-sm text-center text-white md:text-left font-md lg:ml-3'>
						Create a free account on bearstream to earn over $5000 a month.
					</p>
				</div>
				<p className='inline-block'>
					<a
						href='#'
						className='flex justify-center text-sm font-bold text-white md:justify-end md-pt-0'
					>
						Become a host now <span aria-hidden='true'>&rarr;</span>
					</a>
				</p>
			</div>
		</div>
	);
};

export default Banner;
