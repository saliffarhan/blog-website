import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div>
            <main className="max-w-[100%] h-auto bg-slate-00">
                <section className="px-4 py-20 flex flex-col md:flex-row items-center gap-10 md:gap-x-20 lg:gap-x-44 mx-auto max-w-[1200px]">
                    {/* left-side */}
                    <div className="text-center md:text-left">
                        <h1 className="font-semibold font-sans text-2xl md:text-3xl text-purple-500">We are</h1>
                        <h3 className="font-bold font-sans text-4xl md:text-5xl pt-5 text-gray-500">Creating <span className='text-orange-400'>Opportunities</span> </h3>
                        <h4 className="font-semibold font-sans text-xl md:text-3xl pt-3 text-gray-700 ">For Learners</h4>
                        <input
                            className="py-2 rounded-3xl w-full md:w-[70%] mt-11 px-4 border border-gray-400"
                            type="text"
                            placeholder="Search your blog..."
                        />
                        <br />
                        <button className="glow-on-hover" type="button">Explore more</button>
                    </div>

                    {/* right-side */}
                    <div className="flex-1">
                        <Image
                            className="w-full h-auto max-w-[400px] mx-auto"
                            width={600}
                            height={300}
                            src="/blog-hero.png"
                            alt="Blog Hero"
                        />
                    </div>
                </section>
            </main>
        </div>

    )
}

export default Hero
