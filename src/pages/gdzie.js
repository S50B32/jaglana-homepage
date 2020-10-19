import React from "react"
import styled from "styled-components"

import Footer from "../components/Footer"
import LogoReusable from "../components/Logo/LogoReusable"
import SocialsContainerReusable from "../components/SocialsContainer/SocialsContainerReusable"

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const LocationDataContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;


    @media (max-width: 600px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
}


`

const ContactColumn = styled.div`
  width: 37vw;
  height: 75vh;
  background-color: rgba(226, 226, 226, 0.6);
  font-size: 3rem;

  color: rgba(0, 0, 0, 0.8);

  backdrop-filter: blur(15px) brightness(1.2);

  @media (max-width: 600px) {
    width: 100%;
    height: 50vh;
  }

  li {
    list-style: none;
  }

  .contact {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 50%;
    margin: 0;
    padding: 0;

    position: relative;
  }
  .contact::after {
    display: block;
    content: "";
    height: 2px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 80%;
    position: absolute;
    bottom: 0;
    left: 10%;
  }

  .contact__details {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 2.2rem;
    padding: 4rem 7rem 4rem 10%;

    box-sizing: border-box;

    @media (max-width: 600px) {
      font-size: calc(3 * 2.2rem);
    }
  }

  .contact__logo {
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }

  .openingHours {
    display: flex;
    flex-direction: row;
    height: 50%;
    width: 100%;
  }

  .openingHours__socialMedia {
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;

    position: relative;

    a {
      width: 22%;
      opacity: 0.6;
      position: relative;
      left: 43%;
    }
  }

  .openingHours__list {
    width: 60%;
    height: 100%;

    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;

    font-size: 1.9rem;

    @media (max-width: 600px) {
      font-size: calc(2.5 * 1.9rem);
    }
  }

  .openingHours__day {
    position: relative;
    left: 15%;
  }

  .openingHours__time {
    position: absolute;
    left: 55%;
  }
`
const MapColumn = styled.div`
  width: 37vw;
  height: 75vh;

  @media (max-width: 600px) {
    width: 100%;
    height: 50vh;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    opacity: 0.85;

    backdrop-filter: blur(10px) brightness(0.5);
  }
`

const Location = () => (
  <>
    <StyledWrapper id="location">
      <LocationDataContainer>
        <ContactColumn itemScope itemType="https://schema.org/Restaurant">
          <article className="contact">
            <section className="contact__details">
              <span itemProp="name">Jaglana</span>
              <li>
                <section
                  itemProp="address"
                  itemScope
                  itemType="http://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">ul. Kramarska 1/5</span> <br />
                  <span itemProp="postalCode">61-765</span>{" "}
                  <span itemProp="addressLocality">Poznań</span>
                </section>
              </li>
              <li>
                <span itemProp="telephone">tel. 884 666 906</span>
              </li>
              <li>
                <span itemProp="email">
                  <a href="mailto:biuro@jaglana.pl">biuro@jaglana.pl</a>
                </span>
              </li>
            </section>
            <div className="contact__logo">
              <LogoReusable type="black" itemProp="logo"></LogoReusable>
            </div>
          </article>

          <article
            className="openingHours"
            itemProp="openingHours"
            content="Mo-Su 10:00-15:00"
          >
            <div className="openingHours__socialMedia">
              <SocialsContainerReusable type="black"></SocialsContainerReusable>
            </div>
            <ul className="openingHours__list">
              <li>
                <span className="openingHours__day">poniedziałek</span>{" "}
                <span className="openingHours__time">10:00–15:00</span>
              </li>
              <li>
                <span className="openingHours__day">wtorek</span>{" "}
                <span className="openingHours__time">10:00–15:00</span>
              </li>
              <li>
                <span className="openingHours__day">środa</span>{" "}
                <span className="openingHours__time">10:00–15:00</span>
              </li>
              <li>
                <span className="openingHours__day">czwartek</span>{" "}
                <span className="openingHours__time">10:00–15:00</span>
              </li>
              <li>
                <span className="openingHours__day">piątek</span>{" "}
                <span className="openingHours__time">10:00–15:00</span>
              </li>
              <li>
                <span className="openingHours__day">sobota</span>{" "}
                <span className="openingHours__time">10:00–15:00</span>
              </li>
              <li>
                <span className="openingHours__day">niedziela</span>{" "}
                <span className="openingHours__time">10:00–15:00</span>
              </li>
            </ul>
          </article>
        </ContactColumn>
        <MapColumn>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9735.40845723797!2d16.9331704!3d52.4093564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf9b7ea50eced02b!2sJaglana!5e0!3m2!1spl!2spl!4v1585427075755!5m2!1spl!2spl"></iframe>
        </MapColumn>
      </LocationDataContainer>
      <Footer></Footer>
    </StyledWrapper>
  </>
)

export default Location
