import React from "react"
import { Link } from "gatsby"
import pyszneLogo from '../images/pyszne.svg'
import uberEatsLogo from '../images/uberEATS.svg'
import styled from 'styled-components'

const StyledOrderPage = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
    
    
    img{
        height: 100px;
        width: 100px;
    }

`

const OrderPage = () => (
    <>
        <StyledOrderPage>
            <h1>Zamów</h1>

                
                <a href='https://www.pyszne.pl/menu/jaglana-1'>
                    <img src={pyszneLogo} alt='pyszne.pl'></img>
                    </a>
                <br />
                <a href='https://www.ubereats.com/pl/poznan/food-delivery/jaglana/nYqW-VJCRVmDWj7e7OBg3w'>
                    <img src={uberEatsLogo} alt='uber_eats'></img>
                    </a>
                
            <br />
            <Link to="/">Wróć do strony głównej</Link>
        </StyledOrderPage>
    </>
)

export default OrderPage