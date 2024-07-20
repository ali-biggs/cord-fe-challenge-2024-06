import React from "react";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingCont>
      <Spline scene="https://my.spline.design/loadingdisksanimation1-6decfd5e3dd899dc7c0c07c37cb4023d/" />
    </LoadingCont>
  );
}

const LoadingCont = styled.div`
  width: 20px;
  height: 20px;
`;
