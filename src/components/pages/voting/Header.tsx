import React, {useState} from "react"
import styled from "styled-components";
import {Dialog} from "@headlessui/react";
import {
    AiFillCalendar,
    AiOutlineRise,
} from "react-icons/ai";
import {CgMenu, CgClose} from "react-icons/cg";
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


const navItems = [
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Smart-contact",
        path: "/smart-contract",
    },
    {
        name: "Audit",
        path: "/audit",
    },
    {
        name: "Instructions",
        dropdown: true,
    },
];

const StyledDialogPanel = styled(Dialog.Panel)`
  /* Dark Night */
  background: var(--bg-color);
  color: var(--text-color);
  //padding: 16px 32px;
  
`


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <StyledHeader>
            <div className="mx-auto p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="hover:opacity-50 ease-linear duration-150">
                            <img src='/images/logo.svg' alt=""/>
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
                            <LanguageMenu/>
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
                    className="fixed inset-y-0 right-0 z-10 w-full p-6 overflow-y-auto sm:max-w-sm ">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="hover:opacity-50 ease-linear duration-150"
                        >
                            <span className="sr-only">Your Company</span>
                            <img src="/images/logo.svg" alt="" />
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

                    <div className="mt-12 flex items-center justify-around gap-8">
                        <LanguageMenu/>
                    </div>
                    <div className="mt-12 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navItems.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.path}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 "
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </StyledDialogPanel>
            </Dialog>
        </StyledHeader>
    )
}
export default Header