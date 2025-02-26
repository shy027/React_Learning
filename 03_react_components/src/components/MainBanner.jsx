import { Carousel } from 'antd';

const MainBanner = () => {
  return (
  <div>
    <Carousel slidesToShow={1} slidesToScroll={1} style={{ justifyContent: 'center', alignItems: 'center'}}>
  <div>
    <img src='https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg' width="100%" height="500px"/>
  </div>
  <div>
  <img src='https://www.helloimg.com/i/2025/02/24/67bc26831d905.jpg'  width="100%" height="500px"/>
  </div>
  <div>
  <img src='https://www.helloimg.com/i/2025/02/24/67bc2696a3ce2.jpg'  width="100%" height="500px"/>
  </div>
</Carousel>
  </div>
);
};
export default MainBanner
