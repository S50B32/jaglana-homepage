import React from "react"
import styled from "styled-components"

const StyledMidSection = styled.div`
  transform: rotate(-3deg);
  display: flex;
  flex-direction: space-evenly;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Cairo";
  text-transform: uppercase;
  padding: 0.5em 3em 0.5em;
  margin: 10em 0 0;
  color: white;

  position: relative;
  left: 50px;

  h3 {
    padding: 0 0.25em 0;
    margin: 0;
    font-size: 6em;
  }
  h3:nth-child(2):before {
    content: "-";
    padding: 0 0.5em 0 0;
  }
  h3:nth-child(2):after {
    content: "-";
    padding: 0 0 0 0.5em;
  }
`

const MidSection = () => (
  <>
    <StyledMidSection>
      <h3>eat healthy</h3>
      <h3>stay healthy</h3>
      <h3>visit us</h3>
    </StyledMidSection>
  </>
)

export default MidSection
