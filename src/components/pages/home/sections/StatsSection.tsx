import styled from "styled-components"
import LineChart from "@/src/components/charts/LineChart";
import ContainerDropdown from "@/src/components/features/ContainerDropdown";
import { FiCopy } from "react-icons/fi";

const StyledWrapper = styled.div`
  background: radial-gradient(
          94.79% 25.37% at 50% 101.96%,
          rgba(255, 255, 255, 0.9) 0%,
          rgba(113, 61, 255, 0.9) 32.82%,
          rgba(0, 0, 0, 0) 78.46%
  ),
  radial-gradient(
          97.39% 52.01% at 50% -8.59%,
          rgba(255, 255, 255, 0.9) 0%,
          rgba(113, 61, 255, 0.9) 32.82%,
          rgba(0, 0, 0, 0) 69.64%
  );
  border-radius: 24px;
  max-width: 1220px;
  margin: 100px auto;
`

const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  //padding: 24px;
  //@media (max-width: 740px){
  //  padding: 10px;
  //}
`

const StyledTableWrapper = styled.div`

  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 3fr 5fr;
  }

  table {
    thead {
      td {
        padding: 10px;
        background: radial-gradient(
                174.21% 100% at 50% 0%,
                rgba(113, 61, 255, 0.5) 0%,
                rgba(0, 0, 0, 0) 100%
        );
        border: 1px solid var(--table-border-color);
      }
    }

    tbody {
      td {
        border: 1px solid var(--table-border-color);
      }
    }
  }
`

const StyledTable = styled.div`

  border: 2px solid var(--table-border-color);

`

const stats = [
    {
        title: "Ton amount",
        value: "549,326,121",
    },
    {
        title: "~BTC",
        value: "44,455.57",
    },
    {
        title: "Received to DAO",
        value: "39,120,432",
    },
    {
        title: "Received via NFT",
        value: "410,415,125",
    },
];

const StyledGrid = styled.div`

  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 8fr 10fr 8fr;
  }
