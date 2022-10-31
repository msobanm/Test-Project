import React from 'react'
import styled from 'styled-components'
import { someArray } from '../data'
import Item from './Item'

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 810px;
    margin: 30px 0px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
`

const ItemContainer = () => {
  return (
    <Container>
        <Wrapper>
            {someArray.map(item=>(
                <Item item={item} key={item.id} />
            ))}
        </Wrapper>
    </Container>
  )
}

export default ItemContainer