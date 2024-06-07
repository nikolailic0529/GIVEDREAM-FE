import React, {useState} from "react"
import styled from "styled-components";
import {Dialog, Transition, Listbox} from "@headlessui/react";
import {
    AiFillCalendar,
    AiOutlineRise,
    AiFillCaretDown,
    AiOutlineCheck,
} from "react-icons/ai";
import {CgMenu, CgClose} from "react-icons/cg";
import {TbLanguage} from "react-icons/tb";
import {Link} from "@/src/components/common/Link";
import LanguageMenu from "@/src/components/features/LanguageMenu";


const StyledHeader = styled.header`
  //height: 72px;
  background-color: transparent;
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(20px);
  //padding: 16px 32px;
  z-index: 2;
`

const StyledLink = styled(Link)`
  //box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 30px;


  background: linear-gradient(180deg, #F95ACC 0%, rgba(113, 61, 255, 0) 100%), rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 16px -4px var(--purple-color);
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 80px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;


  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  
`


const StyledDialogPanel = styled(Dialog.Panel)`
  /* Dark Night */
  background: var(--bg-color);
  color: var(--text-color)
`

const languages = ["English", "French"];

const navItems = [
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Smart-contract",
        path: "/smart-contract",
    },
    {
        name: "Audit",
        path: "/audit",
    },
    {
        name: "Instructions",
        path:"/Instructions",
    },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selected, setSelected] = useState(languages[0]);
    return (
        <StyledHeader>
            <div className="mx-auto p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="text-white text-xl hover:opacity-50 ease-linear duration-150">
                            GIVEDREAM
                        </Link>

                        <nav className="lg:block hidden">
                            <ul className="flex items-center gap-6">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.path}
                                            className="text-white hover:opacity-50 cursor-pointer ease-linear duration-150"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <div className="hidden lg:flex items-center gap-8">
                            <div>
                                <Listbox value={selected} onChange={setSelected}>
                                    <div className="relative mt-1">
                                        <Listbox.Button
                                            className="relative w-full cursor-default pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            {/*<span className="block truncate">{selected}</span>*/}
                                            <div className="flex items-center gap-2 cursor-pointer  duration-150">
                                                <TbLanguage className="text-xl"/>
                                                {selected}
                                                <AiFillCaretDown/>
                                            </div>
                                        </Listbox.Button>
                                        <Transition
                                            as={React.Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options
                                                className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {languages.map((lang, langIndex) => (
                                                    <Listbox.Option
                                                        key={langIndex}
                                                        className={({active}) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                active
                                                                    ? "bg-amber-100 text-amber-900"
                                                                    : "text-gray-900"
                                                            }`
                                                        }
                                                        value={lang}
                                                    >
                                                        {({selected}) => (
                                                            <>
                                <span
                                    className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                    }`}
                                >
                                  {lang}
                                </span>
                                                                {selected ? (
                                                                    <span
                                                                        className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <AiOutlineCheck
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                  </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                            </div>

                            <StyledLink href={'/personal-info'} className="hover:opacity-50 ease-linear duration-150">
                                Personal Information
                            </StyledLink>
                        </div>

                        <div className="lg:hidden block text-white text-xl">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <CgMenu className="h-6 w-6"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10"/>
                <StyledDialogPanel
                    className="fixed inset-y-0 right-0 z-10 w-full p-6 overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="text-white text-xl hover:opacity-50 ease-linear duration-150 -m-1.5 p-1.5"
                        >
                            <span className="sr-only">Your Company</span>
                            GIVEDREAM
                        </Link>
                        <button
                            type="button"
                            className="rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <CgClose className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-8">
                        <LanguageMenu/>
                    </div>
                    <div className="mt-12 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navItems.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.path}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  "
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 w-full">
                        <StyledLink href={'/personal-info'}>
                            Personal Information
                        </StyledLink>
                    </div>
                    <div className="mt-4 w-full">
                    </div>
                </StyledDialogPanel>
            </Dialog>
        </StyledHeader>
    )
}
export default Header