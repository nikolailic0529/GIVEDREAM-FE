import styled from "styled-components"
import {Tab} from '@headlessui/react'
import React from "react";
import {StyledCard} from "@/src/components/features/Card";
import {Link} from "@/src/components/common/Link";
import {BsArrowUpRight} from "react-icons/bs";
import ContainerDropdown from "@/src/components/features/ContainerDropdown";
import LineChart from "@/src/components/charts/LineChart";
import Header from "@/src/components/pages/voting/Header";
import Footer from "@/src/components/common/Footer";
import {AiFillCaretDown, AiFillInfoCircle} from "react-icons/ai";

const StyledLoading = styled.div`
  width: 100%;
  height: 8px;
  box-shadow: 0 0 9px var(--pink-color);
  border-radius: 8px;
`

const StyledInner = styled.div`
  width: 91.70%;
  height: 100%;
  background-color: var(--pink-color);
  box-shadow: 0 0 16px -4px #713dff;
  border-radius: 8px;
`

const StyledTabItem = styled.div`
  min-width: 160px;
  outline: none;

  &.active {

    color: var(--purple-color);
    border-bottom: 2px solid;
    border-bottom-color: var(--purple-color);
  }
`

const StyledBadge = styled.div`
  /* voting status */


  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;

  width: 72px;
  height: 26px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 80px;

  &.open {
    background-color: var(--purple-color);
  }
`

const StyledSmallText = styled.div`
  /* Small text */

  font-size: 13px;
  line-height: 18px;
  /* identical to box height, or 138% */

  /* Light Periwinkle */

  &.secondary-text {
    color: var(--secondary-text-color);

  }
`


const StyledSecondaryText = styled.div`
  /* Small text */

  font-size: 16px;
  line-height: 24px;
  color: var(--secondary-text-color);

`

const StyledText = styled.div`
  font-size: 38px;
  line-height: 48px;
`

const StyledLink = styled(Link)`
  :hover {
    color: var(--purple-color)
  }
`

const StyledInput = styled.input`
  width: 100%;
  margin-top: 2.5px;
  background-color: transparent;
  appearance: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  ::placeholder {

    background: linear-gradient(180deg, #FFFFFF 0%, #CBD5D8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    opacity: 0.2;
  }

`

const StyledChartCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 10px;
`

const StyledFlyBird = styled.img`
  position: absolute;

  top: -8%;
  right: 10%;
  @media (max-width: 740px) {
    position: relative;
    width: 175px;
  }

  &.fly-bird-hidden {
    display: none;
  }
`

const StyleVoteButton = styled.button`

  padding: 8px 24px;

  width: 120px;
  height: 40px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 80px;

  /* Inside auto layout */

  &.checked {
    background: #FFFFFF;
    color: #000000;
  }
`

const StyledHeading = styled.div`
  align-items: center;
