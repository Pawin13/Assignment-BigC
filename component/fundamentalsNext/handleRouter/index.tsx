import React, { FC, useState } from "react";
import Style from "./style";
import { useUsernameContext } from "@/contexts/userProfileContext";
import { useRouter } from "next/router";

const RouterComponent: FC<any> = () => {
  const router = useRouter();
  const redirectUrl = "/about";
  const testTitle =
    "2.1. Routing: ใน Next.js, หากต้องการสร้าง route ใหม่คุณต้องทำอย่างไร?";
  const answerNewPage = "1.new page on folder /pages [namePage].tsx ";
  const answerRouter = "2.use router push by redirectUrl";

  const handleButtonClick = () => {
    router.push(redirectUrl);
  };

  return (
    <Style.ContainerDisplay>
      <div className="container">
        <div className="content">
          <h3>{testTitle}</h3>
          <p>{answerNewPage}</p>
          <p>{answerRouter}</p>
          <Style.InputBox>
            <div className="form-group">
              <Style.BtnAnswer>
                <button className="button-75">
                  <span className="text" onClick={handleButtonClick}>
                    Next Page
                  </span>
                </button>
              </Style.BtnAnswer>
            </div>
          </Style.InputBox>
        </div>
      </div>
    </Style.ContainerDisplay>
  );
};

export default RouterComponent;
