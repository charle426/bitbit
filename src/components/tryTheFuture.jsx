import pic1 from "../images/5fac9327f9f576599367c4f9_image-mockup-section-about-crypto-template.png"
import pic2 from "../images/5fac94247756b82e4a7dfb8b_image-mockup-cta-v1-1-crypto-template.png"
export default function Tryout() {
    return (
      <div className="tryOuts mt-36 w-full ">
        <div className="tryDiv flex md:flex-row flex-col lg:py-12">
          <div className="flex flex-col items-start text-start gap-6 w-full px-5 lg:px-20 ">
            <h2>
              Try the future today.
              <br />
              Download Bitbit today
            </h2>
            <p>
              Embrace the future of finance today – download our app to unlock
              limitless possibilities and seize your path to financial success.
            </p>
            <div>
              <a href="#">
                <button className="download">DOWNLOAD</button>
              </a>
            </div>
          </div>

          <div className="relative future-pic flex lg:px-16 lg:py-20 px-5 justify-center items-center w-full">
            <div className=" relative w-full">
              <img
                src={pic1}
                alt="pic1"
                className="absolute md:w-[250px] w-[200px] -rotate-6 z-10 left-1/3 -bottom-[270px] md:top-1/2 -translate-x-2/4 md:-translate-y-1/2"
              />
              <img
                src={pic2}
                alt="pic2"
                className="absolute w-[200px] md:w-[250px] rotate-6 left-2/3 -bottom-[270px] md:top-1/2 -translate-x-2/4 md:-translate-y-1/2"
              />
            </div>
          </div>
        </div>
        <div className=" w-full h-20 cover relative z-30"></div>
      </div>
    );
}