`

const cryptoCurves = [
    {value: "UniSwap", title: "UniSwap"},
    {value: "dYdX", title: "dYdX"},
]


const dayChoices = [
    {
        value: 28,
        title: "Last 28 days",
    },
    {
        value: 21,
        title: "Last 21 days",
    },
    {
        value: 14,
        title: "Last 14 days",
    },
    {
        value: 7,
        title: "Last 7 days",
    },
];


const Voting2 = () => {
    const [cakes, setCakes] = React.useState<string[]>([])

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        let updatedList = [...cakes];
        if (event.target.checked) {
            updatedList = [...cakes, event.target.value];
        } else {
            updatedList.splice(cakes.indexOf(event.target.value), 1);
        }
        setCakes(updatedList);
    };

    return (
        <div>

            <Header/>
            <div className="pt-24">
                <StyledHeading className="container flex justify-between">
                    <h2>
                        dApp
                    </h2>
                </StyledHeading>
                <Tab.Group defaultIndex={0}>
                    <div className="mt-10 mb-4 p-0 border-b border-gray-200 dark:border-gray-700">
                        <div className="container ">
                            <Tab.List
                                className="w-full flex -mb-px text-sm font-medium text-center overflow-x-scroll cursor-pointer scroll-hide">
                                <Tab as={React.Fragment}>
                                    {({selected}) => (
                                        <StyledTabItem
                                            className={`p-4 inline-block hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300  ${selected ? 'active' : ''}`}>
                                            Voting
                                        </StyledTabItem>
                                    )}
                                </Tab>
                            </Tab.List>
                        </div>
                    </div>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="container">
                                <div className="pt-12">
                                    <StyledBadge className=" mb-6 open">Open</StyledBadge>
                                    <h1>
                                        Proposal of TON Tokenomics <img style={{display: 'inline'}}
                                                                        src="/images/cirle-bird.png" width={90}
                                                                        height={90} alt=""/>
                                    </h1>
                                    <div className="grid lg:grid-cols-5 md:grid-cols-1 mt-6">
                                        <div className="mr-12">
                                            <div className="mb-5">
                                                <StyledSmallText className="secondary-text">
                                                    Start date
                                                </StyledSmallText>
                                                <StyledSmallText>
                                                    Mar 20, 2023 13:00 UTC
                                                </StyledSmallText>
                                            </div>
                                            <div className="mt-5">
                                                <StyledSmallText className="secondary-text">
                                                    End date
                                                </StyledSmallText>
                                                <StyledSmallText>

                                                    Mar 30, 2023 13:00 UTC
                                                </StyledSmallText>
                                            </div>
                                        </div>
                                        <div className="mr-4">
                                            <div className="mb-5">
                                                <StyledSmallText className="secondary-text">
                                                    Snapshot
                                                </StyledSmallText>

                                                <StyledSmallText>
                                                    Mar 21, 2023 00:00 UTC
                                                </StyledSmallText>
                                            </div>
                                            <div className="mt-5">

                                                <StyledSmallText className="secondary-text">
                                                    Contract
                                                </StyledSmallText>

                                                <StyledSmallText>
                                                    <StyledLink className="flex gap-1" href="#">
                                                    <span>
                                                    EQCVy5bE...2c5-i-GS

                                                    </span>
                                                        <span className="text-white">
                                                    <BsArrowUpRight/>

                                                    </span>

                                                    </StyledLink>
                                                </StyledSmallText>
                                            </div>
                                        </div>
                                        <div className="mr-4">
                                            <div className="flex justify-start mb-5">
                                                <div className="mr-4">

                                                    <StyledSmallText className="secondary-text">
                                                        Dex
                                                    </StyledSmallText>
                                                    <ContainerDropdown choices={cryptoCurves}/>
                                                </div>
                                                <div className="ml-4">

                                                    <StyledSmallText className="secondary-text">
                                                        Liquidity
                                                    </StyledSmallText>
                                                    <ContainerDropdown choices={cryptoCurves}/>

                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <StyledSmallText className="secondary-text">
                                                    Smart contract address
                                                </StyledSmallText>
                                                <StyledSmallText>
                                                    <StyledInput
                                                        className="leading-tight focus:outline-none"
                                                        type="text" placeholder="Jane Doe" aria-label="Enter address"/>
                                                    {/*<input type="email" placeholder="Enter address"/>*/}
                                                </StyledSmallText>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-24">
                                    <StyledCard>
                                        <div className="flex flex-col">
                                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 scroll-m-0">
                                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                                    <div className="">
                                                        <table
                                                            className="table-auto min-w-full text-left text-sm font-light p-0">
                                                            <tbody>

                                                            {
                                                                Array.from(['0', '1', '2', '3', '4', '5']).map((item, ) => (
                                                                    <tr className="border-b dark:border-neutral-500"
                                                                        key={item}>

                                                                        <td className="whitespace-nowrap px-6 py-4">
                                                                            <input id="default-checkbox" type="checkbox"

                                                                                   value={item}
                                                                                   onChange={(e)=>handleCheck(e)}
                                                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                                                                        </td>
                                                                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                                                        <td className="whitespace-nowrap px-6 py-4">
                                                                            <div
                                                                                className="flex items-center justify-between mb-2">
                                                                                <p>
                                                                                    Yes <span
                                                                                    className="text-secondary-text">91.75%</span>
                                                                                </p>

                                                                                <div className="flex text-secondary-text">
                                                                                    1.29K votes 1.67M TON
                                                                                </div>
                                                                            </div>
                                                                            <StyledLoading>
                                                                                <StyledInner/>
                                                                            </StyledLoading>
                                                                        </td>


                                                                    </tr>
                                                                ))
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-5 flex justify-center'>

                                            <StyleVoteButton className={cakes.length ? 'checked' : ''}>
                                                Vote
                                            </StyleVoteButton>
                                        </div>
                                    </StyledCard>
                                </div>

                                <div className="mt-12">
                                    <StyledCard className="" key={1}>
                                            <div className="">
                                                <div className="flex items-center justify-between flex-wrap">
                                                    <div className="flex flex-col">
                                                        <StyledBadge className="!bg-red-600 !flex-row !justify-start !w-20">
                                                            <img className="-ml-2" src="/images/fire.png" alt="" width={20}/>
                                                            <p className="ml-1">Hot</p>
                                                        </StyledBadge>
                                                        <StyledBadge className="!bg-blue-700 !flex-row !justify-start !w-32 mt-1">
                                                            <img className="-ml-2" src="/images/shuttle.png" alt="" width={20}/>
                                                            <p className="ml-1">Level Up</p>
                                                        </StyledBadge>
                                                    </div>
                                                    
                                                    
                                                    <div className="flex flex-row">
                                                        <StyledBadge className="!bg-transparant !flex-row !justify-start !w-40">
                                                            <img className="-ml-2" src="/images/nmx.png" alt="" width={20}/>
                                                            <img className="-ml-2" src="/images/usdt.png" alt="" width={20}/>
                                                            <p className="ml-1">NMX-USDT</p>
                                                        </StyledBadge>
                                                    
                                                    </div>

                                                    


                                                    <div className="flex flex-col">
                                                        <p className="text-secondary-text">
                                                            Earned
                                                        </p>
                                                        <h5>0 NMX</h5>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            ARP
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>

                                                        <h5>23.52%</h5>

                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            APY
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>
                                                        <h5>26.50%</h5>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            Liquidity
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>

                                                        <h5>$1,984,829</h5>

                                                    </div>

                                                    <div className="flex flex-row text-blue-600 items-center">
                                                   
                                                        <h5 className="mr-1">Details</h5>
                                                        <AiFillCaretDown/>
                                                        
                                                    </div>

                                                </div>

                                             
                                            </div>
                                                            
                                            <hr className="mt-4"></hr>
                                            <div className="mt-4">
                                                <div className="flex items-center justify-between flex-wrap">
                                                    <div className="flex flex-col">
                                                        <StyledBadge className="!bg-red-600 !flex-row !justify-start !w-20">
                                                            <img className="-ml-2" src="/images/fire.png" alt="" width={20}/>
                                                            <p className="ml-1">Hot</p>
                                                        </StyledBadge>
                                                        <StyledBadge className="!bg-blue-700 !flex-row !justify-start !w-32 mt-1">
                                                            <img className="-ml-2" src="/images/shuttle.png" alt="" width={20}/>
                                                            <p className="ml-1">Level Up</p>
                                                        </StyledBadge>
                                                    </div>
                                                    
                                                    <div className="flex flex-row">
                                                        <StyledBadge className="!bg-transparant !flex-row !justify-start !w-40">
                                                            <img className="-ml-2" src="/images/nmx.png" alt="" width={20}/>
                                                            <img className="-ml-2" src="/images/busd.png" alt="" width={20}/>
                                                            <p className="ml-1">NMX-BUSD</p>
                                                        </StyledBadge>
                                                    
                                                    </div>

                                                    


                                                    <div className="flex flex-col">
                                                        <p className="text-secondary-text">
                                                            Earned
                                                        </p>
                                                        <h5>0 NMX</h5>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            ARP
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>

                                                        <h5>23.52%</h5>

                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            APY
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>

                                                        <h5>26.50%</h5>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            Liquidity
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>

                                                        <h5>$1,984,829</h5>

                                                    </div>

                                                    <div className="flex flex-row text-blue-600 items-center">
                                                   
                                                        <h5 className="mr-1">Details</h5>
                                                        <AiFillCaretDown/>
                                                        
                                                    </div>

                                                </div>

                                             
                                            </div>
                                            
                                            <hr className="mt-4"></hr>
                                            <div className="mt-4">
                                                <div className="flex items-center justify-between flex-wrap">
                                                    <div className="flex flex-col">
                                                        <StyledBadge className="!bg-red-600 !flex-row !justify-start !w-20">
                                                            <img className="-ml-2" src="/images/fire.png" alt="" width={20}/>
                                                            <p className="ml-1">Hot</p>
                                                        </StyledBadge>
                                                        <StyledBadge className="!bg-blue-700 !flex-row !justify-start !w-32 mt-1">
                                                            <img className="-ml-2" src="/images/shuttle.png" alt="" width={20}/>
                                                            <p className="ml-1">Level Up</p>
                                                        </StyledBadge>
                                                    </div>
                                                    
                                                    <div className="flex flex-row">
                                                        <StyledBadge className="!bg-transparant !flex-row !justify-start !w-40">
                                                            <img className="-ml-2" src="/images/nmx.png" alt="" width={20}/>
                                                            <img className="-ml-2" src="/images/bnb.png" alt="" width={20}/>
                                                            <p className="ml-1">NMX-BNB</p>
                                                        </StyledBadge>
                                                    
                                                    </div>

                                                    


                                                    <div className="flex flex-col">
                                                        <p className="text-secondary-text">
                                                            Earned
                                                        </p>
                                                        <h5>0 NMX</h5>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            ARP
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>

                                                        <h5>23.52%</h5>

                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            APY
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>

                                                        <h5>26.50%</h5>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            Liquidity
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>
                                                        <h5>$1,984,829</h5>

                                                    </div>

                                                    <div className="flex flex-row text-blue-600 items-center">
                                                   
                                                        <h5 className="mr-1">Details</h5>
                                                        <AiFillCaretDown/>
                                                        
                                                    </div>

                                                </div>

                                             
                                            </div>
                                            
                                            <hr className="mt-4"></hr>
                                            <div className="mt-4">
                                                <div className="flex items-center justify-between flex-wrap">
                                                    <div className="flex flex-col">
                                                        <StyledBadge className="!bg-red-600 !flex-row !justify-start !w-20">
                                                            <img className="-ml-2" src="/images/fire.png" alt="" width={20}/>
                                                            <p className="ml-1">Hot</p>
                                                        </StyledBadge>
                                                        <StyledBadge className="!bg-blue-700 !flex-row !justify-start !w-32 mt-1">
                                                            <img className="-ml-2" src="/images/shuttle.png" alt="" width={20}/>
                                                            <p className="ml-1">Level Up</p>
                                                        </StyledBadge>
                                                    </div>
                                                    
                                                    
                                                    <div className="flex flex-row">
                                                        <StyledBadge className="!bg-transparant !flex-row !justify-start !w-40">
                                                            <img className="-ml-2" src="/images/nmx.png" alt="" width={20}/>
                                                            <img className="-ml-2" src="/images/usdc.png" alt="" width={20}/>
                                                            <p className="ml-1">NMX-USDC</p>
                                                        </StyledBadge>
                                                    
                                                    </div>

                                                    


                                                    <div className="flex flex-col">
                                                        <p className="text-secondary-text">
                                                            Earned
                                                        </p>
                                                        <h5>0 NMX</h5>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            ARP
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>
                                                        <h5>23.52%</h5>

                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            APY
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>

                                                        <h5>26.50%</h5>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            Liquidity
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>

                                                        <h5>$1,984,829</h5>

                                                    </div>

                                                    <div className="flex flex-row text-blue-600 items-center">
                                                   
                                                        <h5 className="mr-1">Details</h5>
                                                        <AiFillCaretDown/>
                                                        
                                                    </div>

                                                </div>

                                             
                                            </div>
                                                            
                                            <hr className="mt-4"></hr>

                                            <div className="mt-4">
                                                <div className="flex items-center justify-between flex-wrap">
                                                    <div className="flex flex-col">
                                                        <StyledBadge className="!bg-transparant !flex-row !justify-start !w-20">
                                                            {/* <img className="-ml-2" src="/images/fire.png" alt="" width={20}/> */}
                                                            <p className="ml-1">Active</p>
                                                        </StyledBadge>
                                                        {/* <StyledBadge className="!bg-blue-700 !flex-row !justify-start !w-32 mt-1">
                                                            <img className="-ml-2" src="/images/shuttle.png" alt="" width={20}/>
                                                            <p className="ml-1">Level Up</p>
                                                        </StyledBadge> */}
                                                    </div>
                                                    
                                                    
                                                    <div className="flex flex-row ml-11">
                                                        <StyledBadge className="!bg-transparant !flex-row !justify-start !w-40">
                                                            <img className="-ml-2" src="/images/usdc.png" alt="" width={20}/>
                                                            <img className="-ml-2" src="/images/usdt.png" alt="" width={20}/>
                                                            <p className="ml-1">USDC-USDT</p>
                                                            
                                                            {/* <p className="">CL</p> */}
                                                        </StyledBadge>

                                                        
                                                    </div>

                                                    


                                                    <div className="flex flex-col">
                                                        <p className="text-secondary-text">
                                                            Earned
                                                        </p>
                                                        <h5>0 NMX</h5>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            ARP
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>
                                                        <h5>23.52%</h5>

                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            APY
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>

                                                        <h5>26.50%</h5>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row items-center">
                                                        <p className="text-secondary-text mr-1">
                                                            Liquidity
                                                        </p>
                                                        <AiFillInfoCircle/>
                                                        </div>

                                                        <h5>$1,984,829</h5>

                                                    </div>

                                                    <div className="flex flex-row text-blue-600 items-center">
                                                   
                                                        <h5 className="mr-1">Details</h5>
                                                        <AiFillCaretDown/>
                                                        
                                                    </div>

                                                </div>

                                             
                                            </div>
                                                            
                                           
                        
                                    </StyledCard>
                                </div>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>

            </div>

            <Footer/>
        </div>
    )
}

export default Voting2