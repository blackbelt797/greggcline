import IgIcon from './icons/instagram';
import XLogo from './icons/xLogo';
import LinkedinLogo from './icons/linkeninLogo';

export default function Footer() {
 const currentYear = new Date().getFullYear();

 return (
  <footer className="bg-white dark:bg-primary_1">
   <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="flex flex-col gap-4 justify-center">
     <ul className="text-white flex flex-row justify-around w-full">
      <li>
       <IgIcon />
      </li>
      <li>
       <LinkedinLogo />
      </li>
      <li>
       <XLogo />
      </li>
     </ul>
     <div className="flex w-100% justify-center items-center"></div>
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
