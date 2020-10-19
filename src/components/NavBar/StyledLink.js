import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  font-family: "Cairo";
  background: none;
  font-size: 4rem;
  border: none;
  text-decoration: none;
  color: white;
  text-transform: lowercase;

  opacity: ${({ dimmed }) => (dimmed ? 0.2 : 0.85)};

  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  :hover {
    opacity: 0.3;
  }

  :active {
    opacity: 0.2;
  }
`

export default StyledLink
