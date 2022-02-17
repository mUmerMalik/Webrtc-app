import { Provider } from 'react-redux';
import axios from 'axios';
import { NotificationContainer } from 'react-notifications';
import Head from 'next/head';

import store from '@/app/store';
import HomeLayout from '@/layouts/HomeLayout';
import Loader from '@/components/Loader/Loader';

//CSS
import '../node_modules/react-notifications/lib/notifications.css';
import '@/styles/globals.css';

export const instanceOne = axios.create({
	baseURL: 'http://localhost:5200/api',
	headers: { 'Content-Type': 'application/json', Accept: '*/*' },
});

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout || HomeLayout;
	const pageTitle = Component.Title || 'Setting';

	return (
		<Provider store={store}>
			<div className='relative block w-full h-auto dark:bg-black'>
				<Head>
					<meta httpEquiv='cache-control' content='no-cache' />
					<meta httpEquiv='expires' content='0' />
					<meta httpEquiv='pragma' content='no-cache' />
				</Head>
				<Layout pageTitle={pageTitle}>
					<Loader />
					<Component {...pageProps} />
					<NotificationContainer />
				</Layout>
			</div>
		</Provider>
	);
}

export default MyApp;
