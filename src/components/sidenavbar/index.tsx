import React, { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

interface NavIconProps {
  arrow?: boolean;
  search?: boolean;
}

interface SideNavMainLinkProps {
  active?: boolean;
}

export default function SideNavBar() {
  const [activeSideBar] = useState();

  /* Write the necessary functions to show/hide the side bar on mobile devices */

  return (
    <SideNavBarCont className={activeSideBar && "visible"}>
      {/* Implement a hamburger icon slide in effect for mobile devices */}
      <SideNavMainLink
        className="menu_nav_link main_nav_link"
        to="/"
        activeClassName="active"
        exact
      >
        Wesley
        <NavIcon arrow></NavIcon>
      </SideNavMainLink>
      <SideNavMainLink
        className="menu_nav_link"
        to="/discover"
        activeClassName="active"
      >
        Discover
        <NavIcon search></NavIcon>
      </SideNavMainLink>
      <SideNavHeader>
        <HeaderText>Watched</HeaderText>
      </SideNavHeader>
      <NavLink
        className="menu_nav_link"
        to="/watched/movies"
        activeClassName="active"
      >
        Movies
      </NavLink>
      <NavLink
        className="menu_nav_link"
        to="/watched/tv-shows"
        activeClassName="active"
      >
        Tv Shows
      </NavLink>
      <SideNavHeader>
        <HeaderText>Saved</HeaderText>
      </SideNavHeader>
      <NavLink
        className="menu_nav_link"
        to="/saved/movies"
        activeClassName="active"
      >
        Movies
      </NavLink>
      <NavLink
        className="menu_nav_link"
        to="/saved/tv-shows"
        activeClassName="active"
      >
        Tv Shows
      </NavLink>
    </SideNavBarCont>
  );
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;

  &:hover {
    background: ${colors.primaryColor};
  }
`;

const NavIcon = styled.div<NavIconProps>`
  position: absolute;
  right: 35px;
  top: 50%;

  ${(props) =>
    props.arrow &&
    css`
      &::after {
        content: "";
        display: inline-block;
        background-image: url(${Arrow});
        background-size: contain;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-40%);
      }
    `}

  ${(props) =>
    props.search &&
    css`
      &::before {
        content: "";
        display: inline-block;
        background-image: url(${SearchWhite});
        background-size: contain;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-40%);
      }
    `}
`;

const SideNavHeader = styled.div`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  color: white;
   &::after {
    content: '';
    position: absolute;
    bottom: 0;
    padding-right: 35px:
    transform: translateX(-50%); 
    width: 245px; 
    border-bottom: 0.5px solid white; 
    margin-bottom: 5px
  }
`;

const HeaderText = styled.div``;

const NavLink = styled(Link)`
  display: block;
  padding: 10px 35px;
  color: white;
`;
