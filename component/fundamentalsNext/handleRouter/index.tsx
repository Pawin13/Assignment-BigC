import React, { FC, useState } from "react";
import Style from "./style";
import { useRouter } from "next/router";

const RouterComponent: FC<any> = ({ title, redirectUrl }) => {
  const router = useRouter();
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
          {redirectUrl === "/about" ? (
            <>
              <h3>{testTitle}</h3>
              <p>{answerNewPage}</p>
              <p>{answerRouter}</p>
            </>
          ) : (
            <>
              <h3>{title}</h3>
            </>
          )}
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
