import React from 'react'

const Inbox = () => {
    return (
        <div>
            <main className="max-w-full h-auto ">
                <section className="flex justify-center items-center my-11 py-11 sm:py-20">
                    <div className="text-center px-4 sm:px-8">
                        <h2 className="font-sans font-bold text-lg sm:text-xl md:text-2xl xl:text-5xl text-gray-600 leading-snug tracking-wider">
                            Get our <span className='text-orange-400'>stories delivered</span> from <br className="hidden sm:block" />us to your inbox weekly.
                        </h2>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <input
                                className="py-2 rounded-3xl w-full sm:w-[70%] md:w-[50%] lg:w-[40%] px-4 border border-gray-400"
                                type="text"
                                placeholder="Your email..."
                            />
                            <button className="px-6 font-semibold hover:text-black py-2 border hover:border-orange-500 rounded-3xl bg-orange-400 text-white duration-200">
                                Submit
                            </button>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    )
}

export default Inbox
