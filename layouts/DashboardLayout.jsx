import DashboardHeader from '@/layouts/dashboardPartials/dashboardHeader/DashboardHeader';

export default function DashboardLayout({ pageTitle, children }) {
	return (
		<div>
			<DashboardHeader pageTitle={pageTitle} />
			<main className='relative -mt-32'>
				<div className='max-w-screen-xl px-4 pb-6 mx-auto sm:px-6 lg:pb-16 lg:px-8'>
					<div className='overflow-hidden bg-white rounded-lg shadow'>
						{children}
					</div>
				</div>
			</main>
		</div>
	);
}
