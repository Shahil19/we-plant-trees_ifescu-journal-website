import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();
    const [
        createUserWithEmailAndPassword,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = data => {
        const { email, password, confirmPassword } = data
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
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
                                Password Confirmation
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
        </section>
    );
};

export default SignUp;