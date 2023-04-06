import styled from "styled-components";


const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
`

export default function LearnMoreButton() {
    return (
        <StyledButton className="learn-more-button py-2 px-4 rounded-full hover:opacity-50 ease-linear duration-150">
            Learn more
        </StyledButton>
    );
}
