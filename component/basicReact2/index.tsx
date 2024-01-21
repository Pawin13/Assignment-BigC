import React, { useState, FC, useEffect } from "react";
import Style from "./style";

const BasicComponents: FC<any> = () => {
  const [answer, setAnswer] = useState<string>("");
  const testTitle =
    '2. React: สร้าง React component ง่ายๆ ที่แสดงข้อความ "Hello, World!" ในหน้าจอ';
  useEffect(() => {
    const message = "Hello, World!";

    setAnswer(message);
  }, [answer]);
  return (
    <Style.ContainerUpload>
      <div className="container">
        <div className="content">
          <h3>{testTitle}</h3>
          <h3 className="title">{answer}</h3>
        </div>
      </div>
    </Style.ContainerUpload>
  );
};

export default BasicComponents;
