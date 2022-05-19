import Image from 'next/image'
import homepage from "../data/homepage.json";

export default function Events( ) {
  return (
    < >
      {/* <!-- call to  action -->
{{ with .Site.Data.homepage.event }} */}
<section className="py-4 bg-gradient position-relative">
  <Image src={homepage.event.overlayImage} className="img-fluid overlay-image" width={100} height={100} alt=""/>
  <div className="container event-bg">
    <div className="row">
      <div className="col-lg-8 col-md-7">
        <h2 className="text-white">{homepage.event.title}</h2>
        <p className="text-white">{homepage.event.content}</p>
        
        <a href={homepage.event.button.link} className="btn btn-light">{homepage.event.button.label}</a>
  
      </div>
      <div className="col-lg-4 col-md-5 position-relative">
        <Image className="cta-image" src={homepage.event.overlayImage} width={100} height={100}  alt=""  />
        {/* style="width: 100%;" */}
      </div>
    </div>
  </div>
</section>
    </ >
  )
}
