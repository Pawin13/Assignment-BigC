import React, { useState, FC, useEffect } from "react";
import Style from "./style";

const CountNumber: FC<any> = () => {
  const [counter, setCounter] = useState<number>(0);
  const testTitle =
    "3.2. useState Hook: `ใช้ useState ในการสร้าง counter ที่สามารถ +1 หรือ -1";

  const handleCounter = (type: string) => {
    console.log("---- handleCounter-----", type);
    const counterNum = type === "plus" ? counter + 1 : counter - 1;
    setCounter(counterNum);
  };
  return (
    <Style.ContainerDisplay>
      <div className="container">
        <div className="content">
          <h3>{testTitle}</h3>
          <h3 className="title">Count : {counter}</h3>
          <div className="btn-layout">
            <Style.BtnAnswer onClick={(e) => handleCounter("plus")}>
              <button className="button-75">
                <span className="text">Plus</span>
              </button>
            </Style.BtnAnswer>
            <Style.BtnAnswer onClick={(e) => handleCounter("minus")}>
              <button className="button-75">
                <span className="text">Minus</span>
              </button>
            </Style.BtnAnswer>
          </div>
        </div>
      </div>
    </Style.ContainerDisplay>
  );
};

export default CountNumber;
