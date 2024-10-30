// components/ExploreMore.jsx
import React from "react";
import Image from "next/image"; // Ensure this import is present

const ExploreMore = () => {
  return (
    <main className="bg-[url('/explorecover.jpg')]  bg-cover bg-center font-sans-serif min-h-screen ">
      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-br from-black/60 via-black/40 to-transparent flex flex-col justify-center items-start pl-6 md:pl-16 lg:pl-24">
        <div className="xl:w-2/3 md:w-5/6 w-full px-4 md:px-0 xl:px-20 space-y-6">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient mb-6">
            Explore Queen's University
            <br />
            {/* <span className="text-white block lg:inline">TOGETHER WE</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
              THRIVE
            </span> */}
          </h1>

          <p className="text-white text-base md:text-lg lg:text-xl xl:text-lg leading-relaxed tracking-wide mb-8">
            Discover a world of academic excellence, vibrant campus life, and
            transformative experiences. Dive deeper into our programs, research
            opportunities, and student resources designed to help you thrive and
            achieve your goals.
          </p>

          {/* <Link href="/exploremore">
            <button className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Explore More
            </button>
          </Link> */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 py-20 md:p-32 bg-gray-300">
        {/* Left Side */}
        <div className="flex flex-col justify-center h-full md:w-1/2 md:pr-10">
          <h1 className="text-4xl  font-bold mb-4">Our Mission</h1>
          <p className="mb-2">
          Since our establishment in 1986, our mission has been to empower individuals, strengthen communities, and to foster personal growth.
          </p>
          <p className="mb-2">
          We offer high-quality, career-focused programs taught by industry professionals. Designed to be concise, you will quickly gain skills and qualifications needed to pursue in-demand careers. 
          </p>
          <p className="mb-2">
          Our small class sizes ensure a personalized and hands-on learning experience for our students. 
          </p>
          <p className="mb-2">
          Join our multi-cultural community that will enrich your educational experience. We want you to succeed and will support you every step of the way.
          </p>
          <p className="mb-2">
            Our team is dedicated to helping you find the ideal space, offering
            personalized recommendations and support throughout the booking
            process.
          </p>
          <p className="mb-2">
            With diverse options available, you can choose the perfect venue
            that aligns with your vision and budget.
          </p>
          <p className="mb-2">
          Education For All. Together We Thrive. 
          </p>
        </div>

        {/* Right Side */}
        <div className="relative md:w-1/2 transition-transform duration-500 hover:scale-y-90 flex justify-center">
          {/* Image with a class to ensure it stays on top */}
          <Image
            src="/explore2.png" // Ensure this path is correct and the image exists in the public directory
            alt="Your Image Description"
            width={500} // Set appropriate width
            height={300} // Set appropriate height
            className="object-cover relative z-10"
          />
          {/* Blue div positioned behind the image */}
          <div className="absolute bg-blue-700 w-full md:w-[490px] h-[300px] md:h-[500px] -bottom-[20px] left-5 md:left-[20px] z-0 opacity-70">
            {/* This div will be visible from the bottom and left of the image */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExploreMore;
