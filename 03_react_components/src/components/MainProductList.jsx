
import Card from "./my-card/card"

const MainProductList = () => {

    return (
        <>
        <div style={{display: "flex",justifyContent: "center"}}>
            <Card pic="https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg" title="标题1" text="文本1"></Card>
           <Card pic="https://www.helloimg.com/i/2025/02/24/67bc26831d905.jpg" title="标题1" text="文本1"></Card>
           <Card pic="https://www.helloimg.com/i/2025/02/24/67bc2696a3ce2.jpg" title="标题1" text="文本1"></Card>
        </div>
           
        </>
    )
}
export default MainProductList