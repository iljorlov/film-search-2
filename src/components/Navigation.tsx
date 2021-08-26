import React, { useState } from "react";
import sandwich from "../svg/sandwich.svg";
import magnifier from "../svg/magnifier.svg";
import sandwichClose from "../svg/sandwichClose.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Sidebar } from "./Sidebar";
// import { useHistory } from 'react-router-dom'
import { useEffect } from "react";
import { FC } from "react";
import { useHistory } from "react-router-dom";

interface HeaderProps {
  url: string;
}
export const Header: FC<HeaderProps> = ({ url }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [searchEntry, setSearchEntry] = useState("");
  const history = useHistory();

  useEffect(() => {
    setSidebarToggle(false);
  }, [url]);

  const handleClick = (event: any) => {
    if (event.target.id !== "sidebar") {
      setSidebarToggle(false);
    }
  };

  // to disable sidebar when clicked outside it
  useEffect(() => {
    if (sidebarToggle === true) {
      const body = document.body;
      body?.addEventListener("click", handleClick);
      return () => {
        body?.removeEventListener("click", handleClick);
      };
    }
  }, [sidebarToggle]);

  const handleToggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const submitForm = () => {
    history.push(`/search/${searchEntry}/1`);
  };

  return (
    <HeaderComponent>
      <Nav>
        <motion.img
          src={sidebarToggle ? sandwichClose : sandwich}
          height="30px"
          alt="toggle sidebar"
          onClick={handleToggleSidebar}
        />
      </Nav>
      <SearchBar placeholder="search..." onSubmit={submitForm}>
        <input
          type="text"
          value={searchEntry}
          onChange={(e) => setSearchEntry(e.target.value)}
        />
        <button type="submit">
          <img src={magnifier} alt="search button" />
        </button>
      </SearchBar>
      <Sidebar sidebarToggle={sidebarToggle} />
    </HeaderComponent>
  );
};

const SearchBar = styled.form`
  z-index: 9;
  width: 20rem;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 0.5rem;
  input {
    width: 100%;
    height: 80%;
    font-size: 1.5rem;
    font-weight: normal;
    border-radius: 2rem;
    border: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    padding: 0 2.5rem;
  }
  button {
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    /* padding: 0.5rem 0.5rem; */
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
    position: absolute;
    margin-left: 0.5rem;
    left: 0;
    img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;

const HeaderComponent = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  background-color: #c4c4c4;
  color: white;
  position: fixed;
  width: 100%;
  height: 3rem;
  z-index: 8;
`;
const Nav = styled(motion.nav)`
  display: flex;
  align-items: center;
  margin: 0px 1rem;
  z-index: 10;
  background-color: transparent;
`;
