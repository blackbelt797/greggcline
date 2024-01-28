export default function Footer() {
 const currentYear = new Date().getFullYear();

 return (
  <footer className="bg-white dark:bg-gray-900">
   <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="flex flex-col gap-4 justify-center">
     <div className="mb-6 md:mb-0">
      <a href="https://flowbite.com/" className="flex items-center justify-center ">
       <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Add Socials</span>
      </a>
     </div>
     <div className="flex w-100% justify-center items-center">
      <div>
       <ul className="flex flex-row justify-between w-100% text-center text-gray-500 dark:text-gray-400 font-medium ">
        <li className="mx-2">
         <p>Cash</p>
        </li>
        <li className="mx-2">
         <p>Zelle</p>
        </li>
        <li className="mx-2">
         <p>Apple Pay</p>
        </li>
        <li className="mx-2">
         <p>Cash App</p>
        </li>
       </ul>
      </div>
     </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="flex justify-center items-center w-100%">
     <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © {currentYear} Gregg Cline™. All Rights Reserved.
     </span>
    </div>
   </div>
  </footer>
 );
}
