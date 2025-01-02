
import React from 'react'
import Image from 'next/image';
import Comments from '@/app/comment/page';





const blogData = [
    {
        title: "Future of SEO: AI, User Intent, and Content Strategies for 2025 and Beyond",
        id: 1,
        path: "future of SEO: AI, User Intent, and Content Strategies for 2025 and Beyond",
        image: "/seo.jpeg",
        description: "In the ever-evolving world of SEO, staying ahead of the latest trends and strategies is crucial for marketers to maintain visibility in search engine results. As we look towards 2024 and beyond, the integration of AI and machine learning into SEO practices is becoming increasingly important for optimizing content and improving ranking on search engine results pages (SERPs).",
        description2: "In this article, we will explore the future of SEO and discuss how leveraging AI can enhance content creation, user intent, and overall SEO success. We will also delve into Google's latest algorithm updates and provide expert insights and best practices for SEO professionals and content creators in the ever-changing landscape of search engine optimization. Let's dive into how the use of AI and other SEO strategies can help marketers stay ahead in 2024 and beyond.",
        description3: "In the world of SEO in 2024 and beyond, it is crucial for marketers and SEO professionals to stay informed about the latest trends and strategies. By focusing on creating helpful content, optimizing for user intent, and integrating AI tools, SEO professionals can enhance their visibility in search engine results and stay ahead of the competition. The future of SEO is evolving, and it is essential for professionals to adapt to the changing landscape to achieve SEO success."

    },
    {
        title: "Web Design Trends: Enhancing User Engagement Through Innovative Design.",
        id: 2,
        path: "web Design Trends: Enhancing User Engagement Through Innovative Design.",
        image: "/design.jpeg",
        description: "In the fast-paced world of digital marketing, staying ahead of the curve is essential for web designers looking to create impactful and engaging user experiences.As we head into 2024 and beyond, the top web design trends are shaping the way websites are designed and developed. From AI revolutionizing user engagement to the rise of minimalism making a comeback, there are a plethora of design elements to watch out for in the coming year. ",
        description2: "In this article, we will explore the latest innovations in website design, the impact of AI on web design, creating immersive experiences through animation and interactivity, the rise of minimalism, and how design elements influence user behavior and engagement. Join us as we dive into the world of web design in 2024 and discover how to make your website stand out in the digital world.",
        description3: "In terms of design trends for 2024, websites are expected to become more interactive and immersive, with the use of motion effects, hero images, and parallax scrolling to create a dynamic and engaging user experience. Designers should also consider incorporating elements like neon colors and glassmorphism to enhance brand identity and make a strong impact on visitors."
    },
    {
        title: "The Future of Website Accessibility in 2024: Top Web Design Trends and AI Revolutionizing.",
        id: 3,
        path: "the Future of Website Accessibility in 2024: Top Web Design Trends and AI Revolutionizing.",
        image: "/media.jpeg",
        description: "In the ever-evolving world of web design, staying ahead of the latest trends is crucial for creating impactful and engaging websites.  As we look ahead to 2024, web designers are expected to embrace new technologies and design elements to enhance user experience and accessibility. From the rise of AI in web design to the impact of typography and animation, the digital marketing world is set to see some exciting developments. In this article, we will explore the top 10 web design trends for 2024",
        description2: "The role of AI in revolutionizing user experience, and how design aesthetics and functionality are shaping immersive experiences for users. We will also delve into the importance of website accessibility and the trends to watch for in 2024 and beyond. Join us as we navigate the future of web design and discover the latest innovations that will shape the online presence of brands in the coming years.",
        description3: "As we look towards the future of web design in 2024 and beyond, there are several key trends that web designers and design agencies should keep an eye on. One of the top web design trends for 2024 is the continued emphasis on user experience (UX) and aesthetics. Designers will need to focus on creating immersive experiences for users, utilizing interactive elements, white space, and clean and minimalist designs to engage visitors and keep them on the website."

    },
    {
        title: "Introduction to Growth Hacking: Accelerating Small Business Growth",
        id: 4,
        path: "introduction to Growth Hacking: Accelerating Small Business Growth",
        image: "/growth.jpeg",
        description: "In todays fiercely competitive business landscape, small businesses face numerous challenges when it comes to scaling their operations and reaching a broader audience. This is where growth hacking emerges as a powerful approach to propel rapid business growth. Unlike traditional marketing strategies, growth hacking focuses on innovative, cost-effective, and data-driven techniques to achieve exponential growth.",
        description2: "Growth hacking can be defined as a mindset and set of techniques aimed at achieving rapid and sustainable business growth by leveraging creative strategies, data analysis, and experimentation. Coined by Sean Ellis, the term “growth hacking” gained popularity in the startup world, where limited resources and a need for rapid growth compelled businesses to think outside the box.",
        description3: "In todays fast-paced business environment, agility and adaptability are crucial for small businesses. Growth hacking embraces these qualities by encouraging experimentation and rapid iteration. By constantly testing and adapting their strategies based on market feedback and data insights, small businesses can respond quickly to changing customer needs, market trends, and competitive dynamics.",

    },
    {
        title: "Maximizing Instagram Stories: Top Social Media Trends and Strategies for Marketers",
        id: 5,
        path: "maximizing Instagram Stories: Top Social Media Trends and Strategies for Marketers",
        image: "/infu.jpeg",
        description: "In today's ever-evolving digital landscape, staying on top of social media trends is crucial for marketers looking to engage with their audience and drive business growth.",
        description2: "Social media has become integral to modern life, with billions of people using platforms like Facebook, Twitter, and Instagram daily. Social media presents a massive opportunity for businesses and organizations to connect with customers, build brand awareness, and drive sales. However, as social media continues to evolve, its more important than ever for businesses to have a clear and effective social media management strategy.",

        description3: "Social media is not just about broadcasting messages to a broad audience its also about building a community of engaged followers loyal to your brand. Building a community can help businesses increase engagement, generate user-generated content, and develop a loyal customer base. Here are some key subtopics to cover in this section:",
    },
    {
        title: "Revolutionizing PPC Advertising: Voice Search Trends and Strategies for 2024",
        id: 6,
        path: "revolutionizing PPC Advertising: Voice Search Trends and Strategies for 2024",
        image: "/start.png",
        description: "In the ever-evolving landscape of digital marketing, PPC advertising continues to play a crucial role in helping advertisers reach their target audience trends. ",
        description2: "Pay-per-click (PPC) advertising has become an important marketing channel for businesses of all sizes. However, as the competition for ad space on search engines and social media platforms grows, its becoming increasingly challenging to stand out and attract the attention of potential customers. Thats where personalization comes in. Personalization in PPC means tailoring your ads and messaging to specific audiences based on their interests, demographics, and behaviour. By doing so, you can create a more relevant and engaging experience for your audience and improve the performance of your campaigns.",

        description3: "Personalization in PPC involves using data to deliver tailored ad experiences to different audiences. This can include adjusting ad copy, landing pages, and targeting parameters based on search intent, demographics, interests, and previous interactions with your brand. Personalization allows you to create a more personalized and engaging experience for your audience, which can increase the likelihood of them clicking on your ads, converting, and becoming loyal customers.",
    }
];

