import React, { Fragment, useEffect } from 'react';
import Footer from '@/layouts/partials/footer/Footer';
import Header from '@/layouts/partials/header/Header';

function HomeLayout({ children }) {
	return (
		<Fragment>
			<Header />
			<div>{children}</div>
			<Footer />
		</Fragment>
	);
}

export default HomeLayout;
