import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [passErr, setPassErr] = useState('')

    const onSubmit = data => {
        const { email, password, confirmPassword } = data
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
        } else {
            setPassErr('Password did not match')
        }
        reset()
    };

    if (loading) {
        return <h1 className='text-4xl font-bold'>Loading...</h1>
    }

    return (
        <section className="bg-white">
            <h2 className='text-3xl font-semibold text-center'>Please Sign Up</h2>
            <main
                className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6"
            >
                <div className="max-w-xl lg:max-w-3xl">
                    <form onSubmit={handleSubmit(onSubmit)} action="#" className="grid grid-cols-6 gap-6 mt-8">
                        <div className="col-span-6">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>

                            <input
                                {...register("username", { required: true })}
                                type="text"
                                id="username"
                                name="username"
                                className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm p-3"
                                placeholder='Username'
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>

                            <input
                                {...register("email", { required: true })}
                                type="email"
                                id="Email"
                                name="email"
                                className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm p-3"
                                placeholder='Email'
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="Password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>

                            <input
                                {...register("password", { required: true })}
                                type="password"
                                id="Password"
                                name="password"
                                className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm p-3"
                                placeholder='Password'
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                {passErr ? <span className='text-red-400'>{passErr}</span> : 'Password Confirmation'}
                            </label>

                            <input
                                {...register("confirmPassword", { required: true })}
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm p-3"
                                placeholder='Password Confirmation'
                            />
                        </div>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                                className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-blue-600 border border-blue-600 rounded-md shrink-0 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            >
                                Create an account
                            </button>

                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                Already have an account?
                                <Link to='/login' className="text-gray-700 underline">Log in</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </main>

            <div
                className="w-4/5 mx-auto flex items-center my-7 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>

            <div
                className="flex items-center justify-center px-8  sm:px-12 lg:col-span-7  lg:px-16 xl:col-span-6 w-1/2 mx-auto"
            >
                <button
                    onClick={() => signInWithGoogle()}
                    className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                    style={{ backgroundColor: "#565656" }}
                >
                    <svg
                        className="w-3.5 h-3.5 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488 512">
                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg>Continue with Google
                </button>

            </div>
        </section>
    );
};

export default SignUp;