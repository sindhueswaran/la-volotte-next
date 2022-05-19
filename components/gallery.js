import Image from "next/image"; 
import homepage from "../data/homepage.json";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
     
    <div
      className={className}
      style={{ ...style, content:"f063", background: "#5AB51E" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,   background: "#5AB51E" }}
      onClick={onClick}
    />
  );
}

export default function Gallery() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    < > 
    <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
        
          <h2>{homepage.ladengallery.title}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      {/* <div className="row gallery-slider"> */}
      <Slider {...settings}> 
        {homepage.ladengallery.gallItem.map((item, index) => (
          <div className="col-lg-4 p-5" key={index}>
            <Image
              src={item.image}
              width={480}
              height={640}
              className="img-fluid"
              alt={item.name}
            />
          </div>
        ))}
        </Slider>
      {/* </div> */}
    </div>
  </section>
  </ >
  )
}
