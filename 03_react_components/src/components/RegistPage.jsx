/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2025-02-24 15:08:25
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2025-02-24 15:39:27
 * @FilePath: \03_react_components\src\components\RegistPage.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEP
 */
import RegistForm from "./RegistForm";
import { useState } from "react";

const RegistPage = () => {
  const [NameValue, setNameValue] = useState("");
  const [EmailValue, setEmailValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit1 = (newVal) => {
    setNameValue(newVal);
  };
  const handleFormSubmit2 = (newVal) => {
    setEmailValue(newVal);
  };
  const handleSubmit = () => {
    setIsSubmitted(true); // 点击按钮时，设置为显示数据
  };

  return (
    <>
      <h1>用户注册</h1>
      <RegistForm onInputChange={handleFormSubmit1} /><br></br>
      <RegistForm onInputChange={handleFormSubmit2} /><br></br>
      <button onClick={handleSubmit}>提交</button>
      <h2>提交数据</h2>
      {isSubmitted && ( // 只有在点击按钮后才显示数据
        <>
          <h2>姓名：{NameValue}</h2>
          <h2>邮箱：{EmailValue}</h2>
        </>
      )}
    </>
  );
};
export default RegistPage;
