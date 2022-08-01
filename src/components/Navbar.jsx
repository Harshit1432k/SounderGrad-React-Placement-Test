import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Container>
        <p>Slideshow App</p>
    </Container>
  )
}

export default Navbar

const Container=styled.div`
    background-color:#303030 ;
    color: #239c23;
    text-align: center;
    width: 100%;
    font-weight: 600;
    font-size: 2rem;
    p{
        padding: 1.6rem 0;
    }
`