import PriceTags from "./components/pricingTags.jsx";
export default function Pricing() {
    
    return (
      <>
        <div className="w-full h-[300px] flex items-center justify-center text-center">
          <div className="max-w-[550px]">
            <h1>Pricing</h1>
            <p className="font-medium">
              Our pricing structure is competitive, offering affordable access
              to our cutting-edge crypto solutions, ensuring financial
              empowerment for all.
            </p>
          </div>
        </div>
        <div className="walletGridPricing flex flex-wrap items-center justify-center w-full">
          <div className="text-start flex items-center gap-3">
            <h4 className="text-white">
              <i className="fa fa-money-bill-transfer text-start"></i>
            </h4>
            <h4 className="text-white">Send and Receive</h4>
          </div>
          <div className="text-start flex items-center gap-3">
            <h4 className="text-white">
              <i className="fa fa-chart-line text-start"></i>
            </h4>
            <h4 className="text-white">Trading Charts</h4>
          </div>
          <div className="text-start flex items-center gap-3">
            <h4 className="text-white">
              <i className="fa fa-wallet text-start"></i>
            </h4>
            <h4 className="text-white">wallet</h4>
          </div>
          <div className="text-start flex items-center gap-3">
            <h4 className="text-white">
              <i className="fa fa-refresh text-start"></i>
            </h4>
            <h4 className="text-white">real-time trading</h4>
          </div>
        </div>
        <PriceTags />
      </>
    );
}