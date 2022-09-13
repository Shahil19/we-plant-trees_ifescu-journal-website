import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

export default function PrefaceModal({ title, shortTitle, action }) {

    let [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const updatedContent = data[shortTitle]
        console.log(data);
        dispatch(action({ userId: 1, updatedContent }))
        reset()
    };


    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="btn btn-sm btn-circle btn-outline bg-black  text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center py-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white py-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 px-6 text-center"
                                    >
                                        {title}
                                    </Dialog.Title>

                                    <div className="mt-2">
                                        <div className="w-full">
                                            <div className="rounded bg-white shadow p-6">

                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <div className="pb-6">
                                                        <label htmlFor={shortTitle} className="font-semibold text-gray-700 block pb-1">{title}</label>
                                                        <div className="flex">
                                                            {/* <span style={{ backgroundColor: "#F9FAFB" }} className="text-gray-600 border rounded-l px-4 py-2 whitespace-no-wrap">http://</span> */}
                                                            <textarea {...register(shortTitle)} id={shortTitle} className="border border-l-0 rounded-r px-4 py-2 w-full" type="text" placeholder={title} />
                                                        </div>
                                                        {errors[shortTitle] && <span>{title}is required</span>}
                                                    </div>
                                                    <button
                                                        onClick={closeModal}
                                                        className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                                        type="submit">Update {title}</button>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
