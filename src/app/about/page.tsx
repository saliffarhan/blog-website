import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* section1 */}
            <main className='xl:mx-w-[100px] h-auto  mx-auto max-w-screen-2xl'>
                <section className='flex-col md:flex-col lg:flex-row  flex justify-between items-center lg:px-[100px] px-4 xl:gap-20  '>
                    <div className='lg:flex-1 lg:mt-11 mt-8 md:mt-7 md:text-center lg:text-start'>
                        <h2 className='font-sans font-bold md:text-4xl text-3xl lg:text-5xl'><span className='text-orange-400'>About</span> BrandCurb</h2>
                        <p className='font-sans text-gray-600 pt-8 '>Were on a mission to start a conversation with you and your customers in this fast connected world. Lets discover, build and grow your digital business.</p>
                        <button className='px-7 font-semibold hover:text-black mt-5 py-2 border hover:border-orange-500 rounded-2xl bg-orange-400 text-white duration-200'>Our Mission</button>
                    </div>
                    <div >
                        <Image width={500} height={400} src="/b-about.webp" alt="" />
                    </div>
                </section>
            </main>

            {/* Section2 */}
            <main className='xl:mx-w-[100px] h-auto  mx-auto max-w-screen-2xl my-11'>
                <section className='flex-col md:flex-col lg:flex-row  flex justify-between items-center lg:px-[100px] px-4 xl:gap-24 lg:gap-10  '>
                    <div >
                        <Image width={470} height={400} src="/s2.webp" alt="" />
                    </div>
                    <div className='lg:flex-1 lg:my-11 mt-8 md:mt-7 md:text-center lg:text-start'>
                        <h2 className='font-sans font-bold md:text-4xl text-3xl lg:text-5xl'><span className='text-orange-400'>Our</span> Mission</h2>
                        <p className='font-sans text-gray-600 pt-5 '>Our mission is to provide our client what they need! We are a dynamic team of creative people.
                        </p>
                        <p className='font-sans text-gray-600 pt-5 '>No need to waste time and money on different agencies that inclusively focus on various aspects of your business because at BrandCurb, weve got everything you need—and so much more.</p>
                        <p className='font-sans text-gray-600 pt-3 '>BrandCurb houses professionals who will closely work with you as you effectively, efficiently, and sustainably race towards achieving your companys growth, at a reasonable cost for your budding venture. So its worry-free, hassle-free, and affordable!</p>
                    </div>

                </section>
            </main>
            {/* section3 */}
            <main className='xl:mx-w-[100px] h-auto  mx-auto max-w-screen-2xl'>
                <section className='flex-col md:flex-col lg:flex-row  flex justify-between items-center lg:px-[100px] px-4 xl:gap-20  '>
                    <div className='lg:flex-1 lg:mt-5 mt-8 md:mt-7 md:text-center lg:text-start'>
                        <h2 className='font-sans font-bold md:text-4xl text-3xl lg:text-5xl'><span className='text-orange-400'>Effective</span> Efficient</h2>
                        <p className='font-sans text-gray-600 pt-8 '>BrandCurb is a unified communications platform that empowers business owners and promotes business growth through services that strengthen brand identity, and sustainably promote online presence to increase engagement. We offer services to help small business enterprises from branding, website development, to digital marketing—and everything else digital in between.</p>
                    </div>
                    <div >
                        <Image width={500} height={400} src="/effect.webp" alt="" />
                    </div>
                </section>
            </main>


        </div>
    )
}

export default page
