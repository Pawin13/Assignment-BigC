import styled from "styled-components";
import React, { Fragment, useState, FC } from "react";
import BasicComponents from "@/componentbasicReact1";
import BasicHelloComponents from "@/componentbasicReact2";
import CountNumber from "@/componentstateManagement/useStateHook";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <Fragment>
      <BasicComponents />;
      <BasicHelloComponents />
      <CountNumber />
    </Fragment>
  );
}
