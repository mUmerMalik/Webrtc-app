import React from 'react';

const people = [
	{
		name: 'Lindsay Walton',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Lindsay Walton',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Lindsay Walton',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Lindsay Walton',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Lindsay Walton',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Lindsay Walton',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Lindsay Walton',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Lindsay Walton',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Lindsay Walton',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Lindsay Walton',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Lindsay Walton',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Lindsay Walton',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
];

const MemberList = () => {
	return (
		<div className='bg-white'>
			<div className='py-4 mx-auto max-w-9xl lg:py-8'>
				<div className='space-y-5'>
					<div className='flex items-center md:max-w-xl lg:max-w-3xl xl:max-w-none'>
						<img
							className='inline-flex object-cover object-center w-8 h-10'
							src='assets/images/CanadaFlag.png'
							alt=''
						/>
						<h2 className='inline-flex ml-3 text-xl font-medium md:text-2xl'>
							Trending on BearStream
						</h2>
					</div>
					<ul className='grid gap-5 grid-col sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6'>
						{people.map((person) => (
							<li
								key={person.name}
								className='relative h-64 overflow-hidden rounded-lg shadow-lg md:h-40'
							>
								<img
									className='object-cover w-full h-full'
									src={person.imageUrl}
									alt=''
								/>
								<div className='absolute bottom-0 left-0 w-full h-full bg-gray-900 bg-opacity-50'>
									<p className='absolute flex items-center justify-between w-full text-sm text-white bottom-2 left-2 flex-cols-2'>
										{person.name}
										<span className='inline-flex mr-5'>
											<svg
												className='w-3 h-3 text-green-400'
												fill='currentColor'
												viewBox='0 0 8 8'
											>
												<circle cx={4} cy={4} r={3} />
											</svg>
										</span>
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MemberList;
