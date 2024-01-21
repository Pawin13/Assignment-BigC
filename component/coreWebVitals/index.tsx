import React, { FC, useState } from "react";
import Style from "./style";
import { useUsernameContext } from "@/contexts/userProfileContext";

const UserContextComponent: FC<any> = () => {
  const testTitle =
    "3.2. Context API: สร้าง React Context สำหรับเก็บ username และฟังกช์สำหรับ update username";
  const { username, setUsername } = useUsernameContext();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <Style.ContainerDisplay>
      <div className="container">
        <div className="content">
          <h3>{testTitle}</h3>
          <h3 className="title">{username}</h3>
          <Style.InputBox>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                id="name"
                placeholder="Username"
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
              />
              <Style.BtnAnswer>
                <button className="button-75">
                  <span
                    className="text"
                    onClick={(e) => setUsername(inputValue)}
                  >
                    Update
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

export default UserContextComponent;
