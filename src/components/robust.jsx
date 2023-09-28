import robustLaptop from "../images/5fac4393d23be745c00c8137_image-mockup-specs-2-crypto-template.png";
export default function Robust() {
    return (
      <div className="robustContainer w-full gap-3 md:overflow-x-hidden relative">
        <div className="robustContent grid lg:grid-cols-2 grid-cols-1 align-middle lg:px-16 lg:py-15 px-5 ">
          <div className="platform flex flex-col items-start gap-5">
            <h2>Built on a robust and powerful platform</h2>
            <p>
              Our platform's robust and powerful architecture empowers you to
              navigate the dynamic world of cryptocurrencies with unparalleled
              ease and confidence.
            </p>
            <div className="flex flex-col items-start gap-5">
              <h4 className="flex items-center gap-4">
                <i className="fa fa-shield-alt"></i>
                <span>100% Private data</span>
              </h4>
              <h4 className="flex items-center gap-4">
                <i className="fa fa-virus-covid"></i>
                <span>99.99% Uptime guarantee</span>
              </h4>
              <h4 className="flex items-center gap-4">
                <i className="fa fa-comment-dots"></i>
                <span>24/7 Dedicated support</span>
              </h4>
            </div>
          </div>
          <div className="w-full h-full md:mt-0 mt-3 ">
            <img
              src={robustLaptop}
              alt="img"
              className="robust-pic top-50 left-0 lg:absolute mx-auto lg:mt-0 mt-10 relative w-full md:w-9/12 -z-10 grid place-items-center"
            />
          </div>
        </div>
      </div>
    );
}