`

const donators = [
    {
        name: "Hope Horizon",
        place: "Tokyo, Japan",
        amount: "$6,713,604",
    },
    {
        name: "Care Hub",
        place: "London, UK",
        amount: "$6,713,604",
    },
    {
        name: "Help Linkope Horizon",
        place: "New York, USA",
        amount: "$6,713,604",
    },
];


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
const StatsSection = ()=>{
    return (
        <section className="px-4">
            <StyledWrapper>
                <div className="container">
                    <div className="py-20">
                        <div className="flex flex-col gap-3 text-center lg:w-6/12 mx-auto mb-10">
                            <h1 className="uppercase text-5xl">STATISTICS</h1>

                            <p className="text-secondary-text ">
                                Ton Statistics offers insights into the Ton ecosystem&#39;s
                                performance, usage, and growth across various sectors.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                                {stats.map((stat, index) => (
                                    <StyledCard
                                        className="flex flex-col gap-4 p-8"
                                        key={index}
                                    >
                                        <p className="text-secondary-text">{stat.title}</p>

                                        <h1 className="text-3xl">{stat.value}</h1>
                                    </StyledCard>
                                ))}
                            </div>

                            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
                                <StyledCard className=" flex flex-col gap-4">
                                    <div className="p-8">
                                        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                            <p className="font-medium">
                                                Received from staking/farming profits
                                            </p>
                                            <ContainerDropdown choices={dayChoices} />
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
                                </StyledCard>

                                <StyledCard className=" flex flex-col gap-4">
                                    <div className="p-8">
                                        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                            <p className="font-medium">
                                                Transferred to rewards for Holders
                                            </p>

                                            <ContainerDropdown choices={dayChoices} />
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

                                </StyledCard>
                            </div>

                            <StyledCard>
                                <StyledTableWrapper className="p-8">
                                    <div className="flex flex-col gap-12">
                                        <div className="flex flex-col ">
                                            <p className="text-secondary-text text-lg">
                                                Jettons sold
                                            </p>

                                            <h3 className="text-4xl">10 000 000</h3>
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            <p className="text-secondary-text text-lg">
                                                Steakin&#39;s jettons
                                            </p>

                                            <h3 className="text-4xl">100 000</h3>
                                        </div>

                                        <div className="hidden lg:flex flex items-center gap-4">
                                            <button className="py-2 px-4 rounded-3xl bg-white text-black  hover:opacity-50 ease-linear duration-150 font-medium">
                                                Jetton Dream
                                            </button>

                                            <button className="hover:opacity-50 ease-linear duration-150">
                                                NFT Dream
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex lg:hidden flex-wrap justify-center items-center gap-4">
                                        <button className="py-2 px-4 rounded-3xl bg-white text-black  hover:opacity-50 ease-linear duration-150 font-medium">
                                            Enter App
                                        </button>

                                        <button className="hover:opacity-50 ease-linear duration-150">
                                            Read newspaper
                                        </button>
                                    </div>

                                    <StyledTable className="rounded-xl overflow-hidden border-white">
                                        <table className="text-center table-auto w-full h-full">
                                            <thead>
                                            <tr>
                                                <td>Round</td>
                                                <td>NFT sold</td>
                                                <td>Price, Ton</td>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            {Array.from([1, 2, 3, 4, 5, 6]).map((_, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>100</td>
                                                    <td>{Math.pow(10, index)}</td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </StyledTable>
                                </StyledTableWrapper>
                            </StyledCard>

                            <div className="flex flex-col mt-10">
                                <div className="flex flex-col gap-6 text-center mb-16">
                                    <h1 className="uppercase text-4xl">DONATE</h1>

                                    <p className="text-2xl">
                                        You can transfer any amount of Ton to the Aid Pool
                                        without limitations.
                                    </p>

                                    <p className="text-secondary-text">
                                        The Aid Pool allocates funds to various Assistance Funds
                                        globally.
                                    </p>
                                </div>
                                <StyledGrid>
                                    <div className="flex flex-col gap-8">
                                        <h3 className="text-xl mb-8">Statistics</h3>

                                        <div className="flex flex-col gap-8">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-secondary-text">Wallet 1</p>

                                                <h4 className="text-5xl ">$8,302,569</h4>
                                            </div>

                                            <div className="flex flex-col gap-1">
                                                <p className="text-secondary-text">Wallet 2</p>

                                                <h4 className="text-5xl ">$12,861,492</h4>
                                            </div>
                                        </div>

                                        <div className="flex md:flex-nowrap flex-wrap gap-8">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-secondary-text">
                                                    Royalty wallet, 1%
                                                </p>

                                                <h4 className="text-2xl">$1,404</h4>
                                            </div>

                                            <div className="flex flex-col gap-1">
                                                <p className="text-secondary-text">
                                                    Donations wallet
                                                </p>

                                                <h4 className="text-2xl">$20,140,581</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-8">
                                        {donators.map((donator, index) => (
                                            <StyledCard className="p-4" key={index}>
                                                <div className="flex items-center justify-between flex-wrap gap-4">
                                                    <div className="flex items-center gap-4">
                                                        <img src="/images/donator.svg" alt="" />

                                                        <div className="flex flex-col">
                                                            <h5>{donator.name}</h5>

                                                            <p className="text-secondary-text">
                                                                {donator.place}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <p>{donator.amount}</p>
                                                </div>
                                            </StyledCard>
                                        ))}
                                    </div>

                                    <div className="flex flex-col gap-8">
                                        <StyledCard className="flex flex-col p-8 px-14 items-center gap-4">
                                            <img src="/images/qrcode.svg" alt="" className="h-30" />

                                            <div className="flex items-center gap-2 cursor-pointer hover:opacity-50 ease-linear duration-150">
                                                <FiCopy />

                                                <p>Copy address</p>
                                            </div>
                                        </StyledCard>

                                        <StyledCard className=" p-4">
                                            <p className="hover:opacity-50 ease-linear duration-150">
                                                info@dao-dream.com
                                            </p>
                                        </StyledCard>
                                    </div>
                                </StyledGrid>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledWrapper>
        </section>

    )
}

export default StatsSection