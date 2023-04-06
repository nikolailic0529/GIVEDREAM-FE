import styled from "styled-components"
import {useState, Fragment} from "react"
import { AiFillCaretDown } from "react-icons/ai";
import { Transition, Menu } from "@headlessui/react";

const StyledItems = styled(Menu.Items)`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  color: var(--text-color);
  background: #08061D;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 16px -4px #713DFF;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  z-index: 2;
`

const ContainerDropdown = ({choices}: {choices: {value: string|number, title: string}[]}) => {
    const firstElement = choices.length > 0?choices[0]:{title: '', value: ''}
    const [selected, setSelected] = useState(firstElement);
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center bg-transparent hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <div className="flex items-center gap-1">
                        <span>{selected.title}</span>

                        <AiFillCaretDown />
                    </div>
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
                <StyledItems className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 w-full">
                        {choices.map((day, i) => (
                            <Menu.Item  key={i}>
                                {({ active }) => (
                                    <button
                                        onClick={() => setSelected(day)}
                                        className={`${
                                            active ? "bg-violet-500" : ''
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {day.title}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </StyledItems>
            </Transition>
        </Menu>
    );
};

export default ContainerDropdown