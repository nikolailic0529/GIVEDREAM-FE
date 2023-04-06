import React, {useState} from "react";
import {Listbox, Menu, Transition} from "@headlessui/react";
import {TbLanguage} from "react-icons/tb";
import {AiFillCaretDown, AiOutlineCheck} from "react-icons/ai";
import styled from "styled-components";

const languages = ["English", "French"];

const StyledOptions = styled(Listbox.Options)`
  box-sizing: border-box;

  /* Auto layout */

  color: var(--text-color);
  background: #08061D;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 16px -4px #713DFF;
  border-radius: 8px;

  /* Inside auto layout */
 
`

const LanguageMenu = ()=>{
    const [selected, setSelected] = useState(languages[0]);

    return (
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
                        <StyledOptions
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {languages.map((lang, langIndex) => (
                                <Listbox.Option
                                    key={langIndex}
                                    className={({active}) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                                ? "bg-violet-500"
                                                : ""
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
                                                    className="absolute inset-y-0 left-0 flex items-center pl-3">
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
                        </StyledOptions>
                    </Transition>
                </div>
            </Listbox>
        </div>

    )
}

export default LanguageMenu