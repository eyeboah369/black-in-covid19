import React, { useState } from 'react';
import { Container, Carousel, Col, Row } from 'react-bootstrap'
import './Timeline.css'


function Slides() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel class="HomeData" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{height: '300px', backgroundColor: '#F7F6F4', marginTop: '0.2vh', paddingTop: '15vh'}}>
            <Container>
                <h1 style={{textAlign: 'center'}}>Leverage the facts, not fear.</h1>
            </Container>
        </Carousel.Item>

        <Carousel.Item style={{height: '300px',  backgroundColor: '#F7F6F4', marginTop: '0.2vh', paddingTop: '15vh'}}>
            <Container>
                <h1 style={{textAlign: 'center'}}>“Injustice anywhere is a threat to justice everywhere.” </h1>
            </Container>
            <Carousel.Caption><strong style={{color: 'black'}}>-Dr. Martin luther King Jr.</strong></Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item style={{height: '300px', backgroundColor: '#F7F6F4', marginTop: '0.2vh', paddingTop: '15vh'}}>
            <Container>
                <h1 style={{textAlign: 'center'}}>This is the reality, lets begin.</h1>
            </Container>
        </Carousel.Item>

      </Carousel>
    );
  }


export default Slides