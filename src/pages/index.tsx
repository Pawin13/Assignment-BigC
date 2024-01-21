import styled from "styled-components";
import React, { Fragment, useState, FC, useContext } from "react";
import BasicComponents from "@/component/basicReact1";
import BasicHelloComponents from "@/component/basicReact2";
import CountNumber from "@/component/stateManagement/useStateHook";
import UserContextComponent from "@/component/stateManagement/contextAPI";

export default function Home() {
  return (
    <Fragment>
      <BasicComponents />;
      <BasicHelloComponents />
      <CountNumber />
      <UserContextComponent />
    </Fragment>
  );
}
