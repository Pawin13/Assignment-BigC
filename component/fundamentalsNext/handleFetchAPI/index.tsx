import React, { FC } from "react";
import Style from "./style";
import { useRouter } from "next/router";

const FetchComponent: FC<any> = ({ data }) => {
  const router = useRouter();
  const redirectUrl = "/about";
  const testTitle =
    "2.2. Data Fetching: ใช้ getStaticProps ในการ fetch data จาก API และแสดงผลใน component";

  const handleButtonClick = () => {
    router.push(redirectUrl);
  };

  return (
    <Style.ContainerDisplay>
      <div className="container">
        <div className="content">
          <h3>{testTitle}</h3>
        </div>
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
    </Style.ContainerDisplay>
  );
};

export default FetchComponent;
