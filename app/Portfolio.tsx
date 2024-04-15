type Props = {
 id: string;
};

export default function Portfolio({ id }: Props) {
 return (
  <div id={id} className="flex flex-col mx-4 items-center justify-center my-24 lg:my-48">
   {/* There are two containers one is the header and the second is the 3 cards */}
   <div>
    <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-primary_4 md:text-5xl lg:text-6xl lg:leading-tight ">
     Portfolio
    </h1>
   </div>

   {/* Project 1 */}
   <div className="flex w-full flex-row justify-around mb-20">
    <div>
     <img
      className="rounded-lg border-2 border-btn_border max-w-3xl"
      src="./images/DeadEyeTintHero.png"
      alt="DeadEyeTint Logo"
     />
    </div>

    <div className=" flex flex-col justify-center items-center px-8  my-5 lg:flex-row lg:my-44  lg:px-14  ">
     <div className="flex flex-col justify-center p-5 ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Dead Eye Tint</h5>
      <p className="mb-3 font-normal text-gray-300"> Dead Eye Tint is a leading Window Tinting Busiess</p>
      <button className="w-60 py-2 text-sm font-medium text-center text-white bg-black border-btn_border border-2 rounded-lg">
       <a
        href="http://www.deadeyetint.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center ">
        {' '}
        Check it out
        <span>
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
        </span>
       </a>
      </button>
     </div>
    </div>
   </div>

   {/* Project 2 */}
   <div className="flex flex-row w-full justify-around mb-20">
    <div className=" flex flex-col justify-center items-center px-8 my-5 lg:my-44 lg:justify-between  lg:px-14  ">
     <div className="flex flex-col justify-center p-5 ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">All County Mobile Tint</h5>
      <p className="mb-3 font-normal text-gray-300"> This site is a Mobile Tinting Business in SoCal</p>
      <button className="w-60 py-2 text-sm font-medium text-center  text-white bg-black border-btn_border border-2 rounded-lg ">
       <a
        href="http://www.allcountymobiletint.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center ">
        {' '}
        Check it out
        <span>
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
        </span>
       </a>
      </button>
     </div>
    </div>
    <div>
     <img className="rounded-lg max-w-3xl" src="./images/AllCountyLogo.png" alt="All County Mobile Tint Logo" />
    </div>
   </div>
  </div>
 );
}
