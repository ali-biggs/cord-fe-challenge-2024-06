import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";

import "./css/app.css";

export default function App(props: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNavBar = () => setIsOpen(!isOpen);

  return (
    <Router>
      <PageContainer>
        <SideNavBar isOpen={isOpen} toggleNavBar={toggleNavBar} />
        <ContentWrapper>
          <Switch>
            <Route
              path="/discover"
              render={() => (
                <Discover {...props} toggleNavBar={toggleNavBar} />
              )}
            />
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>
  );
}

const breakpoints = {
  mobile: "480px",
  desktop: "1024px",
};

const media = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
};

const ContentWrapper = styled.main`
  padding-left: 280px;

  @media ${media.mobile} {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const PageContainer = styled.main`
  overflow-x: hidden;
`;
