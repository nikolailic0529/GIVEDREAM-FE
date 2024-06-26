import styled from "styled-components";
import {Link} from "@/src/components/common/Link";
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import  {ConnectWallet, MobileConnectWallet} from "@/src/components/pages/voting/ConnectWallet";

const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';

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
                <div className="mt-0 md:mt-8 flex flex-col">
                    <div className="text-center lg:text-5xl text-3xl font-medium">
                        International decentralized autonomous system of mutual assistance on the Binance Smart Chain blockchain
                    </div>

                    <div className="mt-10 text-center lg:text-5xl text-3xl font-medium">
                        GIVEDREAM
                    </div>

                    <StyleImage src="/images/bird.png" alt="" className="mt-4 mx-auto" width={390} height={307} />

                    <div className="mt-10 text-xl font-normal md:w-7/12 w-full mx-auto">
                        Community members connect one after another through a smart contract to endless global lines and automatically receive rewards
                    </div>

                    <div className="mt-5 hidden md:block w-5/12 mx-auto">
                        <TonConnectUIProvider manifestUrl={manifestUrl}>
                            <ConnectWallet />
                        </TonConnectUIProvider>
                    </div>
                    
                    <div className="md:hidden">
                        <TonConnectUIProvider manifestUrl={manifestUrl}>
                            <MobileConnectWallet />
                        </TonConnectUIProvider>
                    </div>

                    <p className="text-xl font-normal md:w-5/12 w-full mx-auto mt-4">
                    </p>
                </div>
            </div>
        </StyledHeroSection>
    )
}

export default HeroSection
