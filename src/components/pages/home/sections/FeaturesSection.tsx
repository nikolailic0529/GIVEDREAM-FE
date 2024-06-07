import {StyledCard, StyledCardText} from "@/src/components/features/Card";

const cards = [
    {
        title: "Compound interest",
        text: "Sending of the surpluses 10% accumulated in the system is provided, as well as refinancing 50% of the profits from farming and staking, which will provide rewards on compound interest",
    },

    {
        title: "Additional rewards",
        text: "Get additional rewards in btcb wrapped bitcoin due to the annual percentage return from farming and staking on different blockchains, where are all the liquidity received on the first account sent to",
    },
    {
        title: "Growth of rewards",
        text: "By making contributions to the system from 0.01 to 5242.88 bnb, you get a place in the bsc blockchain and the smart contract gives you rewards of more than 25 000 bnb when you automatically fill in the binary structure below",
    },
    {
        title: "Account protection",
        text: "The smart contract code is open, no one can make changes to the code, the system works autonomously and transparently, there are no hidden fees ",
    },
];

const FeaturesSection = ()=>{
    return (

        <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:gap-8 md:gap-4 mt-20">
            {cards.map((card, index) => (
                <StyledCard className="mb-8" key={index}>
                    <img
                        src={`/card-icons/${index + 1}.svg`}
                        alt=""
                        className="mb-10"
                    />

                    <div className="text-xl mb-2">
                        {card.title}
                    </div>

                    <StyledCardText className="text-md">{card.text}</StyledCardText>
                </StyledCard>
            ))}
        </div>
    )
}

export default FeaturesSection