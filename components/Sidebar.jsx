import { Fragment, useState } from 'react'
import SelectBox from '@/components/SelectBox'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'Categories 1', href: '#', icon: HomeIcon, current: true },
  { name: 'Categories 1', href: '#', icon: UsersIcon, current: false },
  { name: 'Categories 1', href: '#', icon: FolderIcon, current: false },
  { name: 'Categories 1', href: '#', icon: CalendarIcon, current: false },
  { name: 'Categories 1', href: '#', icon: InboxIcon, current: false },
  { name: 'Categories 1', href: '#', icon: ChartBarIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
      <Fragment>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="/assets/images/whiteLogo.png"
                  alt="Bearplex"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                <div className="flex-1 flex justify-center px-2 pb-3">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2  rounded-md bg-transparent text-white placeholder-white focus:outline-none sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <SelectBox/>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1">
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
              <div className="flex-1 flex justify-center px-2 pb-3">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2  rounded-md bg-transparent text-white placeholder-white focus:outline-none sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <SelectBox/>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                <div>
      <select
        id="Subjects"
        name="Subjects"
        className="mt-3 mb-5 block w-full pl-3 pr-10 py-2 text-base bg-red-900 text-white border border-white focus:outline-none sm:text-sm rounded-md"
        defaultValue="Subjects"
      >
        <option>Mathematics</option>
        <option>Chemistry</option>
        <option>Physics</option>
        <option>Urdu</option>
        <option>English</option>
      </select>
    </div>
    <div>
      <select
        id="Country"
        name="Country"
        className="mt-3 mb-5 block w-full pl-3 pr-10 py-2 text-base bg-red-900 text-white border border-white focus:outline-none sm:text-sm rounded-md"
        defaultValue="Country"
      >
        <option>Canada</option>
        <option>Pakistan</option>
        <option>India</option>
        <option>Dubai</option>
      </select>
    </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    )
}

export default Sidebar
