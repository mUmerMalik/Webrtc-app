import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import {
	ChartBarIcon,
	CursorClickIcon,
	DocumentReportIcon,
	MenuIcon,
	RefreshIcon,
	ShieldCheckIcon,
	ViewGridIcon,
	XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const Categories = [
	{
		name: 'Analytics',
		description:
			'Get a better understanding of where your traffic is coming from.',
		href: '#',
		icon: ChartBarIcon,
	},
	{
		name: 'Engagement',
		description: 'Speak directly to your customers in a more meaningful way.',
		href: '#',
		icon: CursorClickIcon,
	},
	{
		name: 'Security',
		description: "Your customers' data will be safe and secure.",
		href: '#',
		icon: ShieldCheckIcon,
	},
	{
		name: 'Integrations',
		description: "Connect with third-party tools that you're already using.",
		href: '#',
		icon: ViewGridIcon,
	},
	{
		name: 'Automations',
		description:
			'Build strategic funnels that will drive your customers to convert',
		href: '#',
		icon: RefreshIcon,
	},
	{
		name: 'Reports',
		description:
			'Get detailed reports that will help you make more informed decisions ',
		href: '#',
		icon: DocumentReportIcon,
	},
];
const Tokens = [
	{
		name: 'Help Center',
		description:
			'Get all of your questions answered in our forums or contact support.',
		href: '#',
	},
	{
		name: 'Guides',
		description:
			'Learn how to maximize our platform to get the most out of it.',
		href: '#',
	},
	{
		name: 'Events',
		description:
			'See what meet-ups and other events we might be planning near you.',
		href: '#',
	},
	{
		name: 'Security',
		description: 'Understand how we take your privacy seriously.',
		href: '#',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Header = () => {
	return (
		<Popover className='relative bg-red-900'>
			{({ open }) => (
				<>
					<div className='flex items-center justify-between w-full px-4 py-6 mx-auto sm:px-6 max-w-7xl'>
						<a href='#'>
							<span className='sr-only'>BearPlex</span>
							<img
								className='w-auto h-8 sm:h-10'
								src='/assets/images/whiteLogo.png'
								alt=''
							/>
						</a>
						<div className='my-2 mr-2 lg:mr-0 md:hidden'>
							<Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
								<span className='sr-only'>Open menu</span>
								<MenuIcon className='w-6 h-6' aria-hidden='true' />
							</Popover.Button>
						</div>
						<div className='items-center justify-start hidden md:flex lg:justify-start'>
							<Popover.Group
								as='nav'
								className='hidden mr-5 space-x-10 md:flex'
							>
								<Popover className='relative'>
									{({ open }) => (
										<>
											<Popover.Button
												className={classNames(
													open ? 'text-white' : 'text-white',
													'group rounded-md inline-flex items-center text-base text-white font-medium focus:outline-none'
												)}
											>
												<span>Categories</span>
												<ChevronDownIcon
													className={classNames(
														open ? 'text-white' : 'text-white',
														'ml-2 h-5 w-5'
													)}
													aria-hidden='true'
												/>
											</Popover.Button>

											<Transition
												show={open}
												as={Fragment}
												enter='transition ease-out duration-200'
												enterFrom='opacity-0 translate-y-1'
												enterTo='opacity-100 translate-y-0'
												leave='transition ease-in duration-150'
												leaveFrom='opacity-100 translate-y-0'
												leaveTo='opacity-0 translate-y-1'
											>
												<Popover.Panel
													static
													className='absolute z-10 w-screen max-w-md mt-3 -ml-4 transform lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
												>
													<div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
														<div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 lg:grid-cols-2'>
															{Categories.map((item) => (
																<a
																	key={item.name}
																	href={item.href}
																	className='flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50'
																>
																	<div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-red-900 rounded-md sm:h-12 sm:w-12'>
																		<item.icon
																			className='w-6 h-6'
																			aria-hidden='true'
																		/>
																	</div>
																	<div className='ml-4'>
																		<p className='text-base font-medium text-gray-900'>
																			{item.name}
																		</p>
																		<p className='mt-1 text-sm text-gray-500'>
																			{item.description}
																		</p>
																	</div>
																</a>
															))}
														</div>
														<div className='p-5 bg-gray-50 sm:p-8'>
															<a
																href='#'
																className='flow-root p-3 -m-3 rounded-md hover:bg-gray-100'
															>
																<div className='flex items-center'>
																	<div className='text-base font-medium text-gray-900'>
																		Enterprise
																	</div>
																	<span className='ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-red-100 text-red-800'>
																		New
																	</span>
																</div>
																<p className='mt-1 text-sm text-gray-500'>
																	Empower your entire team with even more
																	advanced tools.
																</p>
															</a>
														</div>
													</div>
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>

								<a href='#' className='text-base font-medium text-white'>
									Random
								</a>
								<a href='#' className='text-base font-medium text-white'>
									FAQ
								</a>

								<Popover className='relative'>
									{({ open }) => (
										<>
											<Popover.Button
												className={classNames(
													open ? 'text-white' : 'text-white',
													'group rounded-md inline-flex items-center text-base font-medium focus:outline-none'
												)}
											>
												<span>Tokens</span>
												<ChevronDownIcon
													className={classNames(
														open ? 'text-white' : 'text-white',
														'ml-2 h-5 w-5'
													)}
													aria-hidden='true'
												/>
											</Popover.Button>

											<Transition
												show={open}
												as={Fragment}
												enter='transition ease-out duration-200'
												enterFrom='opacity-0 translate-y-1'
												enterTo='opacity-100 translate-y-0'
												leave='transition ease-in duration-150'
												leaveFrom='opacity-100 translate-y-0'
												leaveTo='opacity-0 translate-y-1'
											>
												<Popover.Panel
													static
													className='absolute z-10 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0'
												>
													<div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
														<div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8'>
															{Tokens.map((item) => (
																<a
																	key={item.name}
																	href={item.href}
																	className='block p-3 -m-3 rounded-md'
																>
																	<p className='text-base font-medium text-gray-900'>
																		{item.name}
																	</p>
																	<p className='mt-1 text-sm text-gray-500'>
																		{item.description}
																	</p>
																</a>
															))}
														</div>
													</div>
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>
							</Popover.Group>
							<Link
								href='/sign-up'
								
							>
								<a className='px-4 py-2 text-base font-medium text-red-800 bg-white border border-transparent rounded-full shadow-sm whitespace-nowrap'>Create Free Account</a>
							</Link>
							<Link
								href='/sign-in'
								
							>
								<a className='inline-flex items-center justify-center text-base font-medium text-white ml-7'>Sign In</a>
							</Link>
						</div>
					</div>

					<Transition
						show={open}
						as={Fragment}
						enter='duration-200 ease-out'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='duration-100 ease-in'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<Popover.Panel
							focus
							static
							className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden z-50'
						>
							<div className='bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 '>
								<div className='px-5 pt-5 pb-5'>
									<div className='flex items-center justify-between'>
										<div>
											<img
												className='w-auto h-8'
												src='/assets/images/Bearplex-logo-black.png'
												alt='Workflow'
											/>
										</div>
										<div className='-mr-2'>
											<Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
												<span className='sr-only'>Close menu</span>
												<XIcon className='w-6 h-6' aria-hidden='true' />
											</Popover.Button>
										</div>
									</div>
								</div>
								<div className='px-5 pb-5'>
									<div className='grid gap-4 grid-col'>
										<div className='mt-6'>
											<Popover className='relative'>
												{({ open }) => (
													<>
														<Popover.Button
															className={classNames(
																open ? 'text-gray-900' : 'text-gray-900',
																'group rounded-md inline-flex items-center text-base text-gray-900 font-medium focus:outline-none'
															)}
														>
															<span>Categories</span>
															<ChevronDownIcon
																className={classNames(
																	open ? 'text-gray-900' : 'text-gray-900',
																	'ml-2 h-5 w-5'
																)}
																aria-hidden='true'
															/>
														</Popover.Button>

														<Transition
															show={open}
															as={Fragment}
															enter='transition ease-out duration-200'
															enterFrom='opacity-0 translate-y-1'
															enterTo='opacity-100 translate-y-0'
															leave='transition ease-in duration-150'
															leaveFrom='opacity-100 translate-y-0'
															leaveTo='opacity-0 translate-y-1'
														>
															<Popover.Panel
																static
																className='absolute z-10 w-full max-w-md mt-3 transform lg:max-w-2xl'
															>
																<div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
																	<div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 lg:grid-cols-2'>
																		{Categories.map((item) => (
																			<a
																				key={item.name}
																				href={item.href}
																				className='flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50'
																			>
																				<div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-red-900 rounded-md sm:h-12 sm:w-12'>
																					<item.icon
																						className='w-6 h-6'
																						aria-hidden='true'
																					/>
																				</div>
																				<div className='ml-4'>
																					<p className='text-base font-medium text-gray-900'>
																						{item.name}
																					</p>
																					<p className='mt-1 text-sm text-gray-500'>
																						{item.description}
																					</p>
																				</div>
																			</a>
																		))}
																	</div>
																	<div className='p-5 bg-gray-50 sm:p-8'>
																		<a
																			href='#'
																			className='flow-root p-3 -m-3 rounded-md hover:bg-gray-100'
																		>
																			<div className='flex items-center'>
																				<div className='text-base font-medium text-gray-900'>
																					Enterprise
																				</div>
																				<span className='ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-red-100 text-red-800'>
																					New
																				</span>
																			</div>
																			<p className='mt-1 text-sm text-gray-500'>
																				Empower your entire team with even more
																				advanced tools.
																			</p>
																		</a>
																	</div>
																</div>
															</Popover.Panel>
														</Transition>
													</>
												)}
											</Popover>
										</div>
										<a
											href='#'
											className='text-base font-medium text-gray-900 hover:text-gray-700'
										>
											Random
										</a>

										<a
											href='#'
											className='text-base font-medium text-gray-900 hover:text-gray-700'
										>
											FAQ
										</a>

										<Popover className='relative'>
											{({ open }) => (
												<>
													<Popover.Button
														className={classNames(
															open ? 'text-gray-900' : 'text-gray-900',
															'group rounded-md inline-flex items-center text-base font-medium focus:outline-none'
														)}
													>
														<span>Tokens</span>
														<ChevronDownIcon
															className={classNames(
																open ? 'text-gray-900' : 'text-gray-900',
																'ml-2 h-5 w-5'
															)}
															aria-hidden='true'
														/>
													</Popover.Button>

													<Transition
														show={open}
														as={Fragment}
														enter='transition ease-out duration-200'
														enterFrom='opacity-0 translate-y-1'
														enterTo='opacity-100 translate-y-0'
														leave='transition ease-in duration-150'
														leaveFrom='opacity-100 translate-y-0'
														leaveTo='opacity-0 translate-y-1'
													>
														<Popover.Panel
															static
															className='absolute z-10 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0'
														>
															<div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
																<div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8'>
																	{Tokens.map((item) => (
																		<a
																			key={item.name}
																			href={item.href}
																			className='block p-3 -m-3 rounded-md'
																		>
																			<p className='text-base font-medium text-gray-900'>
																				{item.name}
																			</p>
																			<p className='mt-1 text-sm text-gray-500'>
																				{item.description}
																			</p>
																		</a>
																	))}
																</div>
															</div>
														</Popover.Panel>
													</Transition>
												</>
											)}
										</Popover>
									</div>
									<div className='mt-6'>
										<Link href='/sign-up'>
											<a className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-900 border border-transparent rounded-md shadow-sm '>
												Create Free Account
											</a>
										</Link>
										<p className='mt-6 text-base font-medium text-center text-gray-500'>
											Existing customer?{' '}
											<Link href='/sign-in'>
												<a className='text-red-900'>Sign In</a>
											</Link>
										</p>
									</div>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};

export default Header;
