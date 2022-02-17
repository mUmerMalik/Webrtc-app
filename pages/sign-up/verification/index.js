import React, { useState } from 'react';
import Link from 'next/link';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import HeadLayout from '@/layouts/partials/head/HeadLayout';

function Verification() {
	const [phoneNumber, setPhoneNumber] = useState();
	return (
		<>
			<HeadLayout title='Sing In' />
			<div className='flex flex-col justify-center py-16 bg-red-50 sm:px-6 lg:px-8 dark:bg-black'>
				<div className='sm:mx-auto sm:w-full sm:max-w-md'>
					<h2 className='mt-0 text-xl font-extrabold text-center text-gray-900 md:mt-6 md:text-3xl dark:text-white'>
						Sign Up For Free Account
					</h2>
					<p className='mt-2 text-xs text-center text-gray-600 md:text-sm max-w dark:text-white'>
						Or
						<Link href='/sign-in'>
							<a className='ml-1 font-medium text-red-800 '>
								sign in to an existing account
							</a>
						</Link>
					</p>
				</div>

				<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
					<div className='px-4 py-8 bg-red-800 shadow sm:rounded-lg sm:px-10'>
						<form className='mb-5 space-y-6'>
							<div>
								<label
									htmlFor='phoneNumber'
									className='block text-xs font-medium text-white md:text-sm'
								>
									Phone Number
								</label>
								<div className='mt-1'>
									<PhoneInput
										placeholder='Enter phone number'
										value={phoneNumber}
										id='phoneNumber'
										className='block w-full px-3 py-2 text-xs text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm appearance-none form-control focus:outline-none md:text-sm'
										onChange={setPhoneNumber}
									/>
								</div>
							</div>

							<>
								<button
									type='submit'
									className='flex justify-center w-full px-4 py-2 text-sm font-medium text-red-700 bg-white border border-transparent rounded-md shadow-sm focus:outline-none'
								>
									Send OTP
								</button>
							</>
						</form>
						<form className='space-y-6'>
							<div>
								<label
									htmlFor='pinCode'
									className='block text-xs font-medium text-white md:text-sm'
								>
									PIN Code
								</label>
								<div className='mt-1'>
									<input
										name='pinCode'
										autoComplete='off'
										className='block w-full px-3 py-2 text-xs text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none form-control focus:outline-none md:text-sm'
									/>
								</div>
							</div>

							<>
								<button
									type='submit'
									className='flex justify-center w-full px-4 py-2 text-sm font-medium text-red-700 bg-white border border-transparent rounded-md shadow-sm focus:outline-none'
								>
									Confirm Registration
								</button>
							</>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Verification;
