import styled from "styled-components"
import {Tab, Disclosure} from '@headlessui/react'
import React, {Fragment} from "react";
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

const StyledShowMore = styled.button`
  /* Small text */

  font-size: 13px;
  line-height: 18px;
  /* identical to box height, or 138% */

  display: flex;
  align-items: center;

  /* Light Periwinkle */

  color: var(--secondary-text-color);
  margin-top: 15px;

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
    {value: "Nomiswap", title: "Nomiswap"},
    {value: "Pancakeswap ", title: "Pancakeswap"},
]

const cryptoCurves1 = [
    {value: "Pool", title: "Pool"},
    {value: "Steaking/Farming", title: "Steaking/Farming"},
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


const Voting = () => {
    const [cakes, setCakes] = React.useState<string[]>([])
    // const [checked, setChecked] = React.useState<boolean>(false)
    const [birdHidden, setBirdHidden] = React.useState<boolean>(true)
    const [open, setOpen] = React.useState(false);

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
                    <StyledFlyBird className={birdHidden ? 'fly-bird-hidden' : ''} src="/images/bird.png"/>
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
                                <Tab as={React.Fragment}>
                                    {
                                        ({selected}) => {
                                            setBirdHidden(!selected)
                                            return (
                                                <StyledTabItem
                                                    className={`p-4 inline-block hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${selected ? 'active' : ''}`}>
                                                    System statistics
                                                </StyledTabItem>
                                            )
                                        }
                                    }
                                </Tab>
                                {/* <Tab as={React.Fragment}>
                                    {({selected}) => (
                                        <StyledTabItem
                                            className={`p-4 inline-block hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${selected ? 'active' : ''}`}>
                                            Voting - 2
                                        </StyledTabItem>
                                    )}
                                </Tab> */}
                            </Tab.List>
                        </div>
                    </div>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className='container'>
                                <div className="pt-12">
                                    <StyledBadge className="mb-6">Ended</StyledBadge>
                                    <h2>
                                        Decentralized Autonomous Organization DREAM on the TON blockchain
                                        {/* <img style={{display: 'inline'}}
                                                                        src="/images/cirle-bird.png" width={90}
                                                                        height={90} alt=""/> */}
                                    </h2>

                                    {/* <div className="flex items-center">
                                    <h1 className="text-2xl mt-4 sm:mt-0 sm:text-3xl md:text-6xl lg:text-6xl">Proposal of TON Tokenomics</h1>
                                    <img src="/images/cirle-bird.png" style={{display: 'inline'}} alt="Large Image" className="w-24 h-24 sm:w-auto sm:h-auto sm:max-w-xs md:max-w-full md:mr-4"/>
                                    </div> */}
                                    <div className="grid lg:grid-cols-5 md:grid-cols-1 mt-6">
                                        <div className="mt-2 mb-2 mr-12">
                                            <div className="mb-2">
                                                <StyledSmallText className="secondary-text">
                                                    Start date
                                                </StyledSmallText>
                                                <StyledSmallText>
                                                    Mar 20, 2023 13:00 UTC
                                                </StyledSmallText>
                                            </div>
                                            <div className="mt-2">
                                                <StyledSmallText className="secondary-text">
                                                    End date
                                                </StyledSmallText>
                                                <StyledSmallText>

                                                    Mar 30, 2023 13:00 UTC
                                                </StyledSmallText>
                                            </div>
                                        </div>
                                        <div className="sm:mt-2 sm:mb-2 mr-4">
                                            <div className="mb-2">
                                                <StyledSmallText className="secondary-text">
                                                    Snapshot
                                                </StyledSmallText>

                                                <StyledSmallText>
                                                    Mar 21, 2023 00:00 UTC
                                                </StyledSmallText>
                                            </div>
                                            <div className="mt-2">

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
                                        <div className="mt-2 mr-4">
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
                                        
                                        {!open && (
                                            <p className="indent-5">
                                            DAO Dream Tokenomics is designed to last for years to come
                                            </p>
                                         )}

                                    <Disclosure>
                                    {({ open }) => (
                                    <>
                                        {open && (
                                        <p className="indent-5">
                                            DAO Dream Tokenomics is designed to last for years to come, a
                                            total of 21 billion jettons and 1 thousand NFTs will be issued.
                                            In circulation - 10 billion jettons. Internal Stacking - 10
                                            billion jettons per 1,000 years on a sinusoidal trajectory.
                                            Airdrop and presale - 1 billion jettons . NFTs will be sold over
                                            10 rounds, each subsequent round will be 10 times the price of
                                            the previous one, the value will rise until it reaches
                                            1,000,000,000 tonnes for 1 NFT
                                        </p>
                                        )}

                                        <Disclosure.Button as={StyledShowMore} onClick={() => setOpen(!open)}>
                                        {open ? "Less" : "Show more"}
                                        </Disclosure.Button>
                                    
                                    {/* 
                                    <Disclosure.Panel>
                                    <p className="indent-5">
                                        DAO Dream Tokenomics is designed to last for years to come, a
                                        total of 21 billion jettons and 1 thousand NFTs will be issued.
                                        In circulation - 10 billion jettons. Internal Stacking - 10
                                        billion jettons per 1,000 years on a sinusoidal trajectory.
                                        Airdrop and presale - 1 billion jettons . NFTs will be sold over
                                        10 rounds, each subsequent round will be 10 times the price of
                                        the previous one, the value will rise until it reaches
                                        1,000,000,000 tonnes for 1 NFT
                                    </p>
                                    </Disclosure.Panel> */}
                                        </>
                                        )}
                                    </Disclosure>
                                        {/* <Disclosure>
                                            {({open}) => (
                                                <> */}

                                                    {/* <p className="indent-5">
                                                        Decentralized autonomous organization DREAM on the TON
                                                        blockchain
                                                    </p> */}

                                                    {/* <p className="indent-5">
                                                        DAO Dream Tokenomics is designed to last for years to come
                                                    </p>
                                                    
                                                    <Disclosure.Panel>

                                                        <p className="indent-5">DAO Dream Tokenomics is designed to last for years to come, a total of 21 billion jettons and 1 thousand
                                                            NFTs will be issued. In circulation - 10 billion jettons.
                                                            Internal Stacking - 10 billion jettons per 1,000 years on a
                                                            sinusoidal trajectory. Airdrop and presale - 1 billion
                                                            jettons . NFTs will be sold over 10 rounds, each subsequent
                                                            round will be 10 times the price of the previous one, the
                                                            value will rise until it reaches 1,000,000,000 tonnes for 1
                                                            NFT
                                                        </p>
                                                    </Disclosure.Panel>
                                                    <Disclosure.Button as={StyledShowMore}>
                                                        {open ? "Less" : "Show more"}
                                                    </Disclosure.Button>
                                                </>
                                            )}
                                        </Disclosure> */}
                                    </StyledCard>
                                </div>
                                <div className="mt-12 grid lg:grid-cols-2 md:grid-cols-1 lg:gap-8 md:gap-4">
                                    <StyledCard className="overflow-x-auto mb-4">
                                        <Disclosure>
                                            {({open}) => (
                                                <>

                                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                        <div className="inline-block min-w-full sm:px-6 lg:px-8">
                                                            <div className="overflow-hidden">
                                                                <table
                                                                    className="min-w-full text-left text-sm font-light">
                                                                    <thead
                                                                        className="border-b font-medium dark:border-neutral-500">
                                                                    <tr>
                                                                        <th scope="col" className="px-6 py-4">
                                                                            Recent votes <span className="text-secondary-text">1,726 votes</span>
                                                                        </th>
                                                                        <th scope="col" className="px-6 py-4"/>
                                                                        <th scope="col" className="px-6 py-4"><span
                                                                            className="text-secondary-text">1.82M Dream </span>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td className="whitespace-nowrap px-6 py-4 font-medium">

                                                                            <StyledLink className="flex gap-1" href="#">
                                                    <span>
                                                    EQCVy5bE...2c5-i-GS

                                                    </span>
                                                                                <span className="text-white">
                                                    <BsArrowUpRight/>

                                                    </span>

                                                                            </StyledLink>
                                                                        </td>
                                                                        <td className="whitespace-nowrap px-6 py-4">Yes</td>
                                                                        <td className="whitespace-nowrap px-6 py-4">6.59
                                                                            Dream
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td className="whitespace-nowrap px-6 py-4 font-medium">

                                                                            <StyledLink className="flex gap-1" href="#">
                                                    <span>
                                                    EQCVy5bE...2c5-i-GS

                                                    </span>
                                                                                <span className="text-white">
                                                    <BsArrowUpRight/>

                                                    </span>

                                                                            </StyledLink>
                                                                        </td>
                                                                        <td className="whitespace-nowrap px-6 py-4">Yes</td>
                                                                        <td className="whitespace-nowrap px-6 py-4">6.59
                                                                            Dream
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b dark:border-neutral-500">
                                                                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                                            <StyledLink className="flex gap-1" href="#">
                                                    <span>
                                                    EQCVy5bE...2c5-i-GS

                                                    </span>
                                                                                <span className="text-white">
                                                    <BsArrowUpRight/>

                                                    </span>

                                                                            </StyledLink></td>
                                                                        <td className="whitespace-nowrap px-6 py-4">Yes</td>
                                                                        <td className="whitespace-nowrap px-6 py-4">6.59
                                                                            Dream
                                                                        </td>
                                                                    </tr>
                                                                    <Disclosure.Panel as={Fragment}>
                                                                        <>

                                                                            <tr className="border-b dark:border-neutral-500">
                                                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                                                    <StyledLink className="flex gap-1"
                                                                                                href="#">
                                                    <span>
                                                    EQCVy5bE...2c5-i-GS

                                                    </span>
                                                                                        <span className="text-white">
                                                    <BsArrowUpRight/>

                                                    </span>

                                                                                    </StyledLink></td>
                                                                                <td className="whitespace-nowrap px-6 py-4">
                                                                                    <StyledLink className="flex gap-1"
                                                                                                href="#">
                                                    <span>
                                                    EQCVy5bE...2c5-i-GS

                                                    </span>
                                                                                        <span className="text-white">
                                                    <BsArrowUpRight/>

                                                    </span>

                                                                                    </StyledLink></td>
                                                                                <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                                                                <td className="whitespace-nowrap px-6 py-4">6.59
                                                                                    Dream
                                                                                </td>
                                                                            </tr>
                                                                        </>
                                                                    </Disclosure.Panel>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Disclosure.Button as={StyledShowMore}>
                                                        {open ? "Less" : "Show more"}
                                                    </Disclosure.Button>
                                                </>
                                            )}

                                        </Disclosure>
                                    </StyledCard>
                                    <div className="flex flex-col justify-stretch mb-4">

                                        <StyledCard className="flex-auto  mb-2">
                                            <p className="mb-4">
                                                <span className="mr-2">Results</span>
                                                <span className="text-secondary-text">1,726 votes</span>
                                            </p>

                                            <div className="flex items-center justify-between mb-2">
                                                <p>
                                                    Yes <span className="text-secondary-text">91.75%</span>
                                                </p>

                                                <div className="flex text-secondary-text">
                                                    1.29K votes 1.67M Dream
                                                </div>
                                            </div>
                                            <StyledLoading>
                                                <StyledInner/>
                                            </StyledLoading>
                                        </StyledCard>
                                        <StyledCard className="flex-auto	 mt-2">

                                            <p className="mb-4">
                                                <span className="mr-2">Winner</span>
                                                <span className="text-secondary-text">1,543 votes</span>
                                            </p>

                                            <div className="flex gap-4 items-center">
                                                <img src="/images/coin.png" alt=""/>

                                                <div className="flex flex-col gap">
                                                    <p>Stake CAKE</p>

                                                    <p className="text-secondary-text">
                                                        Stake, Earn — And more!
                                                    </p>
                                                </div>
                                            </div>
                                        </StyledCard>
                                    </div>
                                </div>
                            </div>

                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="container">
                                <div className="grid lg:grid-cols-4 md:grid-cols-1 my-10">
                                    <div className="my-4 mr-5">
                                        <StyledSecondaryText>
                                            Purchased tokens
                                        </StyledSecondaryText>
                                        <StyledText>
                                            764,950,317
                                        </StyledText>
                                    </div>
                                    <div className="my-4 mr-5">
                                        <StyledSecondaryText>
                                            Purchased NFT
                                        </StyledSecondaryText>
                                        <StyledText>
                                            479,283
                                        </StyledText>
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 my-10">
                                    <StyledChartCard className=" flex flex-col gap-4">
                                        <div className="p-8">
                                            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                                <p className="font-medium">
                                                    Cost of Jetton
                                                </p>
                                                <ContainerDropdown choices={dayChoices}/>
                                            </div>

                                            <div className="flex items-end flex-wrap gap-4 mb-4">
                                                <h1 className="text-5xl font-medium">$2.14B</h1>

                                                <div className="text-secondary-text">April 7, 2023</div>
                                                <div className="text-secondary-text">Capitalization $2.14B</div>
                                            </div>
                                        </div>
                                        <LineChart
                                            borderColor={"#713DFF"}
                                            backgroundColorBottom={"rgba(0, 143, 255, 0)"}
                                            backgroundColorTop={"rgba(0, 143, 255, 1)"}
                                        />
                                    </StyledChartCard>

                                    <StyledChartCard className=" flex flex-col gap-4">
                                        <div className="p-8">
                                            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                                <p className="font-medium">
                                                    Cost of NFT
                                                </p>

                                                <ContainerDropdown choices={dayChoices}/>
                                            </div>

                                            <div className="flex items-end flex-wrap gap-4 mb-4">
                                                <h1 className="text-5xl font-medium">$10.00B</h1>

                                                <div className="text-secondary-text">April 7, 2023</div>
                                                <div className="text-secondary-text">Capitalization $2.14B</div>

                                            </div>
                                        </div>
                                        <LineChart
                                            borderColor={"#713DFF"}
                                            backgroundColorBottom={"rgba(0, 143, 255, 0)"}
                                            backgroundColorTop={"rgba(0, 143, 255, 1)"}
                                        />

                                    </StyledChartCard>
                                </div>


                                <div className="grid lg:grid-cols-4 md:grid-cols-1 my-10">
                                    <div className="my-4 mr-5">
                                        <StyledSecondaryText>
                                            ARY
                                        </StyledSecondaryText>
                                        <StyledText>
                                            33.03%
                                        </StyledText>
                                    </div>
                                    <div className="my-4 mr-5">
                                        <StyledSecondaryText>
                                            Steaking time
                                        </StyledSecondaryText>
                                        <StyledText>
                                            1 year
                                        </StyledText>
                                    </div>
                                </div>
                                <StyledChartCard className=" flex flex-col gap-4 my-10">
                                    <div className="p-8">
                                        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                            <p className="font-medium">
                                                Stacking of Dream jettons
                                            </p>
                                            <ContainerDropdown choices={dayChoices}/>
                                        </div>

                                        <div className="flex items-end flex-wrap gap-4 mb-4">
                                            <h1 className="text-5xl font-medium">$102.14B</h1>

                                            <p className="text-secondary-text">March 24, 2023</p>
                                        </div>
                                    </div>
                                    <LineChart
                                        borderColor={"#713DFF"}
                                        backgroundColorBottom={"rgba(0, 143, 255, 0)"}
                                        backgroundColorTop={"rgba(0, 143, 255, 1)"}
                                    />
                                </StyledChartCard>

                                <div className="grid lg:grid-cols-4 md:grid-cols-1 my-10">
                                    <div className="my-4 mr-5">
                                        <StyledSecondaryText>
                                            Total contribution, $
                                        </StyledSecondaryText>
                                        <StyledText>
                                            8,152,104
                                        </StyledText>
                                    </div>
                                    <div className="my-4 mr-5">
                                        <StyledSecondaryText>
                                            Number of DAO shareholders
                                        </StyledSecondaryText>
                                        <StyledText>
                                            492,682
                                        </StyledText>
                                    </div>
                                    <div className="my-4 mr-5">
                                        <StyledSecondaryText>
                                            Countdown
                                        </StyledSecondaryText>
                                        <StyledText>
                                            312d 17h 31m
                                        </StyledText>
                                    </div>
                                </div>
                                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 my-10">
                                    <StyledChartCard className=" flex flex-col gap-4">
                                        <div className="p-8">
                                            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                                <p className="font-medium">
                                                    Received from staking/farming profits
                                                </p>
                                                <ContainerDropdown choices={dayChoices}/>
                                            </div>

                                            <div className="flex items-end flex-wrap gap-4 mb-4">
                                                <h1 className="text-5xl font-medium">$2.14B</h1>

                                                <p className="text-secondary-text">April 7, 2023</p>
                                            </div>
                                        </div>
                                        <LineChart
                                            borderColor={"#713DFF"}
                                            backgroundColorBottom={"rgba(0, 143, 255, 0)"}
                                            backgroundColorTop={"rgba(0, 143, 255, 1)"}
                                        />
                                    </StyledChartCard>

                                    <StyledChartCard className=" flex flex-col gap-4">
                                        <div className="p-8">
                                            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                                <p className="font-medium">
                                                    Transferred to rewards for Holders
                                                </p>

                                                <ContainerDropdown choices={dayChoices}/>
                                            </div>

                                            <div className="flex items-end flex-wrap gap-4 mb-4">
                                                <h1 className="text-5xl font-medium">$315.49B</h1>

                                                <p className="text-secondary-text">April 7, 2023</p>
                                            </div>
                                        </div>
                                        <LineChart
                                            borderColor={"#713DFF"}
                                            backgroundColorBottom={"rgba(0, 143, 255, 0)"}
                                            backgroundColorTop={"rgba(0, 143, 255, 1)"}
                                        />

                                    </StyledChartCard>
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

export default Voting