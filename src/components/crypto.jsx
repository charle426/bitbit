import laptop from "../images/5fac9aa80f78095f831b055d_image-home-hero-1-crypto-template-p-1600.png";
import phone from "../images/5fac956c1123e6b007cee815_image-mockup-cta-v2-2-crypto-template.png";
import "../assets/all.css";

export default function TradingGadgets() {

    return (
      <div
        className="relative w-full lg:py-8 lg:px-16 flex flex-col items-center px-5 py-5 gap-6"
      >
        <i className="fa fa-fa-truck-moving"></i>
        <img src={laptop} width="100%" alt="tradingLaptop" />
        <img
          className="hidden-el tradingPhone md:block hidden absolute bottom-4 right-16"
          src={phone}
          alt="tradingPhone"

        />
      </div>
    );
}

