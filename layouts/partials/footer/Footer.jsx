import Link from 'next/link';
import Image from 'next/image';

const navigation = {
	inSide: [
		{ text: 'Customer Support Center', link: '/' },
		{ text: 'Host Login', link: '/' },
		{ text: 'Become a Host', link: '/' },
		{ text: 'Affiliate Program', link: '/' },
		{ text: 'Press Releases', link: '/' },
		{ text: 'Contact', link: '/' },
	],
	outSide: [
		{ text: 'Site Index', href: '#' },
		{ text: 'Sitemap', href: '#' },
		{ text: 'Terms of Use', href: '#' },
		{ text: 'Privacy Policy', href: '#' },
		{ text: 'Anti-Spam Policy', href: '#' },
		{ text: 'Cookie Policy', href: '#' },
		{ text: 'Refund Policy', href: '#' },
		{ text: 'Trust Center', href: '#' },
		{
			text: '18 U.S.C. § 2257 Record-Keeping Requirements Compliance Statement',
			href: '#',
		},
	],
};

export default function Footer() {
	return (
		<footer className='bg-black bg-opacity-90' aria-labelledby='footerHeading'>
			<h2 id='footerHeading' className='sr-only'>
				Footer
			</h2>
			<div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-10 lg:px-8'>
				<div className='block pb-0 md:pb-8'>
					<ul className='grid items-center justify-center w-full grid-cols-2 mb-3 md:flex'>
						{navigation.inSide.map((item) => (
							<li key={item.text}>
								<Link href={item.link}>
									<a className='block mx-2 mb-2 text-xs text-center text-gray-300 md:text-sm hover:text-white'>
										{item.text}
									</a>
								</Link>
							</li>
						))}
					</ul>
					<ul className='grid items-center justify-center w-full grid-cols-2 md:flex'>
						{navigation.outSide.map((item) => (
							<li key={item.text}>
								<a
									href={item.href}
									className='block mx-2 mb-2 text-xs text-center text-gray-300 hover:text-white'
								>
									{item.text}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className='flex flex-col items-center justify-center pt-5 mt-5 border-t border-gray-700'>
					<p className='mt-5 mb-3 text-xs text-center text-gray-400 md:mt-8 md:text-sm'>
						&copy; 2021 BearStream, Inc. All Rights Reserved. All members were
						16 & over at the time of the creation of such depictions.
					</p>
					<div className='flex w-auto max-auto'>
						<Image
							width={200}
							height={80}
							src='/assets/images/FooterLogo2.png'
							alt='Picture of the author'
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
