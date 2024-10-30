// "use client";
// import { useState, useEffect } from "react";

// const NavBar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false); // Mobile menu state

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen); // Toggle menu
//   const handleScrollTo = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//       setIsOpen(false); // Close menu after clicking a link
//     }
//   };

//   return (
//     <main>
//       {/* Large Screen Navbar */}
//       <header
//         className={`text-white fixed w-full z-50 ${
//           isScrolled ? "bg-stone-800" : "bg-transparent"
//         } hidden md:block transition-colors duration-300`}
//       >
//         <div className="container mx-auto px-6 py-3 flex items-center justify-between">
//           <h2 className="text-2xl font-semibold">LOGO</h2>
//           <nav className="flex space-x-8">
//             {["home", "program", "about", "admission", "footer"].map((item) => (
//               <button
//                 key={item}
//                 className="hover:text-gray-200"
//                 onClick={() => handleScrollTo(item)}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </button>
//             ))}
//           </nav>
//           <button
//             onClick={() => handleScrollTo("contact")}
//             className="px-6 py-2 text-black bg-white rounded-full shadow-lg hover:bg-gray-200"
//           >
//             Contact Us
//           </button>
//         </div>
//       </header>

//       {/* Medium and Small Screen Navbar */}
//       <header
//         className={`fixed w-full z-50 md:hidden ${
//           isScrolled ? "bg-stone-800 bg-opacity-90" : "bg-transparent"
//         } transition-colors duration-300`}
//       >
//         <div className="container mx-auto flex items-center justify-between px-6 py-3">
//           <h2 className="text-2xl text-white font-semibold">LOGO</h2>

//           {/* Hamburger/Cross Button */}
//           <button onClick={toggleMenu} className="text-white z-50 relative">
//             {isOpen ? (
//               // Cross Icon
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 ></path>
//               </svg>
//             ) : (
//               // Hamburger Icon
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h7"
//                 ></path>
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <nav
//           className={`fixed top-0 right-0 h-full w-full bg-gradient-to-br from-[#4e342e] via-[#5d4037] to-[#3e2723] z-40 transform ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           } transition-transform duration-300 ease-in-out`}
//         >
//           <ul className="flex flex-col items-center py-16 space-y-6">
//             {["home", "program", "about", "Admission", "footer"].map((item) => (
//               <li key={item}>
//                 <button
//                   onClick={() => handleScrollTo(item)}
//                   className="text-white hover:text-gray-200"
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </button>
//               </li>
//             ))}
//             <li>
//               <button
//                 onClick={() => handleScrollTo("contact")}
//                 className="px-6 py-2 font-semibold text-black bg-white rounded-full shadow-lg hover:bg-stone-400"
//               >
//                 Contact Us
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </main>
//   );
// };

// export default NavBar;