interface PageProps  {
    params: Promise<{ id: string }>; 
  }

  const page = async ({ params }: PageProps) => {
    const id = parseInt((await params).id); // Convert string ID to number
    const blog = blogData.find((item) => item.id === id);

    return (
        <div>
            {blog ? (
                <div key={blog.id}>
                    <main className="w-full h-auto  max-w-screen-2xl mx-auto">
                        <section className="flex flex-col justify-center items-start mx-auto px-4 md:px-16 lg:px-[250px]">
                            <h1 className="font-sans font-semibold text-xl md:text-2xl lg:text-3xl text-gray-700 py-5">
                                {blog.title}
                            </h1>
                            <Image
                                className="h-48 md:h-64 lg:h-80 bg-cover bg-center"
                                src={blog.image}
                                alt={blog.title}
                                width={900}
                                height={600}
                            />
                            <p className="font-sans text-gray-600 text-xs md:text-sm py-4 md:py-6 lg:py-8">
                                {blog.description}
                            </p>
                            <p className="font-sans text-gray-600 text-xs md:text-sm">
                                {blog.description2}
                            </p>
                            <p className="font-sans text-gray-600 text-xs md:text-sm py-4 md:py-6 lg:py-8">
                                {blog.description3}
                            </p>
                        </section>
                        <Comments/>
                    </main>
                </div>
            ) : (
                <p>Blog not found</p>
            )}


        </div>
    );
};

export default page;
