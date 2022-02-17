import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

function Loader({ loading }) {
	// const { streaming, dashboard, members } = useSelector((state) => state);
	return (
		<Fragment>
			{loading ? (
				<div className='bg-gray-800 bg-opacity-50 loading-body'>
					<div className='spinner' style={{ fontSize: '16px' }}>
						<div className='head'></div>
					</div>
				</div>
			) : null}
		</Fragment>
	);
}

export default Loader;
