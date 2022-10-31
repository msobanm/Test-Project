import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    height: 82px;
    background-color: #9999ff;
`
const Wrapper = styled.div`
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`
const Brand = styled.h3`
    font-size: 2em;
    color: white;
    cursor: pointer;
`

const Mid = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
`
const Links = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 70px;
    margin-right: 30px;
`
const Link = styled.li`
    color: white;
    cursor: pointer;
`
const Home = styled.a``
const AboutUs = styled.a``
const Contact = styled.a``

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const SearchContainer = styled.div`
    display: flex;
    background-color: #e6e1e1;
    align-items: center;
    gap: 10px;
    margin-left: 50px;
    border-radius: 5px;
    height: 50px;
    padding: 10px;
`
const Input = styled.input`
    border: none;
    background-color: #e6e1e1;
    font-size: 1em;
    &:focus{
        outline: none;
    }
`
const Search = styled.div`
    cursor: pointer;
`


const Header = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Brand>Your Brand</Brand>
            </Left>
            <Mid>
                <Links>
                    <Link>
                        <Home>Home</Home>
                    </Link>
                    <Link>
                        <AboutUs>About Us</AboutUs>
                    </Link>
                    <Link>
                        <Contact>Contact</Contact>
                    </Link>
                </Links>
            </Mid>
            <Right>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search>
                        <SearchIcon/>
                    </Search>
                </SearchContainer>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Header