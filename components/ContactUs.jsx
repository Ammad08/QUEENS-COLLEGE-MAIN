// // components/ContactUs.js
// "use client"

// import Link from "next/link";
// import { useEffect } from 'react';
// import { motion } from 'framer-motion';

// const ContactUs = () => {
//     useEffect(() => {
//     // Optional: Add any necessary setup for effects
//   }, []);
//   return (
//     <main

//       className="bg-[url('/contact.jpg')] bg-cover bg-center h-screen font-sans-serif"
//     >
//       {/* Overlay for background dimming */}
//       <div className="h-full bg-gradient-to-br from-black/60 via-black/40 to-transparent">
//         <div className="flex flex-col justify-center items-start h-full pl-10 md:pl-16 lg:pl-24">
//           <div className="xl:w-2/3 md:w-5/6 w-full px-4 md:px-0 xl:px-20 space-y-6">

//             <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient mb-6">
//               EDUCATION FOR ALL. <br />
//               <span className="text-white block lg:inline">
//                 TOGETHER WE
//               </span>{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
//                 THRIVE
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-white text-base md:text-lg lg:text-xl xl:text-lg leading-relaxed tracking-wide mb-8">
//               Our cutting-edge curriculum empowers students with the knowledge,
//               skills, and experiences needed to excel in the dynamic field of
//               education.
//             </p>

//             {/* Button Section */}
//             <Link href="/exploremore">
//             <div className="space-x-4">
//               <button className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 rounded-full shadow-lg transition-transform transform hover:scale-105">
//                 Explore More
//               </button>

//             </div>
//             </Link>

//           </div>
//         </div>
//       </div>

//       <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: 'easeInOut' }}
//       className="flex flex-col items-center justify-center min-h-screen mt-24 bg-gradient-to-br from-blue-50 to-blue-100"
//     >
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
//       <p className="text-gray-600 text-lg mb-8 text-center max-w-lg">
//         We’d love to hear from you! Fill out the form below, and we’ll get back to you shortly.
//       </p>

//       <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-4">
//         <motion.div whileHover={{ scale: 1.05 }} className="relative">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-md transition focus:outline-none focus:border-blue-400"
//           />
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }} className="relative">
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-md transition focus:outline-none focus:border-blue-400"
//           />
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }} className="relative">
//           <textarea
//             placeholder="Your Message"
//             rows="4"
//             className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-md transition focus:outline-none focus:border-blue-400"
//           />
//         </motion.div>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200"
//         >
//           Send Message
//         </motion.button>
//       </form>
//     </motion.div>

//     </main>
//   );
// };

// export default ContactUs;

// components/ContactUs.js
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  useEffect(() => {
    // Optional: Add any necessary setup for effects
  }, []);

  return (
    <main className="bg-[url('/contact.jpg')] bg-cover bg-center font-sans-serif min-h-screen">
      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-br from-black/60 via-black/40 to-transparent flex flex-col justify-center items-start pl-6 md:pl-16 lg:pl-24">
        <div className="xl:w-2/3 md:w-5/6 w-full px-4 md:px-0 xl:px-20 space-y-6">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient mb-6">
            CONTACT US ANYTIME. <br />
            {/* <span className="text-white block lg:inline">TOGETHER WE</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
              THRIVE
            </span> */}
          </h1>

          <p className="text-white text-base md:text-lg lg:text-xl xl:text-lg leading-relaxed tracking-wide mb-8">
            Our cutting-edge curriculum empowers students with the knowledge,
            invites students, alumni,and visitors to connect with us for the
            inquiries, support, or feedback With an easy-to-use form.
          </p>

          {/* <Link href="/exploremore">
            <button className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Explore More
            </button>
          </Link> */}
        </div>
      </div>

      {/* Contact Us Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 md:p-8 space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8 text-center max-w-lg">
            We’d love to hear from you! Fill out the form below, and we’ll get
            back to you shortly.
          </p>

          <form className="space-y-4">
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-md transition focus:outline-none focus:border-blue-400"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-md transition focus:outline-none focus:border-blue-400"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-md transition focus:outline-none focus:border-blue-400"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Footer Placeholder Section */}
      {/* <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
      </footer> */}
    </main>
  );
};

export default ContactUs;
