import React, { useState, FC } from "react";
import Style from "./style";

const BasicComponents: FC<any> = () => {
  const [answer, setAnswer] = useState<string>("");

  let message = "Hello, World!";
  const titleTest = `1. JS Fundamentals: อธิบาย const แตกต่างจาก let อย่างไร?`;

  const handleIncrement = () => {
    message = "Answer";
    // answer = `'Const' it's a variable constants that can't be changed.`
    //Cannot assign to 'answer' because it is a constant.

    // answer จะทำให้ React รีเรนเดอร์คอมโพเนนต์ใหม่โดยใช้ค่า
    // answer ที่ถูกเปลี่ยนแปลงนั้น แต่เราไม่ได้เปลี่ยน const answer โดยตรง.

    setAnswer(
      `'Let' it's a variable that can be changed and 'Const' it's a variable constants that can't be changed.`
    );
  };

  return (
    <Style.ContainerUpload>
      <div className="container">
        <div className="content">
          <h3>{titleTest}</h3>
          <p>Answer : {answer}</p>
        </div>
        <Style.BtnAnswer onClick={handleIncrement}>
          <button className="button-75">
            <span className="text">Answer</span>
          </button>
        </Style.BtnAnswer>
      </div>
    </Style.ContainerUpload>
  );
};

export default BasicComponents;
