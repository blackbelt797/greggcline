type Props = {
 id: string;
};

export default function Blog({ id }: Props) {
 return (
  <div id={id} className="flex flex-col mx-4 items-center justify-center my-24 lg:my-48">
   {/* There are two containers one is the header and the second is the 3 cards */}
   <div>
    <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl lg:leading-tight dark:text-white">
     Blog
    </h1>
   </div>
   {/* Start of the 3 card layout */}
   <div className="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap  gap-24 2xl:gap-60">
    {/* Card number 1 */}
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <img className="rounded-t-lg" src="./images/SamplePhoto1.jpg" alt="Tint Survices provided" />
     <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blog Post 1</h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Post 1</p>

      <a
       href="/#"
       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Book Appointments
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
    </div>
    {/* Card Number 2  */}
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <img className="rounded-t-lg" src="./images/SamplePhoto2.jpg" alt="Tint Survices provided" />
     <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blog Post 2</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Post 2</p>
      <a
       href="tel:+1(951)428-0225"
       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Book Appointment
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
    </div>
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <img className="rounded-t-lg" src="./images/SamplePhoto3.jpg" alt="Tint Survices provided" />

     <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Post 3</h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Post 3</p>

      <a
       href="tel:+1(951)428-0225"
       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Book Appointment
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
    </div>
   </div>
  </div>
 );
}
