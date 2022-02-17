import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
	BellIcon,
	CogIcon,
	CreditCardIcon,
	KeyIcon,
	MenuIcon,
	UserCircleIcon,
	ViewGridAddIcon,
	XIcon,
} from '@heroicons/react/outline';

const user = {
	name: 'Debbie Lewis',
	handle: 'deblewis',
	email: 'debbielewis@example.com',
	imageUrl:
		'https://www.nicepng.com/png/detail/98-988253_bodybuilding-png-body-builder-man-png.png',
};
const navigation = [
	{ name: 'Dashboard', href: '#', current: true },
	{ name: 'Jobs', href: '#', current: false },
	{ name: 'Applicants', href: '#', current: false },
	{ name: 'Company', href: '#', current: false },
];
const subNavigation = [
	{ name: 'Profile', href: '#', icon: UserCircleIcon, current: true },
	{ name: 'Account', href: '#', icon: CogIcon, current: false },
	{ name: 'Password', href: '#', icon: KeyIcon, current: false },
	{ name: 'Notifications', href: '#', icon: BellIcon, current: false },
	{ name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
	{ name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false },
];
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const DashboardHeader = ({ pageTitle }) => {
	return (
		<Disclosure
			as='div'
			className='relative pb-32 overflow-hidden bg-black bg-opacity-90'
		>
			{({ open }) => (
				<>
					<nav
						className={classNames(
							open ? 'bg-black bg-opacity-90' : 'bg-transparent',
							'relative z-10 border-b border-teal-500 border-opacity-25 lg:bg-transparent lg:border-none'
						)}
					>
						<div className='px-2 mx-auto max-w-7xl sm:px-4 lg:px-8'>
							<div className='relative flex items-center justify-between h-16 lg:border-b lg:border-light-blue-800'>
								<div className='flex items-center px-2 lg:px-0'>
									<div className='flex-shrink-0'>
										<img
											className='block w-auto h-8'
											src='/assets/images/whiteLogo.png'
											alt='BearPlex'
										/>
									</div>
									<div className='hidden lg:block lg:ml-6 lg:space-x-4'>
										<div className='flex'>
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className={classNames(
														item.current ? 'bg-gray-600' : 'hover:bg-gray-600',
														'rounded-md py-2 mx-1 px-3 text-sm text-white'
													)}
												>
													{item.name}
												</a>
											))}
										</div>
									</div>
								</div>
								<div className='flex lg:hidden'>
									{/* Mobile menu button */}
									<Disclosure.Button className='inline-flex items-center justify-center p-2 text-white border border-white rounded-md focus:outline-none'>
										<span className='sr-only'>Open main menu</span>
										{open ? (
											<XIcon
												className='flex-shrink-0 block w-6 h-6'
												aria-hidden='true'
											/>
										) : (
											<MenuIcon
												className='flex-shrink-0 block w-6 h-6'
												aria-hidden='true'
											/>
										)}
									</Disclosure.Button>
								</div>
								<div className='hidden lg:block lg:ml-4'>
									<div className='flex items-center'>
										<Menu as='div' className='relative flex-shrink-0 ml-4'>
											{({ open }) => (
												<>
													<div>
														<Menu.Button className='flex text-sm text-white rounded-full focus:outline-none'>
															<span className='sr-only'>Open user menu</span>
															<img
																className='w-8 h-8 rounded-full'
																src={user.imageUrl}
																alt=''
															/>
														</Menu.Button>
													</div>
													<Transition
														show={open}
														as={Fragment}
														enter='transition ease-out duration-100'
														enterFrom='transform opacity-0 scale-95'
														enterTo='transform opacity-100 scale-100'
														leave='transition ease-in duration-75'
														leaveFrom='transform opacity-100 scale-100'
														leaveTo='transform opacity-0 scale-95'
													>
														<Menu.Items
															static
															className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
														>
															{userNavigation.map((item) => (
																<Menu.Item key={item.name}>
																	{({ active }) => (
																		<a
																			href={item.href}
																			className={classNames(
																				active ? 'bg-gray-100' : '',
																				'block py-2 px-4 text-sm text-gray-700'
																			)}
																		>
																			{item.name}
																		</a>
																	)}
																</Menu.Item>
															))}
														</Menu.Items>
													</Transition>
												</>
											)}
										</Menu>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className='bg-light-blue-900 lg:hidden'>
							<div className='px-2 pt-2 pb-3 space-y-1'>
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current ? 'bg-gray-600' : 'hover:bg-gray-600',
											'block mx-1 rounded-md py-1 px-2 text-sm text-white'
										)}
									>
										{item.name}
									</a>
								))}
							</div>
							<div className='pt-4 pb-3 border-t border-light-blue-800'>
								<div className='flex items-center px-4'>
									<div className='flex-shrink-0'>
										<img
											className='w-10 h-10 rounded-full'
											src={user.imageUrl}
											alt=''
										/>
									</div>
									<div className='ml-3'>
										<div className='text-sm text-white'>{user.name}</div>
										<div className='text-xs text-white'>{user.email}</div>
									</div>
								</div>
								<div className='px-2 mt-3'>
									{userNavigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className='block px-2 py-1 text-sm text-white rounded-md hover:bg-light-blue-800'
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</Disclosure.Panel>
					</nav>

					<header className='relative py-10 border-b border-gray-500'>
						<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
							<h1 className='text-3xl font-bold text-white'>{pageTitle}</h1>
						</div>
					</header>
				</>
			)}
		</Disclosure>
	);
};

export default DashboardHeader;
