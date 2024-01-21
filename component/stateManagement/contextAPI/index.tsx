import React, { FC, useState } from "react";
import Style from "./style";
import { useUsernameContext } from "@/contexts/userProfileContext";

const UserContextComponent: FC<any> = () => {
  const testTitle =
    "4.1. CLS: อธิบายว่าอะไรคือ Cumulative Layout Shift (CLS) และมันสำคัญอย่างไร";
  const testTitle2 =
    "4.1. LCP: จงหารวิธีในการปรับปรุง Largest Contentful Paint (LCP) ในเว็บไซต์";

  const answerCLS =
    "Layout Shift เกิดจากการที่ไม่ได้จองพื้นที่ให้ Elment เมื่อมีการโหลดของตามมาทำให้หน้าจอขยับ จะเจอในพวก image มันสำคัญอย่างไร? มองว่ามีผลต่อ SEO ที่Googleมีการตรวจส่วนหนึ่ง และมีผลต่อการใช้งานของUserด้วย";

  return (
    <Style.ContainerDisplay>
      <div className="container">
        <div className="content">
          <h3>{testTitle}</h3>
          <p>{answerCLS}</p>
          <h3>{testTitle2}</h3>
          <p>1.ปรับปรุงการโหลดข้อมูล: re-size image</p>
          <p>2.การตั้งค่าแคช : เพื่อลดการโหลดข้อมูลที่ซ้ำซ้อน</p>
          <p>
            3.การลบหรือลดการใช้ JavaScript ที่ไม่จำเป็น :
            เพื่อลดการโหลดข้อมูลที่ซ้ำซ้อน
          </p>
          <p>4.การใช้งาน Lazy Loading</p>
          <p>
            5.การใช้งาน Server-Side Rendering
            (SSR):เพื่อลดการโหลดที่ต้องทำในฝั่งของ client.
          </p>
        </div>
      </div>
    </Style.ContainerDisplay>
  );
};

export default UserContextComponent;
