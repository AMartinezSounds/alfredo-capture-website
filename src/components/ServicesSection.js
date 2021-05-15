import React from 'react';
import {useScroll} from './useScroll';

//import icons

import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import {scrollReveal} from '../animation';


// Styles 

import {About, Description, Image} from '../styles';
import styled from 'styled-components';

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
            <Description>
                <h2>High <span>quality</span> services </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>In order to operate at maximum efficiency, we check our professionals portfolio and test their skills.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Trusting people is the key to effective teamwork. They know best how to do their own work!</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>High Quality</h3>
                        </div>
                        <p>We constanly renew our equipment to reach that top level.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>We do our best to optimise our rates to turn your dreams into reality.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="Camera in action" />
            </Image>
        </Services>
    );
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px){
        justify-content: center;
    } 
`;

const Card = styled.div`
     flex-basis: 16rem; 
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`; 

export default ServicesSection;