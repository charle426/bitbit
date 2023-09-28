import { Link, } from "react-router-dom";
// import ProPlan from "../pro-plan";
export default function PriceTags() {
    return (
      <section className="price-tags flex lg:flex-nowrap flex-wrap items-center justify-center mb-9 lg:px-16 md:px-8">
        <div className="flex flex-col w-full gap-10 mx-3 my-4 px-5 py-12">
          <div className="flex flex-col gap-4">
            <h4 className="text-start rounded-3xl bg-[#6639E4] px-3 py-1 w-fit font-bold text-white">
              BASIC
            </h4>
            <h2 className="price uppercase">$ 9.00 usd</h2>
            <p className="line-clamp-3">
              Accessible for beginners, our Basic Plan offers essential crypto
              tools and insights for a solid start.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4>FEATURES</h4>
            <ul className="list-disc marker:text-purple-600 list-inside">
              <li className="my-2">Trading up to $100k per month</li>
              <li className="my-2">Send and recieve over 85 tokens</li>
              <li className="my-2">Real-time trading crypto</li>
              <li className="my-2">IOS and android app</li>
            </ul>
          </div>
          <div>
            <Link to="/pricing/basic">
              <button className="download w-full uppercase">add to cart</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full mx-3 my-4 px-5 py-12">
          <div className="flex flex-col gap-4">
            <h4 className="text-start rounded-3xl bg-[#6639E4] px-3 py-1 w-fit font-bold text-white">
              PRO
            </h4>
            <h2 className="price uppercase">$ 18.00 usd</h2>
            <p className="line-clamp-3">
              Elevate your trading game with our Pro Plan, featuring advanced
              features and expert analysis for serious investors.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4>FEATURES</h4>
            <ul className="list-disc marker:text-purple-600 list-inside">
              <li className="my-2">Everything included in basic</li>
              <li className="my-2">Trading up to $1MM per month</li>
              <li className="my-2">Windows and macOS app</li>
              <li className="my-2">Premium support</li>
            </ul>
          </div>
          <div>
            <Link to="/pricing/pro">
              <button className="download w-full uppercase">add to cart</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full mx-3 my-4 px-5 py-12">
          <div className="flex flex-col gap-4">
            <h4 className="text-start rounded-3xl bg-[#6639E4] px-3 py-1 w-fit font-bold text-white">
              EXPERT
            </h4>
            <h2 className="price uppercase">$ 99.00 usd</h2>
            <p className="line-clamp-3">
              For seasoned pros, our Expert Plan provides comprehensive tools,
              personalized strategies, and premium support for maximum success.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4>FEATURES</h4>
            <ul className="list-disc marker:text-purple-600 list-inside">
              <li className="my-2">Everythnig included in PRO</li>
              <li className="my-2">Trading over $10MM per month</li>
              <li className="my-2">Window and macOS app</li>
              <li className="my-2">Dedicated support</li>
            </ul>
          </div>
          <div>
            <Link to="/pricing/expert">
              <button className="download w-full uppercase">add to cart</button>
            </Link>
          </div>
        </div>
      </section>
    );
}