import React from "react"
import styled from "styled-components"
import InstagramBlock from "./InstagramBlock"
import { useStaticQuery, graphql } from "gatsby"

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(25, 3.8vh);
  grid-template-columns: repeat(27, 3.8vh);

  position: absolute;
  padding: 1rem;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 600px) {
    grid-template-rows: repeat(25, 3.8vw);
    grid-template-columns: repeat(27, 3.8vw);
  }
`

const InstagramGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaImagesJson {
        nodes {
          id
          position
          columnStart
          columnEnd
          rowStart
          rowEnd
          link
          src {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)
  return (
    <StyledWrapper>
      {data.allInstaImagesJson.nodes.map(block => (
        <InstagramBlock key={block.img} details={block} />
      ))}
    </StyledWrapper>
  )
}

export default InstagramGrid
