import React from 'react';
import Sidebar from '@/components/Sidebar';
import { MenuAlt2Icon, SearchIcon } from '@heroicons/react/outline';
import MemberList from '@/components/home/MemberList';
import Banner from '@/components/home/Banner';

const index = () => {
	return (
		<>
			<div className='flex h-screen overflow-hidden bg-white'>
				<Sidebar />
				<div className='flex flex-col flex-1 w-0 overflow-hidden'>
					<div className='relative z-0 flex flex-shrink-0 h-16 bg-white md:bg-transparent md:hidden'>
						<button
							className='px-4 text-gray-500 border-b border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
							onClick={() => setSidebarOpen(true)}
						>
							<span className='sr-only'>Open sidebar</span>
							<MenuAlt2Icon className='w-6 h-6' aria-hidden='true' />
						</button>
					</div>
					<main className='relative flex items-start flex-1 w-full mx-auto overflow-y-auto max-w-7xl'>
						<div className='py-6'>
							<div className='w-full px-4 max-w-auto sm:px-6 md:px-8'>
								<div className='py-4'>
									<Banner />
									<MemberList />
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default index;
