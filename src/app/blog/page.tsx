import React from 'react'
import Link from 'next/link'

const Blogs = () => {

    const Blog = [
        {
            title: "Future of SEO: AI, User Intent, and Content Strategies for 2025 and Beyond",
            id: 1,
            path: "future of SEO: AI, User Intent, and Content Strategies for 2025 and Beyond",
            image: "/seo.jpeg",
            description: "In the ever-evolving world of SEO, staying ahead of the latest trends and strategies is crucial for marketers to maintain visibility in search engine results."
        },
        {
            title: "Web Design Trends: Enhancing User Engagement Through Innovative Design.",
            id: 2,
            path: "web Design Trends: Enhancing User Engagement Through Innovative Design.",
            image: "/design.jpeg",
            description: "In the fast-paced world of digital marketing, staying ahead of the curve is essential for web designers looking to create impactful and engaging user experiences. "
        },
        {
            title: "The Future of Website Accessibility in 2024: Top Web Design Trends and AI Revolutionizing.",
            id: 3,
            path: "the Future of Website Accessibility in 2024: Top Web Design Trends and AI Revolutionizing.",
            image: "/media.jpeg",
            description: "In the ever-evolving world of web design, staying ahead of the latest trends is crucial for creating impactful and engaging websites. "
        },
        {
            title: "Introduction to Growth Hacking: Accelerating Small Business Growth",
            id: 4,
            path: "introduction to Growth Hacking: Accelerating Small Business Growth",
            image: "/growth.jpeg",
            description: "In todays fiercely competitive business landscape, small businesses face numerous challenges when it comes to scaling their operations and reaching a broader audience."
        },
        {
            title: "Maximizing Instagram Stories: Top Social Media Trends and Strategies for Marketers",
            id: 5,
            path: "maximizing Instagram Stories: Top Social Media Trends and Strategies for Marketers",
            image: "/infu.jpeg",
            description: "In today's ever-evolving digital landscape, staying on top of social media trends is crucial for marketers looking to engage with their audience and drive business growth."
        },
        {
            title: "Revolutionizing PPC Advertising: Voice Search Trends and Strategies for 2024",
            id: 6,
            path: "revolutionizing PPC Advertising: Voice Search Trends and Strategies for 2024",
            image: "/start.png",
            description: "In the ever-evolving landscape of digital marketing, PPC advertising continues to play a crucial role in helping advertisers reach their target audience trends. "
        }
        
    ]








  return (
    <div>


<div className="container mx-auto p-2 my-5 relative z-10">
        <h2 className="xl:text-4xl text-2xl font-bold text-center mt-11 "><span className='text-orange-400'>Resources</span> and insights</h2>
        <p className='font-sans font-semibold text-center pt-4 pb-9 text-gray-600'>The latest industry news, interviews, technologies, and resources.</p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:px-[54px] px-4  ">
          {Blog.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="group block bg-white rounded-lg overflow-hidden shadow-md transform transition duration-200 "
            >
              <div className="h-56 bg-cover bg-center rounded-xl"
               style={{ backgroundImage: `url(${blog.image})` }}></div>
              <div className="p-4 text-gray-800 ">
                <h3 className="text-base font-bold group-hover:text-orange-400">{blog.title}</h3>
                <p className="mt-3 text-gray-600 text-sm">{blog.description}</p>
                <div className='flex justify-between items-center pt-6'>
                    <button className='text-gray-700 group-hover:underline'>Read more</button>
                    <p className='text-gray-500 text-sm'>1-Jan-2025</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Blogs
