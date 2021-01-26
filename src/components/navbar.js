import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect, handleClick} from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import {IconContext} from "react-icons/lib"
import styled from 'styled-components'
import { DiScala } from "react-icons/di";


//styled components 
const Nav = styled.nav`
background: ${({active}) => active? "#fff" : "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(225,225,225,0) 100%)" };
height: 80px;
display:flex;
justify-content: center;
align-items: center;
font-size:1rem;
position:sticky;
top:0;
z-index:999;


@media screen and (maxwidth:960px){
    background: ${({click}) => (click ? "#fff" : "transparent") };
    transition: 0.8s all ease

}
`
const NavbarContainer = styled.div`
display:flex;
justify-content: space-between;
font-size:1rem;
position:sticky;
top:0;
z-index:1;
width:100%;
max-width:1000px;
`


const NavLogo = styled(Link)`
color: #141414;
display:flex;
justify-self: flex-start;
cursor:pointer;
text-decoration:none;
align-items: center;
font-size:1.5rem;
`

const NavIcon = styled(DiScala)`
margin:0 0.5rem 0 2rem;`

const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width:960px){
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size:1.8rem;
        cursor:pointer;
    }
`

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else{
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return(
        <IconContext.Provider value={{color: "#141414"}}> 
        <Nav active={scroll} click={click}>
            <NavbarContainer>
                <NavLogo>
                     <NavIcon>
                        EXPLOR
                    </NavIcon>
                </NavLogo>

                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars></FaBars>}
                </MobileIcon>
            </NavbarContainer>
        </Nav> 
        </IconContext.Provider>
    )
    }   

export default Navbar
