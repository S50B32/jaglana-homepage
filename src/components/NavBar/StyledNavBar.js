import styled from "styled-components"

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  font-family: "Cairo";
  text-transform: lowercase;
  font-size: 4rem;
  padding: 0 2em 1em;
  margin: 0;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0.5em 0 0.5em;
  }

  li {
    padding: 0 2.85rem 0;
  }
`

export default StyledNavBar
