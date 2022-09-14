import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const [
        signInWithEmailAndPassword,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        const { email, password } = data
        signInWithEmailAndPassword(email, password)
        reset()
    };

    return (
        <section className="bg-white">
            <h2 className='text-3xl font-semibold text-center'>Please Login</h2>
            <main
                className="flex items-center justify-center px-8  sm:px-12 lg:col-span-7  lg:px-16 xl:col-span-6"
            >
                <div className="max-w-xl lg:max-w-3xl">
                    <form onSubmit={handleSubmit(onSubmit)} action="#" className="grid grid-cols-6 gap-6 mt-8">
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

                        <div className="col-span-6 ">
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

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                                className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-blue-600 border border-blue-600 rounded-md shrink-0 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            >
                                Login
                            </button>

                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                New to wePlantTree?
                                <Link to='/signUp' className="text-gray-700 underline">SignUp</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
};

export default Login;