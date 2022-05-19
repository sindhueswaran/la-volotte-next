import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

export default function FarbenSlider({
    farbimages,
    farbimg,
    farbtitle,
  }) {


    const options = {
      settings: {
        overlayColor: "rgb(0, 0, 0, 1)",
      },
      buttons: { 
        showDownloadButton: false,
      },
      caption: {
        captionColor: "#fff",
        captionTextTransform: "capitalize",
        captionFontSize: '1rem',
      },
      thumbnails: {
        showThumbnails: false,
      }
    };
  return (
    <>
      <div className="gallery">
              <SRLWrapper options={options}>  
                  {farbimages.map((farbimage, index) =>{ 
                return(
                <a key={index} href={farbimage.farbimg}>
                  <Image 
                      image={farbimage.farbimg}  
                      alt={farbimage.farbtitle}/> 
                      width={200}
                      height={200}
                </a>
                  )})} 
              </SRLWrapper>   
            </div>




      <div class="container">
        <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">
          Farben
        </h1>
        <hr class="mt-2 mb-5" />
        <div class="row text-center text-lg-left">
          {farbimages}
          <div class="col-lg-2 col-md-4 col-6 pb-5">
            <a 
              href="{farbimg}"
              data-lightbox="example-set"
              className="d-block mb-4 h-100"
              data-title="{farbtitle}"
            >
              <img
                class="example-image img-fluid d-block w-100"
                src={farbimg}
                alt=""
              />
            </a>
            <h5  >{farbtitle}</h5>
          </div> 
        </div>
      </div>
    </>
  );
}
