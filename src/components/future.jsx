import React from "react"
import pic1 from "../images/5fac9327f9f576599367c4f9_image-mockup-section-about-crypto-template.png"
import pic2 from "../images/5fac94247756b82e4a7dfb8b_image-mockup-cta-v1-1-crypto-template.png"
export default
    class Future extends React.Component{
    render() {
        return (
          <div
            className="future-section lg:px-16 lg:py-20 md:px-8 md:py-16 flex items-center 
                    justify-between lg:h-auto"
          >
            <div className="relative future-pic flex lg:px-16 lg:py-20 justify-center items-center md:flex-1 w-full h-full">
              <div className="hidden-el relative w-full">
                <img
                  src={pic1}
                  alt="pic1"
                  className="absolute -rotate-6 left-1/3 top-1/2 -translate-x-2/4 -translate-y-2/4"
                  width="240px"
                />
                <img
                  src={pic2}
                  alt="pic2"
                  className="absolute rotate-6 z-10 left-2/3 top-1/2 -translate-x-2/4 -translate-y-2/4"
                  width="240px"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-10 md:flex-1 py-4 ">
              <h2>A crypto wallet from the future</h2>
              <p>
                Our advanced wallet sets a new standard with cutting-edge
                features, revolutionizing the way you manage and secure your
                crypto assets.
              </p>
              <div className="flex flex-col gap-2 items-start">
                <div className="flex items-center gap-3">
                  <div className="future-icon text-[25px] bg-[#6639e4] h-[50px] w-[50px] flex items-center justify-center px-2 py-2">
                    <i className="fa fa-chart-line"></i>
                  </div>
                  <div>
                    <p className="text-lg text-white">
                      Lowest fees in the market
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="future-icon text-[25px] bg-[#6639e4] h-[50px] w-[50px] flex items-center justify-center px-2 py-2">
                    <i className="fa fa-zap zap"></i>
                  </div>
                  <div>
                    <p className="text-lg text-white">
                      Fast and secure transactions
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="future-icon text-[25px] bg-[#6639e4] h-[50px] w-[50px] flex items-center justify-center px-2 py-2">
                    <i className="fa fa-lock"></i>
                  </div>
                  <div>
                    <p className="text-lg text-white">
                      256-bit secure transactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}