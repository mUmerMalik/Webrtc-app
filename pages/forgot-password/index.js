import React, { useEffect } from 'react';
import Link from 'next/link';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import { Input } from '@/common/forms/Input';
import HeadLayout from '@/layouts/partials/head/HeadLayout';

const SignInFormSchema = Yup.object().shape({
	email: Yup.string().email().required('email is required'),
	password: Yup.string().required('password is required'),
});

function ForgotPassword() {
	return (
		<>
			<HeadLayout title='Forgot Password' />
			<div className='flex flex-col justify-center py-16 bg-red-50 sm:px-6 lg:px-8 dark:bg-black'>
				<div className='sm:mx-auto sm:w-full sm:max-w-md'>
					<h2 className='mt-0 text-xl font-extrabold text-center text-gray-900 md:mt-6 md:text-3xl dark:text-white'>
						Forgot your password?
					</h2>
					<p className='mt-2 text-xs text-center text-red-800 md:text-sm max-w dark:text-white'>
						We got this under control!
					</p>
				</div>

				<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
					<div className='px-4 py-8 bg-red-800 shadow sm:rounded-lg sm:px-10'>
						<Formik
							enableReinitialize={true}
							initialValues={{
								email: '',
								password: '',
							}}
							validationSchema={SignInFormSchema}
							onSubmit={(values) => {
								const { email, password } = values;
								dispatch(userLogin(email, password));
							}}
						>
							{({ errors, handleSubmit, touched, values }) => (
								<Form className='space-y-6'>
									<div>
										<label
											htmlFor='email'
											className='block text-xs font-medium text-white md:text-sm'
										>
											Email address
										</label>
										<div className='mt-1'>
											<Field
												name='email'
												component={Input}
												autoComplete='off'
												className='block w-full px-3 py-2 text-xs text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none form-control focus:outline-none md:text-sm'
												placeholder='Email'
											/>
											<ErrorMessage
												name='email'
												component='p'
												className='mt-2 text-xs text-red-500'
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor='password'
											className='block text-xs font-medium text-white md:text-sm'
										>
											Password
										</label>
										<div className='mt-1'>
											<Field
												name='password'
												component={Input}
												autoComplete='off'
												type='password'
												className='block w-full px-3 py-2 text-xs text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none form-control focus:outline-none md:text-sm'
												placeholder='password'
											/>
											<ErrorMessage
												name='password'
												component='p'
												className='mt-2 text-xs text-red-500'
											/>
										</div>
									</div>

									<div className='sm:flex sm:items-center sm:justify-between'>
										<div className='flex items-center'>
											<input
												id='remember_me'
												name='remember_me'
												type='checkbox'
												defaultChecked={true}
												className='w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500'
											/>
											<label
												htmlFor='remember_me'
												className='block ml-2 text-xs text-white md:text-sm'
											>
												Remember me
											</label>
										</div>
									</div>

									<div>
										<button
											type='submit'
											className='flex justify-center w-full px-4 py-2 text-sm font-medium text-red-700 bg-white border border-transparent rounded-md shadow-sm focus:outline-none'
										>
											Reset Password
										</button>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</>
	);
}

export default ForgotPassword;
