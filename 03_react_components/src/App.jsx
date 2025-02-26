// import WelcomeClass from "./components/WelcomeClass";
// import WelcomeFunc from "./components/WelcomeFunc";
// import Student from "./components/Student";
// import RandomName from "./components/RandomName";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Main from "./components/Main";
// import Button from "./components/Button";
// import UserPage from "./components/UserPage"
// import Button1 from "./components/Button1"
// import InputParent from "./components/InputParent"
// import RegistPage from "./components/RegistPage"
// import Card from "./components/card/Card"
import BookInput from "./components/library/BookInput"

const App = () => {

  const handleClick = () => {
    alert("点击了按钮1")
  }

  return (
    <>
  {/* <WelcomeClass name="World"></WelcomeClass>
  <WelcomeFunc name="React"></WelcomeFunc> */}
  {/* <Student name="shy" avatar="https://www.helloimg.com/i/2024/10/08/670513635044e.jpg" age="20"></Student> */}
  {/* <RandomName></RandomName> */}
  {/* <Header></Header>
  <Main></Main>
  <Footer></Footer> */}
  {/* <Button onClick={handleClick}></Button> */}
  {/* <UserPage></UserPage> */}
  {/* <Button1 onClick={handleClick}></Button1> */}
  {/* <InputParent></InputParent> */}
  {/* <RegistPage></RegistPage> */}
  {/* <Card
  header={<h1>这里是标题</h1>}
  body={<p>这里是内容</p>}
  footer={<button>按钮</button>}
  ></Card> */}
  <BookInput></BookInput>
  </>
  )
}

export default App;