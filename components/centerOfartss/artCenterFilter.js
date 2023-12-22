import React from 'react'
//import styles from '@styles/artcenterFilter.module.css'
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ArtCenterFilter({artcenterartworks}) {
  return (
    <div className='wrapperArtCenterFilter mt-5 mx-5'>
      <div className="navbarArtcenterFilter md:flex justify-between">
        <div className="navbarArtcenterFilter1 md:flex justify-between items-center w-2/5">
            <span className='border-1 flex items-center justify-evenly border-gray-400 rounded-full px-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer'><LuSettings2 /> <span className='break-keep mx-1'>All Filter</span></span>
            {/* rarity */}
            <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center border-1 border-gray-400 gap-x-1.5 rounded-full bg-white px-3 text-sm font-semibold text-gray-900   hover:bg-gray-50">
                    Rarity
                    <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <span className={classNames(
                            active ? 'bg-gray-100 text-gray-900 flex items-center' : 'text-gray-700',
                            'px-4 py-2 text-sm flex items-center'
                          )}>
                            <input type='checkbox' id='rarity' className='text-xl font-semibold'/>
                          <label
                            for='rarity'
                            className='text-base font-bold mx-2'
                          >
                            Unique
                          </label>
                          </span>
                          
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                           <span className={classNames(
                            active ? 'bg-gray-100 text-gray-900 flex items-center' : 'text-gray-700',
                            'px-4 py-2 text-sm flex items-center'
                          )}>
                            <input type='checkbox' id='rarity' className='text-base'/>
                          <label
                            for='rarity'
                            className='text-base font-bold mx-2'
                          >
                            Limited Edition
                          </label>
                          </span>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                           <span className={classNames(
                            active ? 'bg-gray-100 text-gray-900 flex items-center' : 'text-gray-700',
                            'px-4 py-2 text-sm flex items-center'
                          )}>
                            <input type='checkbox' id='rarity' className='text-base'/>
                          <label
                            for='rarity'
                            className='text-base font-bold mx-2'
                          >
                            Open Edition
                          </label>
                          </span>
                        )}
                      </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                             <span className={classNames(
                              active ? 'bg-gray-100 text-gray-900 flex items-center' : 'text-gray-700',
                              'px-4 py-2 text-sm flex items-center'
                            )}>
                              <input type='checkbox' id='rarity' className='text-base'/>
                            <label
                              for='rarity'
                              className='text-base font-bold mx-2'
                            >
                              Unknown Edition
                            </label>
                            </span>
                          )}
                        </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                        <div className='flex justify-end px-2 mt-2'><button className='text-black bg-white border-1 rounded-full px-2 mx-2'>clear</button> <button type='submit' className='text-white bg-black rounded-full px-2'>submit</button></div>
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
            </Menu>
            {/* Medium */}
            <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center border-1 border-gray-400 gap-x-1.5 rounded-full bg-white px-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                    Medium
                    <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <span className={classNames(
                            active ? 'bg-gray-100 text-gray-900 flex items-center' : 'text-gray-700',
                            'px-4 py-2 text-sm flex items-center'
                          )}>
                            <input type='checkbox' id='rarity' className='text-xl font-semibold'/>
                          <label
                            for='rarity'
                            className='text-base font-bold mx-2'
                          >
                            Painting
                          </label>
                          </span>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                         <span className={classNames(
                          active ? 'bg-gray-100 text-gray-900 flex items-center' : 'text-gray-700',
                          'px-4 py-2 text-sm flex items-center'
                        )}>
                          <input type='checkbox' id='rarity' className='text-xl font-semibold'/>
                        <label
                          for='rarity'
                          className='text-base font-bold mx-2'
                        >
                          Photography
                        </label>
                        </span>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                         <span className={classNames(
                          active ? 'bg-gray-100 text-gray-900 flex items-center' : 'text-gray-700',
                          'px-4 py-2 text-sm flex items-center'
                        )}>
                          <input type='checkbox' id='rarity' className='text-xl font-semibold'/>
                        <label
                          for='rarity'
                          className='text-base font-bold mx-2'
                        >
                          Sculpture
                        </label>
                        </span>
                        )}
                      </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <span className={classNames(
                              active ? 'bg-gray-100 text-gray-900 flex items-center' : 'text-gray-700',
                              'px-4 py-2 text-sm flex items-center'
                            )}>
                              <input type='checkbox' id='rarity' className='text-xl font-semibold'/>
                            <label
                              for='rarity'
                              className='text-base font-bold mx-2'
                            >
                              Design
                            </label>
                            </span>
                          )}
                        </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
            </Menu>
            {/* price range */}
            <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center border-1 border-gray-400 gap-x-1.5 rounded-full bg-white px-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                    Price range
                    <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm'
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
            </Menu>
        {/* <p className="artworkLength">{artcenterartworks.length} Artworks:</p> */}
        </div>
        
        <div className="artcenterAccordion flex items-center"><span><HiOutlineArrowsUpDown /></span><span>Sort: Recommended</span></div>
      </div>
    </div>
  )
}

export default ArtCenterFilter



