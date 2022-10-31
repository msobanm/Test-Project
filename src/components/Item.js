import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: 300px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`
const Title = styled.h1`

`

const Item = ({item}) => {
  return (
    <Container>
        <Title>{item.title}</Title>
    </Container>
  )
}

export default Item