import {StyledCard, StyledCardText} from "@/src/components/features/Card";

const cards = [
    {
        title: "Sustainable Growth",
        text: "Invest in Jettons and NFT Dreams that prioritize sustainable growth and perpetual returns.",
    },

    {
        title: "Attractive returns",
        text: "Get a higher return on your investment with attractive annual percentage yields (APYs).",
    },
    {
        title: "Auto Reinvesting",
        text: "Boost your investments with auto reinvestment of earnings, which provides compound interest income.",
    },
    {
        title: "Reset protection",
        text: "All investments are protected by a smart contract; no one can make changes to the code. Connect to the blockchain using Web3 technology.",
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