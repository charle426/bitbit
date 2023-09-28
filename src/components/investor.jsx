import logo1 from "../images/am.png"
import logo2 from "../images/discover.png"
import logo3 from "../images/shopify.png"
import logo4 from "../images/jcb.png"
import logo5 from "../images/paypal.png"
export default function Investors() {
    return (
      <div className="w-full mt-28 mb-28 lg:w-[95%] md:w-full mx-auto">
        <div className="mb-8 text-center max-w-[450px] mx-auto">
          <h2 className="mb-4">Investors</h2>
          <p>
            Our investors share our vision, providing the resources and
            expertise needed to drive our company`s growth and success.
          </p>
        </div>
        <div className="flex flex-wrap flex-grow items-center justify-between px-24">
          <div>
            <img
              src={logo1}
              width="100%"
              alt="logo-img"
              className="grayscale hover:grayscale-0 transition hover:-translate-y-1"
            />
          </div>
          <div>
            <img
              src={logo2}
              width="100%"
              alt="logo-img"
              className="grayscale hover:grayscale-0 transition duration-300 hover:-translate-y-1"
            />
          </div>
          <div>
            <img
              src={logo3}
              width="100%"
              alt="logo-img"
              className="grayscale hover:grayscale-0 transition duration-300 hover:-translate-y-1"
            />
          </div>
          <div>
            <img
              src={logo4}
              width="100%"
              alt="logo-img"
              className="grayscale hover:grayscale-0 transition duration-300 hover:-translate-y-1"
            />
          </div>
          <div>
            <img
              src={logo5}
              width="100%"
              alt="logo-img"
              className="grayscale hover:grayscale-0 transition duration-300 hover:-translate-y-1"
            />
          </div>
          {/* <div></div> */}
        </div>
      </div>
    );
}