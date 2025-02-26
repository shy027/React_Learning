import {Anchor} from "antd"

const Header = () => {
  const { Link } = Anchor;
  return (
  <div style={{background: "#FFBCD6",padding: "20px"}}>
  <Anchor direction="horizontal">
    <Link href="#home" title="首页" />
    <Link href="#email" title="邮件" />
    <Link href="#setting" title="设置" />
</Anchor>
  </div>
  )
};
export default Header
