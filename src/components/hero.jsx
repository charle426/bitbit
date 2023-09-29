import { Link } from "react-router-dom";
import heroPic from "../images/5fad5b5aab11b7ddf2b9770a_bg-home-hero-2-crypto-template.svg";
export default function Hero() {
    return (
        <section id="hero" className="lg:py-5 lg:px-16 md:py-2 px-3 w-full">
            <img src= {heroPic} width="800px" className=" img-fluid absolute -left-52 -top-8 -z-10" />
            <img src= {heroPic} width="800px" className=" img-fluid absolute -right-0 -bottom-2-0 -z-10" />

            <div id="buy" className="lg:w-8/12 lg:mt-20 gap-7 grid md:w-full md:gap-3 ">
                <h1 className="m-0 leading-tight">
                    Buy and trade Cryptos like Never Before.
                </h1>
                <h4 className="mb-3 lg:w-2/3 text-white">
                Get started with crypto trading today by downloading our app now! 
                for easy, secure, and informed trading of digital assets.
                </h4>
                <div className="mb-3 flex items-center gap-1 md:gap-6">
                    <button className=" download">
                        DOWNLOAD APP
                    </button>
                    <Link to="/pricing">
                         <button className="download pricing">
                       VIEW PRICING
                    </button>
                    </Link>
                   
                </div>
            </div>
        </section>
    )    
}