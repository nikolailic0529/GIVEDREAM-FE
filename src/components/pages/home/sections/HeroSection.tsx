import styled from "styled-components";

export const StyledHeroSection = styled.section`
  /* hero */


  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  //padding: 0 0 200px;
  gap: 120px;

  //width: 1280px;
  height: 100vhpx - 72px;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  background: radial-gradient(100.06% 120.49% at 50% -20.49%, rgba(255, 255, 255, 0.9) 0%, rgba(113, 61, 255, 0.9) 32.82%, rgba(0, 0, 0, 0) 78.46%);

`

export const StyleImage = styled.img`
  width: 300px;

  @media (min-width: 1024px) {
    width: 450px;
  }
`
const HeroSection = ()=>{
    return (
        <StyledHeroSection className="pt-24">
            <div className="container mx-auto">
                <div className="mt-12 flex flex-col gap-10 text-center lg:text-5xl text-3xl font-medium">
                    <div className="gap-10 w-full ">
                        <h2>
                            Decentralized autonomous organization
                            with a protocol to automatically place liquidity into stacking and farming in the DeFi sector on blockchains
                            The Open Network, Ethereum, Binance Smart Chain, Polygon, Arbitrum and other networks with rewards in Ton
                        </h2>
                        <h1>DAO DREAM</h1>
                    </div>

                    <StyleImage src="/images/bird.png" alt="" className="mx-auto" width={390} height={307} />

                    <p className="text-xl font-normal md:w-5/12 w-full mx-auto mt-4">
                        Essentially, by purchasing and holding Jettons and NFT Dreams, you get an endless, passive, reliable and manageable income
                    </p>
                </div>
            </div>
        </StyledHeroSection>
    )
}

export default HeroSection