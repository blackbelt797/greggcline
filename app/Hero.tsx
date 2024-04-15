export default function Hero() {
 return (
  <div className=" flex justify-center items-center  lg:flex-row lg:my-44 lg:justify-around lg:w-full lg:px-14 lg:items-start ">
   <div className="max-w-lg lg:w-1/2">
    <h1 className="mb-12 text-7xl leading-snug font-extrabold  tracking-tight text-white  md:text-5xl lg:text-6xl lg:leading-tight">
     Hey I&apos;m Gregg and I build stuff for the web.
    </h1>
    <p className="my-7 text-lg font-normal lg:text-xl"></p>
    <a
     href="tel:+1(951)704-6886"
     className="w-full lg:w-1/2 my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-black border-btn_border border-2 rounded-lg  ">
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
   <img className=" max-w-sm rounded-md" src="./images/ProfilePic.jpg" alt="Pic of Gregg" />
  </div>
 );
}