"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // state for opening and closing the mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // toggle mobile menu
  };
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main>
      {/* Nav For Larger Screen */}
      <header
        className={`text-white fixed body-font   w-full   z-50 ${
          isScrolled ? "bg-stone-800  text-white" : "bg-transparent"
        } hidden custom:block transition-colors duration-300`}
      >
        <div className="container mx-auto px-32 py-3 flex items-center justify-center">
          <div className="w-1/3">
            <Image
              src="/nav.png"
              className=""
              alt="logo"
              width={180}
              height={180}
            />
          </div>
          <div className="flex items-center space-x-2">
            <nav className="custom:ml-auto flex items-center text-base justify-between">
              <button
                className="mr-5 lg:mr-12 hover:text-gray-200"
                onClick={() => handleScrollTo("home")}
              >
                Home
              </button>
              <button
                className="mr-5 lg:mr-12 hover:text-gray-200"
                onClick={() => handleScrollTo("footer")}
              >
                Program
              </button>
              <button
                className="mr-5 lg:mr-12 hover:text-gray-200 text-nowrap"
                onClick={() => handleScrollTo("about")}
              >
                About 
              </button>
              <Link href="/admissions">
              <button
                className="mr-5 lg:mr-12 hover:text-gray-200"
                onClick={() => handleScrollTo("campus")}
              >
                Admission
              </button>
              </Link>
              <button
                className="mr-5 lg:mr-12 hover:text-gray-200"
                onClick={() => handleScrollTo("footer")}
              >
                Footer
              </button>
            </nav>
            <Link href="/contactus">

            <button
              // onClick={() => handleScrollTo("contact")}
              className="relative px-6 py-3 font-semibold text-black bg-white hover:bg-stone-400 rounded-full overflow-hidden shadow-lg"
            >
              <span className="relative z-10">Contact us</span>
              <span className="absolute inset-0 rounded-lg border-2 border-transparent animate-glowing-border"></span>
            </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Nav For Medium and Small Screen */}
      <header
        className={`fixed body-font  w-full z-50 custom:hidden transition-colors duration-300 ${
          isScrolled
            ? "bg-stone-800 bg-opacity-90 text-white"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between md:justify-center gap-24 py-3">
          {/* Logo */}
          <div className="flex items-center pr-20">
            {/* <Image src="/nav.png" alt="logo" width={120} height={120} />
           
             */}
            <h2 className="text-2xl font-semibold pl-9">LOGO</h2>
          </div>

          <div className="hidden md:flex items-center space-x-4 ">
            <nav className="custom:ml-auto flex items-center text-base justify-between font-semibold">
              <button
                className="mr-5 lg:mr-12 hover:text-gray-200"
                onClick={() => handleScrollTo("home")}
              >
                Home
              </button>
              <button
                className="mr-5 lg:mr-12 hover:text-gray-200"
                onClick={() => handleScrollTo("footer")}
              >
                Program
              </button>
              <button
                className="mr-5 lg:mr-12 hover:text-gray-200 text-nowrap"
                onClick={() => handleScrollTo("about")}
              >
                About 
              </button>
              <Link href="/admissions">
              <button
                className="mr-5 lg:mr-12 hover:text-gray-200"
                onClick={() => handleScrollTo("campus")}
              >
                Admission
              </button>
              </Link>
              <button
                className="mr-5 lg:mr-12 hover:text-gray-200"
                onClick={() => handleScrollTo("footer")}
              >
                Footer
              </button>
            </nav>
            <Link href="/contactus">
            <button
              // onClick={() => handleScrollTo("contact")}
              className="relative px-6 py-3 font-semibold text-black bg-white hover:bg-stone-400 rounded-full overflow-hidden shadow-lg"
            >
              <span className="relative z-10">Contact us</span>
              <span className="absolute inset-0 rounded-lg border-2 border-transparent animate-glowing-border"></span>
            </button>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="flex items-center z-50 md:hidden text-white ">
            {" "}
            <button onClick={toggleMenu} className=" focus:outline-none">
              {/* Hamburger Icon */}
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Slides in from the right) */}
        <nav
          className={`fixed top-0 right-0 h-full w-1/2 md:w-1/3 bg-stone-700 z-40 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <ul className="flex flex-col items-center py-16 space-y-6">
            <li>
              <button
                onClick={() => handleScrollTo("home")}
                className="text-white hover:text-gray-200"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("footer")}
                className="text-white hover:text-gray-200"
              >
                Program
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("about")}
                className="text-white items-center hover:text-gray-200"
              >
                About 
              </button>
            </li>
            <li>
            <Link href="/admissions">
              <button
                className="mr-5 lg:mr-12 hover:text-gray-200"
                onClick={() => handleScrollTo("campus")}
              >
                Admission
              </button>
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("VoiceofExperience")}
                className="text-white hover:text-gray-200"
              >
                footer
              </button>
            </li>
            <li>
              <Link href="/contactus">
              <button
                // onClick={() => handleScrollTo("contact")}
                className="relative px-6 py-3 font-semibold text-black bg-white hover:bg-stone-400 rounded-full overflow-hidden shadow-lg"
              >
                <span className="relative z-10">Contact us</span>
                <span className="absolute inset-0 rounded-lg border-2 border-transparent animate-glowing-border"></span>
              </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
};

export default NavBar;

