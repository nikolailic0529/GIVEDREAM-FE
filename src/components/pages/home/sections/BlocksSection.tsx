import styled from "styled-components";
import LearnMoreButton from "@/src/components/common/LeanMoreButton";
import LineChart from "@/src/components/charts/LineChart";


const StyledSection = styled.section`
  display: grid;
  gap: 25px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StyledItem = styled.div`
  background: radial-gradient(
          174.21% 100% at 50% 0%,
          rgba(113, 61, 255, 0.2) 0%,
          rgba(0, 0, 0, 0) 100%
  ),
  rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
`

const StyledCard = styled.div`
  border: 1px solid var(--border-color);
  padding: 16px;
  border-radius: 24px;
  width: 100%;
`

const StyledLoading = styled.div`
  width: 100%;
  height: 8px;
  box-shadow: 0 0 9px var(--pink-color);
  border-radius: 8px;
`

const StyledInner = styled.div`
  width: 70%;
  height: 100%;
  background-color: var(--pink-color);
  box-shadow: 0 0 16px -4px #713dff;
  border-radius: 8px;
`

const BlocksSection = ()=>{
    return (
        <StyledSection className="mt-20 home__blocks">
            <StyledItem className="gap-4">
                <div className="flex flex-col items-start gap-4 p-10">
                    <h1 className="text-3xl">Earn APYs up to 100%</h1>

                    <p className="text-2xl">-100,000%</p>

                    <p className="text-secondary-text">
                        Here at DAO Dream, we want to...
                        Here at DAO Dream, we want to...{" "}
                    </p>

                    <LearnMoreButton />
                </div>
                <LineChart
                    borderColor={"#F95ACC"}
                    backgroundColorTop="rgba(249, 90, 204, 1)"
                    backgroundColorBottom="rgba(113, 61, 255, 0)"
                />
            </StyledItem>

            <StyledItem className=" flex flex-col items-start gap-4 p-10">
                <h1 className="text-3xl">Voting</h1>

                <p className="text-2xl">Liquidity goes to the farming or staking of the winner of the vote</p>

                <p className="text-secondary-text">
                    Holders of NFTs and Dream jettons, in addition to making a profit, have the opportunity to
                    Voting for their choice of steaking and farming

                </p>

                <LearnMoreButton />

                <div className="mt-auto flex flex-col gap-4 w-full">
                    <StyledCard>
                        <p className="mb-4">
                            <span className="mr-2">Results</span>
                            <span className="text-secondary-text">1,726 votes</span>
                        </p>

                        <div className="flex items-center justify-between mb-2">
                            <p>
                                Yes <span className="text-secondary-text">91.75%</span>
                            </p>

                            <div className="flex text-secondary-text">
                                1.29K votes 1.67M TON
                            </div>
                        </div>
                        <StyledLoading>
                            <StyledInner/>
                        </StyledLoading>
                    </StyledCard>

                    <StyledCard>
                        <p className="mb-4">
                            <span className="mr-2">Winner</span>
                            <span className="text-secondary-text">1,543 votes</span>
                        </p>

                        <div className="flex gap-4 items-center">
                            <img src="/images/coin.png" alt="" />

                            <div className="flex flex-col gap">
                                <p>Stake CAKE</p>

                                <p className="text-secondary-text">
                                    Stake, Earn — And more!
                                </p>
                            </div>
                        </div>
                    </StyledCard>
                </div>
            </StyledItem>
        </StyledSection>

    )
}
export default BlocksSection