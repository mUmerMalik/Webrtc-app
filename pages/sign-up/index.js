import React, { useEffect } from 'react';
import Link from 'next/link';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import { Input } from '@/common/forms/Input';
import HeadLayout from '@/layouts/partials/head/HeadLayout';

const SignInFormSchema = Yup.object().shape({
	fullName: Yup.string().required('Full name is required'),
	displayName: Yup.string().required('Display name is required'),
	email: Yup.string().email().required('Email is required'),
	agree: Yup.boolean().oneOf([true]),
	over18: Yup.boolean().oneOf([true]),
	password: Yup.string().required('Password is required'),
	passwordConfirmation: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Passwords must match'),
});

function SignUp() {
	return (
		<>
			<HeadLayout title='Sing Up' />
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
						<Formik
							enableReinitialize={true}
							initialValues={{
								fullName: '',
								displayName: '',
								agree: false,
								over18: false,
								email: '',
								password: '',
								passwordConfirmation: '',
							}}
							validationSchema={SignInFormSchema}
							onSubmit={(values) => {
								// const { email, password, fullName, displayName } = values;
								console.log(values);
								// dispatch(userLogin(email, password));
							}}
						>
							{({ errors, handleSubmit, touched, values }) => (
								<Form className='space-y-6'>
									<div>
										<label
											htmlFor='fullName'
											className='block text-xs font-medium text-white md:text-sm'
										>
											Full Name
										</label>
										<div className='mt-1'>
											<Field
												name='fullName'
												component={Input}
												autoComplete='off'
												className='block w-full px-3 py-2 text-xs text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none form-control focus:outline-none md:text-sm'
												placeholder='Full Name'
											/>
											<ErrorMessage
												name='fullName'
												component='p'
												className='mt-2 text-xs text-red-500'
											/>
										</div>
									</div>
									<div>
										<label
											htmlFor='displayName'
											className='block text-xs font-medium text-white md:text-sm'
										>
											Display Name
										</label>
										<div className='mt-1'>
											<Field
												name='displayName'
												component={Input}
												autoComplete='off'
												className='block w-full px-3 py-2 text-xs text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none form-control focus:outline-none md:text-sm'
												placeholder='Display Name'
											/>
											<ErrorMessage
												name='displayName'
												component='p'
												className='mt-2 text-xs text-red-500'
											/>
										</div>
									</div>
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

									<div>
										<label
											htmlFor='passwordConfirmation'
											className='block mt-5 text-xs font-medium text-white md:text-sm'
										>
											Password (Repeat)
										</label>
										<div className='mt-1'>
											<Field
												name='passwordConfirmation'
												component={Input}
												autoComplete='nope'
												type='password'
												className='block w-full px-3 py-2 text-xs text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none form-control focus:outline-none md:text-sm'
												placeholder='Confirm Password'
											/>
											<ErrorMessage
												name='passwordConfirmation'
												component='p'
												className='mt-1 text-xs text-red-500'
											/>
										</div>
									</div>

									<div className='block'>
										<div className='flex items-center mb-2'>
											<Field
												id='agree'
												name='agree'
												type='checkbox'
												className='w-3 h-3 text-red-600 border-gray-300 rounded focus:ring-red-500'
											/>
											<label
												htmlFor='agree'
												className='block ml-2 text-xs text-white'
											>
												By signing up, you agree to our terms & services.
											</label>
										</div>
										<div>
											<ErrorMessage
												name='agree'
												component='p'
												className='block w-full mt-1 text-xs text-red-500'
											/>
										</div>
										<div className='flex items-center '>
											<Field
												id='over18'
												name='over18'
												type='checkbox'
												className='w-3 h-3 text-red-600 border-gray-300 rounded focus:ring-red-500'
											/>
											<label
												htmlFor='over18'
												className='inline-block ml-2 text-xs text-white'
											>
												You confirm you are over 18 over legal age in your
												region to join this company.
											</label>
										</div>
										<div>
											<ErrorMessage
												name='over18'
												component='p'
												className='block w-full mt-1 text-xs text-red-500'
											/>
										</div>
									</div>

									<div>
										<button
											type='submit'
											className='flex justify-center w-full px-4 py-2 text-sm font-medium text-red-700 bg-white border border-transparent rounded-md shadow-sm focus:outline-none'
										>
											Sign up
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

export default SignUp;
