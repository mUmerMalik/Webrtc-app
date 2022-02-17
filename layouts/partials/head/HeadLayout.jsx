import Head from 'next/head';

function HeadLayout({ title }) {
	return (
		<div>
			<Head>
				<title>BearStream | {title}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
		</div>
	);
}

export default HeadLayout;
