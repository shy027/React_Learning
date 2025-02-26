/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2025-02-24 17:04:26
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2025-02-24 18:51:23
 * @FilePath: \03_react_components\src\components\card\Card.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./style.css";
const Card = ({ header, body, footer }) => {
  return (
    <>
      <div className="card">
        <div className="header">{header}</div>
        <div className="body">{body}</div>
        <div className="footer">{footer}</div>
      </div>
    </>
  );
};
export default Card;
