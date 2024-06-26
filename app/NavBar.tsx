import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';

export default function NavBar() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const navigation = [
  { name: 'About' },
  { name: 'Portfolio' },
  { name: 'Blog' },
  { name: 'Contact', href: '+1(951)704-6886' },
 ];

 return (
  <div>
   <header className=" fixed flex justify-center align-bottom w-full inset-x-0 top-0 z-50 mt-4">
    <nav className="flex justify-between items-center  rounded-lg w-4/5 p-6 lg:px-8" aria-label="Global">
     <div className="relative flex rounded-xl py-1.5 pl-2 pr-44">
      <a href="{navigation.name}" className="-m-1.5 p-1.5 text-lg font-bold z-10 text-white ">
       GC
      </a>
     </div>
     <div className="flex lg:hidden">
      <button
       type="button"
       className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
       onClick={() => setMobileMenuOpen(true)}>
       <span className="sr-only">Open main menu</span>
       <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
     </div>
     <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
       <Link
        to={`#${item.name.toLowerCase().replace(' ', '-')}`}
        key={item.name}
        className="text-lg font-semibold leading-6 text-white">
        {item.name}
       </Link>
      ))}
     </div>
    </nav>

    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
     <div className="fixed inset-0 z-50" />
     <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
       <a href="{navigation.name}" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
       </a>
       <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
        <span className="sr-only">Close menu</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
       </button>
      </div>
      <div className="mt-6 flow-root">
       <div className="-my-6 divide-y text-white">
        <div className="space-y-2 py-6">
         {navigation.map((item) => (
          <Link
           to={`#${item.name.toLowerCase().replace(' ', '-')}`}
           key={item.name}
           className="-mx-3 block rounded-lg bg-black border-btn_border px-3 py-2 text-base font-semibold leading-7   hover:text-black">
           {item.name}
          </Link>
         ))}
        </div>
       </div>
      </div>
     </Dialog.Panel>
    </Dialog>
   </header>
  </div>
 );
}
