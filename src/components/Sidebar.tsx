import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'

interface SidebarProps {
  sidebarToggle: boolean
}

export const Sidebar: FC<SidebarProps> = ({sidebarToggle}) => {
  return (
    <SidebarComponent
      initial={
        {x: '-100%'}
      }
      animate={
        {x: sidebarToggle ? '0' : '-100%'}
      }
      transition={{
          type: 'tween',
          duration: 0.3
        }}
    >
      <NavLink to={'/popular/1'}>
        <SidebarLink>Popular</SidebarLink>
      </NavLink>
      <NavLink to={'/top-rated/1'}>
        <SidebarLink>Top Rated</SidebarLink>
      </NavLink>
      <NavLink to={'/trending/1'}>
        <SidebarLink>Trending</SidebarLink>
      </NavLink>
      <NavLink to={'/upcoming/1'}>
        <SidebarLink>Upcoming</SidebarLink>
      </NavLink>
      

    </SidebarComponent>
  )
}


const SidebarComponent = styled(motion.div)`
  width: 20vw;
  min-width: 20rem;
  height: 100vh;
  background-color: #333;
  color: white;
  position: fixed;
  z-index: 9;
  padding: 3rem 2rem;
`

const SidebarLink = styled(motion.div)`
  color: white;
  margin: 2rem 1rem;
`

