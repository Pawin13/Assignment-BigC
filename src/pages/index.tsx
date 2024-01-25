import React, { Fragment } from "react";
import BasicComponents from "@/component/basicReact1";
import BasicHelloComponents from "@/component/basicReact2";
import CountNumber from "@/component/stateManagement/useStateHook";
import VitalsComponent from "@/component/stateManagement/contextAPI";
import RouterComponent from "@/component/fundamentalsNext/handleRouter";
import FetchComponent from "@/component/fundamentalsNext/handleFetchAPI";
import UserContextComponent from "@/component/coreWebVitals";

export default function Home() {
  const Asm2 =
    "2. สร้างหน้า PLP (Product Listing Page) และให้รองรับการใช้งานแบบ Responsive";
  return (
    <Fragment>
      <BasicComponents />
      <BasicHelloComponents />
      <RouterComponent redirectUrl={"/about"} />
      <FetchComponent />
      <CountNumber />
      <UserContextComponent />
      <VitalsComponent />
      <RouterComponent title={Asm2} redirectUrl={"/product"} />
    </Fragment>
  );
}
