import React, { useState } from 'react'
import sandwich from '../svg/sandwich.svg'
import sandwichClose from '../svg/sandwichClose.svg'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Sidebar } from './Sidebar'


export const Header = () => {

  const [sidebarToggle, setSidebarToggle] = useState(false)

  return (
    <HeaderComponent onClick={() => setSidebarToggle(!sidebarToggle)}>
      <Nav>
        <motion.img 
          src={sidebarToggle ? sandwichClose : sandwich} 
          height='30px' alt="toggle sidebar" 
          // onClick={() => setSidebarToggle(!sidebarToggle)}
        />
      </Nav>
      <Sidebar sidebarToggle={sidebarToggle} />
    </HeaderComponent>
  )
}


const HeaderComponent = styled(motion.div)`
  display: flex;
  background-color: #C4C4C4;
  color: white;
  position: fixed;
  width: 100%;
  min-height: 3rem;
  z-index: 10;
`

const Nav = styled(motion.nav)`
  display: flex;
  align-items: center;
  margin: 0px 1rem;
  z-index: 10;
  background-color: transparent;
`