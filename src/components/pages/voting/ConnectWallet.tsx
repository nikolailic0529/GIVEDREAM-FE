import { Popover, Transition,Disclosure } from '@headlessui/react'
import { Fragment } from 'react'
import styled from "styled-components";


const StyledCollectWallet = styled.button`
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

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;


  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
  //padding: 8px 24px;
  //
  ////width: 136px;
  ////height: 40px;
  //
  //background: linear-gradient(180deg, #F95ACC 0%, rgba(113, 61, 255, 0) 100%), rgba(255, 255, 255, 0.02);
  //border: 1px solid rgba(255, 255, 255, 0.2);
  //box-shadow: 0 0 16px -4px var(--purple-color);
  //backdrop-filter: blur(12px);
  ///* Note: backdrop-filter has minimal browser support */
  //
  //border-radius: 80px;
  //
  ///* Inside auto layout */
  //
  //flex: none;
  //order: 1;
  //flex-grow: 0;
  
  //background: linear-gradient(180deg, #f95acc 0%, rgba(113, 61, 255, 0) 100%),
  //rgba(255, 255, 255, 0.02);
  //border: var(--table-border-color) 1px solid;
  //border-radius: 80px;
  //padding: 8px 25px;
  //outline: none; 

  //@media (max-width: 740px){
  //  width: 90%;
  //  height: 40px;
  //}
  
`



const StyledPaneElement = styled.div`
  box-sizing: border-box;
  background: radial-gradient(97.9% 46.65% at 50% 108.23%, rgba(255, 255, 255, 0.9) 0%, rgba(113, 61, 255, 0.9) 33.33%, rgba(0, 0, 0, 0) 100%), #030118;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
`


const StyledWallet = styled.a`/* item */
  box-sizing: border-box;

  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 16px;
  padding: 16px;

  :hover {
    box-shadow: 0 0 16px -4px #713DFF;
  }

  @media (max-width: 740px){
    display: block;
  }
  
`

const solutions = [
    {
        name: 'Tonkeeper',
        href: '##',
        icon: IconOne,
    },
    {
        name: 'OpenMask',
        href: '##',
        icon: IconTwo,
    },
    {
        name: 'MyTonWallet',
        href: '##',
        icon: IconThree,
    },
    {
        name: 'Tonhub',
        href: '##',
        icon: IconThree,
    },
    {
        name: 'TonWallet',
        href: '##',
        icon: IconThree,
    },
]

export const MobileConnectWallet = ()=>{
    return (
            <Disclosure as="div" className="w-full">
                {({ open }) => (
                    <>
                        <div className="mt-12 w-full">
                            <Disclosure.Button as={StyledCollectWallet} className="w-full">
                                Connect wallet
                            </Disclosure.Button>
                        </div>
                        <Disclosure.Panel className="mt-2 space-y-2">
                            <div className="relative grid gap-8 p-7 grid-cols-2">
                                {solutions.map((item) => (
                                    <StyledWallet
                                        key={item.name}
                                        href={item.href}
                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12 mb-2">
                                            <item.icon aria-hidden="true" />
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-sm font-medium">
                                                {item.name}
                                            </p>
                                        </div>
                                    </StyledWallet>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
    )
}

export function ConnectWallet() {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <div className="flex justify-center">

                        <Popover.Button as={StyledCollectWallet}
                                        className={`
                ${open ? 'w-full' : 'w-full text-opacity-90'}`}
                        >
                            <span>Connect wallet</span>
                        </Popover.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel style={{left: '14rem'}} className="relative z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 max-w-l">
                            <StyledPaneElement className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-8 p-7 lg:grid-cols-2">
                                    {solutions.map((item) => (
                                        <StyledWallet
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                                <item.icon width={32} height={32} aria-hidden="true" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">
                                                    {item.name}
                                                </p>
                                            </div>
                                        </StyledWallet>
                                    ))}
                                </div>
                            </StyledPaneElement>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>

    )
}

function IconOne({width=32, height=32}: {width?: string|number, height?: string|number}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5" />
            <path
                d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
                stroke="#FB923C"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
                stroke="#FDBA74"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
                stroke="#FDBA74"
                strokeWidth="2"
            />
        </svg>
    )
}

function IconTwo({width=32, height=32}: {width?: string|number, height?: string|number}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5" />
            <path
                d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
                stroke="#FB923C"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
                stroke="#FDBA74"
                strokeWidth="2"
            />
        </svg>
    )
}

function IconThree({width=32, height=32}: {width?: string|number, height?: string|number}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5" />
            <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
            <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
            <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
            <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
            <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
            <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
        </svg>
    )
}
