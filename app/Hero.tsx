export default function Hero() {
 return (
  <div className="flex flex-col justify-center items-center px-8 py-20 my-20 lg:flex-row lg:my-44 lg:justify-between lg:w-full lg:px-14 lg:items-start ">
   <div className="max-w-lg lg:w-1/2">
    <h1 className="mb-12 text-7xl leading-snug font-extrabold  tracking-tight text-gray-900  md:text-5xl lg:text-6xl lg:leading-tight  dark:text-white">
     Hey I&apos;m Gregg and I build stuff for the web.
    </h1>
    <p className="my-7 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400"></p>
    <a
     href="tel:+1(951)704-6886"
     className="w-full lg:w-1/2 my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
     Let&apos;s connect!
     <svg
      className="w-3.5 h-3.5 ml-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10">
      <path
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       d="M1 5h12m0 0L9 1m4 4L9 9"
      />
     </svg>
    </a>
   </div>
   <img className="max-w-lg" src="./images/NeonPic.jpg" alt="Neon Fish" />
  </div>
 );
}
